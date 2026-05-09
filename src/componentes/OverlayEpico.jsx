// Este es el componente que aparece a pantalla completa cuando se activa
// uno de mis easter eggs de anime. Pone el GIF a lo grande, el nombre
// de la técnica y un botón para volver. También se cierra diciendo "volver".

function OverlayEpico({ egg, onCerrar }) {
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: `radial-gradient(circle at center, ${egg.color} 0%, #000 100%)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                animation: 'aparecer-epico 0.8s ease-out',
                overflow: 'hidden'
            }}
        >
            {/* Capa de "ruido" tenue para darle más rollo cinematográfico */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)',
                pointerEvents: 'none'
            }} />

            <h1
                style={{
                    color: '#fff',
                    fontSize: 'clamp(24px, 5vw, 56px)',
                    fontWeight: 900,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    margin: '0 0 8px 0',
                    animation: 'texto-brillo 1.5s ease-in-out infinite',
                    textAlign: 'center',
                    zIndex: 2
                }}
            >
                {egg.titulo}
            </h1>

            <p style={{
                color: '#ffd6e7',
                fontSize: 'clamp(14px, 2vw, 22px)',
                marginBottom: '24px',
                fontStyle: 'italic',
                zIndex: 2,
                textAlign: 'center'
            }}>
                {egg.subtitulo}
            </p>

            <img
                src={egg.gif}
                alt={egg.titulo}
                style={{
                    maxWidth: '70vw',
                    maxHeight: '60vh',
                    borderRadius: '16px',
                    border: '3px solid rgba(255, 255, 255, 0.4)',
                    animation: 'pulso-aura 2s ease-in-out infinite',
                    zIndex: 2
                }}
            />

            <p style={{
                color: '#fff',
                marginTop: '24px',
                fontSize: '14px',
                opacity: 0.7,
                zIndex: 2
            }}>
                Di <strong style={{ color: '#5EEAD4' }}>"volver"</strong> para regresar
            </p>

            <button
                onClick={onCerrar}
                style={{
                    marginTop: '12px',
                    padding: '10px 28px',
                    background: 'linear-gradient(135deg, #ff006e, #9D4EDD)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    zIndex: 2,
                    boxShadow: '0 4px 20px rgba(255, 0, 110, 0.5)'
                }}
            >
                ← VOLVER
            </button>
        </div>
    );
}

export default OverlayEpico;
