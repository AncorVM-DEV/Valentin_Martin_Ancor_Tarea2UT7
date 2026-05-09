// Aquí guardo el diccionario de mis easter eggs de anime.
// La clave es la frase que tengo que decir y dentro pongo el GIF que se muestra
// y un pequeño texto que sale en pantalla cuando se activa.
// Meto este diccionario para los easter eggs de anime, a ver si la profe flipa
// cuando diga "Bankai Tensa Zangetsu" jajaja
//
// Nota: si los GIFs algún día dejan de funcionar (Tenor a veces tumba enlaces),
// basta con cambiar la URL de aquí. Los he buscado en Tenor que es de los
// que mejor enlazan directo al .gif.

export const easterEggs = {
    // SUKUNA - Expansión de Dominio (Jujutsu Kaisen)
    "expansion de dominio sukuna": {
        gif: "https://media.tenor.com/lqLjYy_NPiEAAAAM/sukuna-malevolent-shrine.gif",
        titulo: "Ryōiki Tenkai — Fukuma Mizushi",
        subtitulo: "Sukuna Ryōmen · El Rey de las Maldiciones",
        color: "#8B0000"
    },
    "malevolent shrine": {
        gif: "https://media.tenor.com/lqLjYy_NPiEAAAAM/sukuna-malevolent-shrine.gif",
        titulo: "Ryōiki Tenkai — Fukuma Mizushi",
        subtitulo: "Sukuna Ryōmen · El Rey de las Maldiciones",
        color: "#8B0000"
    },

    // GOJO SATORU - Infinite Void (Jujutsu Kaisen)
    "expansion de dominio gojo": {
        gif: "https://media.tenor.com/76l-pqhZTPYAAAAM/gojo-domain-expansion.gif",
        titulo: "Ryōiki Tenkai — Muryōkūsho",
        subtitulo: "Satoru Gojō · El Más Fuerte",
        color: "#1E3A8A"
    },
    "infinite void": {
        gif: "https://media.tenor.com/76l-pqhZTPYAAAAM/gojo-domain-expansion.gif",
        titulo: "Ryōiki Tenkai — Muryōkūsho",
        subtitulo: "Satoru Gojō · El Más Fuerte",
        color: "#1E3A8A"
    },

    // ICHIGO KUROSAKI - Bankai (Bleach)
    "bankai tensa zangetsu": {
        gif: "https://media.tenor.com/Y1F0kLBCPyEAAAAM/ichigo-bankai.gif",
        titulo: "BANKAI — Tensa Zangetsu",
        subtitulo: "Ichigo Kurosaki · Shinigami Sustituto",
        color: "#0F172A"
    },

    // AIZEN - Kyoka Suigetsu (Bleach)
    "kyoka suigetsu": {
        gif: "https://media.tenor.com/2qBpaTbfWWcAAAAM/aizen-bleach.gif",
        titulo: "Kyōka Suigetsu — Hipnosis Completa",
        subtitulo: "Sōsuke Aizen · Farmeando aura desde 2001",
        color: "#581C87"
    },

    // SHINJI HIRAKO - Sakasama no Sekai (Bleach)
    "yokoso sakasama no sekai e": {
        gif: "https://media.tenor.com/9nslQkxhjKgAAAAM/shinji-hirako-bleach.gif",
        titulo: "Yōkoso · Sakasama no Sekai e",
        subtitulo: "Shinji Hirako · Capitán de la 5ª División",
        color: "#7C2D12"
    },

    // AIZEN TYBW - Welcome to my Soul Society (Bleach TYBW)
    "yokoso watashi no soul society": {
        gif: "https://media.tenor.com/8dGVUaCK00gAAAAM/aizen-tybw.gif",
        titulo: "Yōkoso · Watashi no Soul Society e",
        subtitulo: "Sōsuke Aizen · El que lo planeó todo desde el principio",
        color: "#3B0764"
    },

    // YHWACH - The Almighty (Bleach TYBW)
    "the almighty": {
        gif: "https://media.tenor.com/yEszTakClKAAAAAM/yhwach-bleach.gif",
        titulo: "The Almighty — A",
        subtitulo: "Yhwach · El Padre de los Quincy",
        color: "#1F2937"
    }
};

// Función que normaliza el texto del usuario:
// quita acentos, lo pasa a minúsculas y limpia espacios.
// Lo hago así porque el reconocedor de voz a veces mete tildes y signos raros.
export function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "") // quita tildes
        .replace(/[¿?¡!.,;:]/g, "")      // quita signos
        .replace(/\s+/g, " ")            // espacios múltiples a uno
        .trim();
}

// Busca si en el transcript ha caído alguna frase de mi diccionario
// y devuelve la info del easter egg, o null si no hay nada.
export function buscarEasterEgg(transcript) {
    const limpio = normalizar(transcript);
    // Recorro las claves de mi diccionario y veo si alguna está dentro del transcript
    for (const frase of Object.keys(easterEggs)) {
        if (limpio.includes(frase)) {
            return { frase, ...easterEggs[frase] };
        }
    }
    return null;
}
