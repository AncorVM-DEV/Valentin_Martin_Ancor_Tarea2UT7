// Aquí guardo mis easter eggs. He puesto varias opciones (claves) para cada uno
// porque el micro a veces no entiende bien el japonés o el inglés.
export const easterEggs = [
    {
        claves: ["expansion de dominio sukuna", "malevolent shrine", "santuario malevolo"],
        gif: "https://media1.tenor.com/m/lqLjYy_NPiEAAAAC/tenor.gif",
        titulo: "Ryōiki Tenkai — Fukuma Mizushi",
        subtitulo: "Sukuna Ryōmen · El Rey de las Maldiciones",
        color: "#8B0000"
    },
    {
        claves: ["expansion de dominio gojo", "infinite void", "vacio inconmensurable", "vacio infinito"],
        gif: "https://media1.tenor.com/m/76l-pqhZTPYAAAAC/tenor.gif",
        titulo: "Ryōiki Tenkai — Muryōkūsho",
        subtitulo: "Satoru Gojō · El Más Fuerte",
        color: "#1E3A8A"
    },
    {
        claves: ["bankai tensa zangetsu", "bankai tensa sangetsu", "tensa zangetsu", "bankai"],
        gif: "https://media1.tenor.com/m/Y1F0kLBCPyEAAAAC/tenor.gif",
        titulo: "BANKAI — Tensa Zangetsu",
        subtitulo: "Ichigo Kurosaki · Shinigami Sustituto",
        color: "#0F172A"
    },
    {
        claves: ["kyoka suigetsu", "quioca suigetsu", "ilusion completa", "aizen ilusion"],
        gif: "https://media1.tenor.com/m/2qBpaTbfWWcAAAAC/tenor.gif",
        titulo: "Kyōka Suigetsu — Hipnosis Completa",
        subtitulo: "Sōsuke Aizen · Farmeando aura desde 2001",
        color: "#581C87"
    },
    {
        claves: ["yokoso sakasama no sekai e", "sakasama no sekai", "mundo invertido", "bienvenido al mundo invertido"],
        gif: "https://media1.tenor.com/m/9nslQkxhjKgAAAAC/tenor.gif",
        titulo: "Yōkoso · Sakasama no Sekai e",
        subtitulo: "Shinji Hirako · Capitán de la 5ª División",
        color: "#7C2D12"
    },
    {
        claves: ["yokoso watashi no soul society", "soul society", "sociedad de almas", "yokoso", "yo coso"],
        gif: "https://media1.tenor.com/m/8dGVUaCK00gAAAAC/tenor.gif",
        titulo: "Yōkoso · Watashi no Soul Society e",
        subtitulo: "Sōsuke Aizen · El que lo planeó todo desde el principio",
        color: "#3B0764"
    },
    {
        claves: ["the almighty", "el todopoderoso", "yhwach", "juha bach"],
        gif: "https://media1.tenor.com/m/yEszTakClKAAAAAC/tenor.gif",
        titulo: "The Almighty — A",
        subtitulo: "Yhwach · El Padre de los Quincy",
        color: "#1F2937"
    }
];

// Limpio el texto a lo bestia: fuera tildes, comas, puntos y lo paso a minúsculas.
export function normalizar(texto) {
    if (!texto) return "";
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "") // quita tildes
        .replace(/[¿?¡!.,;:]/g, "")      // quita TODOS los signos de puntuación (incluidas comas)
        .replace(/\s+/g, " ")            // quita espacios dobles
        .trim();
}

// Busco si el texto que he dicho contiene ALGUNA de las claves de mis easter eggs
export function buscarEasterEgg(transcript) {
    const limpio = normalizar(transcript);

    for (const huevo of easterEggs) {
        for (const clave of huevo.claves) {
            if (limpio.includes(normalizar(clave))) {
                return huevo; // Si coincide alguna clave, devuelvo todo el objeto del GIF
            }
        }
    }
    return null;
}
