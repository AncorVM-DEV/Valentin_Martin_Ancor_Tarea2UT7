# Informe Técnico — Tarea 2 UT7

**Alumno:** Ancor Valentín Martín
**Curso:** 2º DAM
**Asignatura:** Aplicaciones Naturales de Usuario

---

## Introducción

Para esta segunda tarea he montado una aplicación React desde cero con Vite donde un personaje (un ninja, en honor al rollo anime) se mueve por la pantalla diciendo `arriba`, `abajo`, `izquierda` y `derecha`. Pero no me he querido quedar en lo básico, así que le he metido **easter eggs épicos de anime**: si pronuncias frases secretas de Bleach o Jujutsu Kaisen, la pantalla cambia radicalmente y aparece un GIF a lo grande del personaje haciendo su técnica. Es una pasada, la verdad.

## Estructura del proyecto

```
Valentin_Martin_Ancor_Tarea2UT7/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx                      ← lógica principal
   ├─ App.css                      ← estilos del fondo
   ├─ index.css                    ← estilos globales y animaciones
   ├─ easterEggs.js                ← diccionario de frases secretas
   └─ componentes/
      ├─ Personaje.jsx             ← el ninja que se mueve
      ├─ PanelControles.jsx        ← panel con botones e info
      └─ OverlayEpico.jsx          ← pantalla épica con GIFs
```

He separado el proyecto en componentes para que cada cosa tenga su sitio y no quede un `App.jsx` de 500 líneas que sea ilegible.

## Movimiento por voz

He usado la librería `react-speech-recognition`. La parte interesante es que admite un array de `commands` con sus callbacks, así que defino algo tipo:

```js
{ command: ['arriba', 'sube', 'subir'], callback: () => moverPersonaje('arriba'), matchInterim: true }
```

Acepto sinónimos para que sea más permisivo (a veces el reconocedor entiende "sube" antes que "arriba"). El `matchInterim: true` es clave porque hace que el comando se reconozca incluso antes de que el reconocedor termine de procesar la frase entera, así el ninja se mueve casi al instante.

En cada movimiento sumo o resto `PASO = 50px` a las coordenadas del personaje, y antes de aplicarlas las clipeo con `Math.max` y `Math.min` para que **el cuadrado no se salga de la pantalla**. Si no, podías mandar al ninja a Marte y no lo veías más.

También he añadido un comando `centro` para volver al medio y `reiniciar` para limpiar la transcripción.

## Diseño visual

Aquí me puse las pilas porque odio los proyectos que parecen del 2003. He montado:

- **Paleta cyberpunk**: morados profundos (`#9D4EDD`), verde menta neón (`#5EEAD4`) y rosa fucsia (`#ff006e`).
- **Fondo con gradientes radiales** y una cuadrícula sutil para que se note el movimiento del personaje.
- **Personaje animado**: un cuadrado con un degradado y un emoji de ninja, con un `box-shadow` que da efecto neón y una animación de flotación suave.
- **Panel de controles flotante** con `backdrop-filter: blur` para ese efecto vidrio esmerilado.
- **Transiciones cubic-bezier** en el movimiento del ninja para que "rebote" un poquito al llegar.

## Easter eggs épicos de anime 🥷✨ (la parte que más me gustó)

Aquí está la chicha. He creado un diccionario en `easterEggs.js` que mapea frases concretas a información del egg (GIF, título, subtítulo y un color base para el fondo épico). Las frases que activan los eggs son:

| Frase | Personaje | Anime |
|---|---|---|
| `expansión de dominio sukuna` / `malevolent shrine` | Sukuna Ryōmen (Fukuma Mizushi) | Jujutsu Kaisen |
| `expansión de dominio gojo` / `infinite void` | Satoru Gojō (Muryōkūsho) | Jujutsu Kaisen |
| `bankai tensa zangetsu` | Ichigo Kurosaki | Bleach |
| `kyoka suigetsu` | Sōsuke Aizen (farmeando aura) | Bleach |
| `yokoso sakasama no sekai e` | Shinji Hirako | Bleach |
| `yokoso watashi no soul society` | Aizen en la silla | Bleach TYBW |
| `the almighty` | Yhwach | Bleach TYBW |

Cada vez que cambia el `transcript` ejecuto un `useEffect` que llama a `buscarEasterEgg()`. Esa función normaliza el texto (lo pasa a minúsculas, le quita acentos y signos de puntuación, porque el reconocedor a veces mete tildes raras) y comprueba si alguna de las frases de mi diccionario está dentro de lo que he dicho.

Si encuentra una coincidencia, activa el componente `OverlayEpico` que toma el control de la pantalla:

- Fondo radial con el color base del personaje.
- Título de la técnica en mayúsculas con animación de **brillo pulsante** (`text-shadow` animado).
- Subtítulo con el nombre del personaje en cursiva.
- El **GIF a pantalla completa** con borde blanco y un aura roja que pulsa (`pulso-aura`).
- Una capa de "ruido" hecha con `repeating-linear-gradient` para darle un toque cinematográfico.

Para volver a la app normal puedo decir `volver` (o pulsar el botón). Lo gestiono con un `useRef` para evitar que el mismo egg se dispare dos veces seguidas si la frase queda en el transcript.

## Detalles técnicos curiosos

- **`continuous: true` y `language: 'es-ES'`**: lanzo el reconocimiento en modo continuo y en español, porque por defecto venía en inglés y no entendía nada.
- **Botones de respaldo manual**: he añadido flechas que mueven al ninja con clic, por si tu navegador no tiene micro o estás en clase y no puedes hablar.
- **Animaciones CSS** definidas en `index.css`: `aparecer-epico`, `pulso-aura`, `texto-brillo`, `flotar-suave`. Las he separado del CSS principal para que se puedan reutilizar.
- **`useRef` para el control del último egg**: si no, en cuanto pronuncias la frase el `useEffect` se dispara una y otra vez porque el transcript no se limpia solo.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`, pulsa **Start**, da permisos al micro y empieza a decir comandos. Y si quieres flipar de verdad... prueba a decir **"Bankai Tensa Zangetsu"** 😏

## Compatibilidad

La Web Speech API solo funciona bien en **Chrome** y **Edge**. En Firefox no va. Si abres la app en un navegador no soportado, te aparece un mensaje avisando.
