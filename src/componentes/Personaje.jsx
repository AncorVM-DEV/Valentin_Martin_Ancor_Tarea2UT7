// Mi personaje, que se mueve por la pantalla con la voz.
// Como no tengo un sprite de anime listo, he montado un cuadrado mono
// con un degradado guapo y un emoji de ninja en el medio. Queda bonito.

function Personaje({ x, y, tam }) {
    return (
        <div
            className="personaje"
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: tam,
                height: tam,
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #ff006e 0%, #9D4EDD 50%, #5EEAD4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                boxShadow: '0 0 30px rgba(157, 78, 221, 0.7), 0 0 60px rgba(255, 0, 110, 0.4)',
                transition: 'left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                userSelect: 'none',
                animation: 'flotar-suave 3s ease-in-out infinite'
            }}
        >
            🥷
        </div>
    );
}

export default Personaje;
