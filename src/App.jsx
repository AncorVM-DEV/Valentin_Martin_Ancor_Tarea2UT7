import { useState, useEffect, useRef } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { buscarEasterEgg } from './easterEggs'
import Personaje from './componentes/Personaje'
import PanelControles from './componentes/PanelControles'
import OverlayEpico from './componentes/OverlayEpico'
import './App.css'

// Cuántos píxeles se mueve el personaje en cada comando de voz.
// Lo pongo como constante por si lo quiero subir/bajar luego sin buscarlo por el código.
const PASO = 50;

// Tamaño aproximado del personaje, lo uso para que no se salga de la pantalla
const TAM_PERSONAJE = 120;

function App() {
    // Aquí guardo la posición para que el cuadrado no se salga de la pantalla.
    // Empiezo en el centro de la ventana
    const [posicion, setPosicion] = useState({
        x: window.innerWidth / 2 - TAM_PERSONAJE / 2,
        y: window.innerHeight / 2 - TAM_PERSONAJE / 2
    });

    // Easter egg activo (si hay uno mostrándose en pantalla)
    const [easterActivo, setEasterActivo] = useState(null);

    // Último comando reconocido, lo muestro en pantalla para que se vea qué he dicho
    const [ultimoComando, setUltimoComando] = useState('');

    // Para que un mismo transcript no dispare el mismo easter egg en bucle
    const ultimoEasterRef = useRef('');

    // Defino los comandos de movimiento. La librería react-speech-recognition
    // me deja pasarle un array de comandos y ejecutar callbacks
    const comandos = [
        {
            command: ['arriba', 'sube', 'subir'],
            callback: () => moverPersonaje('arriba'),
            matchInterim: true
        },
        {
            command: ['abajo', 'baja', 'bajar'],
            callback: () => moverPersonaje('abajo'),
            matchInterim: true
        },
        {
            command: ['izquierda', 'izq'],
            callback: () => moverPersonaje('izquierda'),
            matchInterim: true
        },
        {
            command: ['derecha', 'der'],
            callback: () => moverPersonaje('derecha'),
            matchInterim: true
        },
        {
            command: ['centro', 'centrar'],
            callback: () => centrarPersonaje(),
            matchInterim: true
        },
        {
            command: 'volver',
            callback: () => cerrarEasterEgg(),
            matchInterim: true
        },
        {
            command: 'reiniciar',
            callback: ({ resetTranscript }) => {
                resetTranscript();
                setUltimoComando('');
            },
            matchInterim: true
        }
    ];

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({ commands: comandos });

    // Cada vez que cambia el transcript miro si hay alguna frase épica de anime
    // que haya pronunciado, y si la hay, activo el easter egg
    useEffect(() => {
        if (!transcript) return;
        const egg = buscarEasterEgg(transcript);
        if (egg && egg.frase !== ultimoEasterRef.current) {
            ultimoEasterRef.current = egg.frase;
            setEasterActivo(egg);
            setUltimoComando(`✨ ${egg.frase.toUpperCase()} ✨`);
        }
    }, [transcript]);

    // Función que mueve el personaje según la dirección
    function moverPersonaje(direccion) {
        setUltimoComando(direccion);
        setPosicion((pos) => {
            let nuevoX = pos.x;
            let nuevoY = pos.y;
            if (direccion === 'arriba') nuevoY = pos.y - PASO;
            if (direccion === 'abajo') nuevoY = pos.y + PASO;
            if (direccion === 'izquierda') nuevoX = pos.x - PASO;
            if (direccion === 'derecha') nuevoX = pos.x + PASO;

            // Limito para que no se salga de la ventana
            nuevoX = Math.max(0, Math.min(window.innerWidth - TAM_PERSONAJE, nuevoX));
            nuevoY = Math.max(0, Math.min(window.innerHeight - TAM_PERSONAJE, nuevoY));

            return { x: nuevoX, y: nuevoY };
        });
    }

    function centrarPersonaje() {
        setUltimoComando('centrar');
        setPosicion({
            x: window.innerWidth / 2 - TAM_PERSONAJE / 2,
            y: window.innerHeight / 2 - TAM_PERSONAJE / 2
        });
    }

    function cerrarEasterEgg() {
        setEasterActivo(null);
        ultimoEasterRef.current = '';
        setUltimoComando('volver');
        resetTranscript();
    }

    // Funciones para los botones manuales (por si no funciona el micro)
    function empezarEscucha() {
        SpeechRecognition.startListening({ continuous: true, language: 'es-ES' });
    }

    function pararEscucha() {
        SpeechRecognition.stopListening();
    }

    if (!browserSupportsSpeechRecognition) {
        return (
            <div className="error-navegador">
                <h1>😔 Tu navegador no soporta reconocimiento de voz</h1>
                <p>Prueba con Google Chrome o Microsoft Edge.</p>
            </div>
        );
    }

    return (
        <div className="contenedor-app">
            {/* Si hay un easter egg activo lo muestro a pantalla completa */}
            {easterActivo && (
                <OverlayEpico
                    egg={easterActivo}
                    onCerrar={cerrarEasterEgg}
                />
            )}

            {/* La app normal: personaje moviéndose por la pantalla */}
            {!easterActivo && (
                <>
                    <Personaje x={posicion.x} y={posicion.y} tam={TAM_PERSONAJE} />
                    <PanelControles
                        listening={listening}
                        transcript={transcript}
                        ultimoComando={ultimoComando}
                        onStart={empezarEscucha}
                        onStop={pararEscucha}
                        onReset={resetTranscript}
                        onMover={moverPersonaje}
                        onCentrar={centrarPersonaje}
                    />
                </>
            )}
        </div>
    );
}

export default App
