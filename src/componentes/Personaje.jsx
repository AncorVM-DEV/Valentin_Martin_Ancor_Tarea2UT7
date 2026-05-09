// Mi personaje, que se mueve por la pantalla con la voz.
// Antes era un cuadrado con CSS y un emoji, pero ahora le he metido un GIF
// de un ninja de verdad (/public/ninja.gif). Le mantengo el aura neón con
// box-shadow y drop-shadow para que siga viéndose épico.

function Personaje({ x, y, tam }) {
    return (
        <img
            src="/ninja.gif"
            alt="Ninja épico que se mueve con mi voz"
            className="personaje"
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: tam,
                height: tam,
                objectFit: 'contain',
                borderRadius: '20px',
                background: 'radial-gradient(circle, rgba(157,78,221,0.15) 0%, transparent 70%)',
                boxShadow: '0 0 30px rgba(157, 78, 221, 0.7), 0 0 60px rgba(255, 0, 110, 0.4)',
                filter: 'drop-shadow(0 0 12px rgba(94, 234, 212, 0.6))',
                transition: 'left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                userSelect: 'none',
                pointerEvents: 'none',
                animation: 'flotar-suave 3s ease-in-out infinite'
            }}
        />
    );
}

export default Personaje;
