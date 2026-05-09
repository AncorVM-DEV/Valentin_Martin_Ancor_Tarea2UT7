// El panel de controles que sale en la esquina superior izquierda.
// He metido los botones de Start/Stop del micro, los flechas manuales
// (por si la profesora no quiere usar el micro), y la pista visual de
// qué he dicho yo y qué comando se ha reconocido.

function PanelControles({
    listening,
    transcript,
    ultimoComando,
    onStart,
    onStop,
    onReset,
    onMover,
    onCentrar
}) {

    const estiloBoton = {
        background: 'linear-gradient(135deg, #9D4EDD, #5EEAD4)',
        color: '#0f0c29',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: 700,
        margin: '4px',
        boxShadow: '0 4px 15px rgba(157, 78, 221, 0.4)',
        transition: 'transform 0.2s'
    };

    const estiloFlecha = {
        ...estiloBoton,
        width: '48px',
        height: '48px',
        padding: 0,
        fontSize: '20px'
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: 20,
                left: 20,
                background: 'rgba(15, 12, 41, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(94, 234, 212, 0.3)',
                borderRadius: '16px',
                padding: '20px',
                color: '#e0e0e0',
                zIndex: 10,
                maxWidth: '380px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}
        >
            <h2 style={{
                margin: 0,
                marginBottom: '8px',
                background: 'linear-gradient(90deg, #ff006e, #5EEAD4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                🎙️ Voz Ninja
            </h2>
            <p style={{ fontSize: '13px', color: '#bdbdbd', margin: '0 0 12px 0' }}>
                Di <strong style={{ color: '#5EEAD4' }}>arriba, abajo, izquierda, derecha</strong> para mover al ninja.
            </p>

            <div style={{
                fontSize: '14px',
                margin: '8px 0',
                padding: '8px',
                background: listening ? 'rgba(94, 234, 212, 0.15)' : 'rgba(255, 0, 110, 0.15)',
                borderRadius: '8px',
                border: `1px solid ${listening ? '#5EEAD4' : '#ff006e'}`
            }}>
                <span>Micro: <strong>{listening ? '🟢 ON' : '🔴 OFF'}</strong></span>
            </div>

            <div style={{ marginTop: '8px' }}>
                <button style={estiloBoton} onClick={onStart}>▶ Start</button>
                <button style={estiloBoton} onClick={onStop}>⏸ Stop</button>
                <button style={estiloBoton} onClick={onReset}>🔄 Reset</button>
            </div>

            <p style={{ fontSize: '12px', marginTop: '10px', color: '#9D4EDD' }}>
                Último comando: <strong style={{ color: '#5EEAD4' }}>{ultimoComando || '—'}</strong>
            </p>
            <p style={{ fontSize: '11px', color: '#888', wordBreak: 'break-word' }}>
                Transcripción: {transcript || '...'}
            </p>

            {/* Controles manuales de respaldo, por si el micro está chungo */}
            <div style={{ marginTop: '14px', borderTop: '1px solid rgba(94, 234, 212, 0.2)', paddingTop: '12px' }}>
                <p style={{ fontSize: '11px', color: '#888', margin: '0 0 8px 0' }}>Respaldo manual:</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <button style={estiloFlecha} onClick={() => onMover('arriba')}>⬆</button>
                    <div>
                        <button style={estiloFlecha} onClick={() => onMover('izquierda')}>⬅</button>
                        <button style={estiloFlecha} onClick={onCentrar}>●</button>
                        <button style={estiloFlecha} onClick={() => onMover('derecha')}>➡</button>
                    </div>
                    <button style={estiloFlecha} onClick={() => onMover('abajo')}>⬇</button>
                </div>
            </div>

            {/* Pista chiquitita de los easter eggs, no muy obvia */}
            <p style={{ fontSize: '10px', color: '#5EEAD4', marginTop: '14px', fontStyle: 'italic', opacity: 0.7 }}>
                * Hay frases secretas escondidas... 👀
            </p>
        </div>
    );
}

export default PanelControles;
