# Tarea 2 UT7 — Voz Ninja: Easter Eggs Anime

Proyecto de la asignatura **Aplicaciones Naturales de Usuario** (2º DAM) de **Ancor Valentín Martín**.

App React + Vite donde un **ninja se mueve por la pantalla con tu voz**. Hasta aquí lo normal. Lo gnuevo es lo que pasa cuando dices ciertas frases secretas de **Bleach** y **Jujutsu Kaisen**: la pantalla se rompe, gira, se invierte o tiembla, y aparece un GIF del personaje haciendo su técnica. 

---

## ✨ Características

-  **Movimiento por voz** en español con `react-speech-recognition`: `arriba`, `abajo`, `izquierda`, `derecha`, `centro`.
-  **Personaje animado** (GIF) con aura neón que se desliza con `cubic-bezier`.
-  **Panel de controles** flotante con efecto vidrio esmerilado (botones manuales de respaldo).
-  **7 Easter Eggs anime** con GIFs locales y **animaciones CSS **:

| Frase | Personaje | Efecto en pantalla |
|---|---|---|
|  `Malevolent Shrine` | Sukuna (JJK) | Screen shake + tinte rojo sangre |
|  `Infinite Void` | Gojo (JJK) | Colores invertidos parpadeando |
|  `Bankai Tensa Zangetsu` | Ichigo (Bleach) | Relámpago azul |
|  `Kyoka Suigetsu` | Aizen (Bleach) | La realidad se rompe (skew + blur) |
|  `Saca Sama no Sekai` | Shinji (Bleach) | La pantalla rota 180° |
|  `Welcome to my Soul Society` | Aizen TYBW | Efecto cristal |
|  `The Almighty` | Yhwach (TYBW) | Filtro sepia / dorado |

> Cada easter egg tiene **muchas variantes y aberraciones fonéticas** (porque el reconocedor en español ODIA el japonés). Por ejemplo, `"de old mig"` también activa a Yhwach

---

## 📸 Capturas y GIFs


| App principal | Easter Egg Gojo | Easter Egg Sukuna |
|---|---|---|
| ![Ninja](public/ninja.gif) | ![Gojo](public/gojo.gif) | ![Sukuna](public/sukuna.gif) |

| Bankai Ichigo | Aizen Kyoka Suigetsu | Shinji Sakasama |
|---|---|---|
| ![Ichigo](public/ichigo.gif) | ![Aizen](public/aizen.gif) | ![Shinji](public/shinji.gif) |

| Aizen TYBW | The Almighty Yhwach |
|---|---|
| ![Aizen TYBW](public/aizen-tybw.gif) | ![Yhwach](public/yhwach.gif) |

---

## 🚀 Cómo lanzarlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en **Chrome** o **Edge** (la Web Speech API no va en Firefox).

1. Pulsa **▶ Start** y da permisos al micro.
2. Di `arriba`, `abajo`, `izquierda` o `derecha` para mover al ninja.

---

## 🛠️ Stack

- React 18 + Vite 6
- `react-speech-recognition` 3.10
- `regenerator-runtime`
- CSS puro con `@keyframes` para los efectos épicos

---

## 🎨 Paleta

Futurista: morados profundos `#9D4EDD`, verde menta neón `#5EEAD4` y rosa fucsia `#ff006e`. Fondos radiales, cuadrícula sutil y mucho `box-shadow` con brillo.

---

## ⚠️ Compatibilidad

- ✅ Chrome / Edge (escritorio y Android)
- ❌ Firefox / Safari / Opera (Web Speech API limitada)
