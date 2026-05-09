// Aquí guardo mis easter eggs. He puesto varias opciones (claves) para cada uno
// porque el micro a veces no entiende bien el japonés o el inglés.
// Los GIFs los tengo en /public para evitar líos de CORS con Tenor (me bloqueaban
// los enlaces y me salía la imagen en blanco). Así cargan directos desde mi propia app.
//
// Cada egg tiene también una "claseEfecto" que se aplica al contenedor principal
// para que toda la pantalla haga una animación CSS chula.
export const easterEggs = [
    {
        claves: ["expansion de dominio sukuna", "malevolent shrine", "santuario malevolo"],
        gif: "/sukuna.gif",
        titulo: "Ryōiki Tenkai — Fukuma Mizushi",
        subtitulo: "Sukuna Ryōmen · El Rey de las Maldiciones",
        color: "#8B0000",
        claseEfecto: "efecto-santuario"
    },
    {
        claves: [
            "expansion de dominio gojo",
            "infinite void",
            "vacio inconmensurable",
            "vacio infinito"
        ],
        gif: "/gojo.gif",
        titulo: "Ryōiki Tenkai — Muryōkūsho",
        subtitulo: "Satoru Gojō · El Más Fuerte",
        color: "#1E3A8A",
        claseEfecto: "efecto-vacio"
    },
    {
        claves: [
            "bankai tensa zangetsu",
            "bankai tensa sangetsu",
            "tensa zangetsu",
            "bankai"
        ],
        gif: "/ichigo.gif",
        titulo: "BANKAI — Tensa Zangetsu",
        subtitulo: "Ichigo Kurosaki · Shinigami Sustituto",
        color: "#0F172A",
        claseEfecto: "efecto-bankai"
    },
    {
        claves: [
            "kyoka suigetsu",
            "quioca suigetsu",
            "ilusion completa",
            "aizen ilusion",
            // Aberraciones fonéticas que detecta el navegador en español:
            "y oca sui getsu",
            "quioca",
            "kyoka sui getsu",
            "Kyoka Suiketsu"
        ],
        gif: "/aizen.gif",
        titulo: "Kyōka Suigetsu — Hipnosis Completa",
        subtitulo: "Sōsuke Aizen · Farmeando aura desde 2001",
        color: "#581C87",
        claseEfecto: "efecto-cristal"
    },
    {
        claves: [
            "yokoso sakasama no sekai e",
            "sakasama no sekai",
            "mundo invertido",
            "bienvenido al mundo invertido",
            // Aberraciones que me suelta el reconocedor en español:
            "saca sama no se calle",
            "saca a sama no se cae",
            "y yo koso saca sama",
            "saca sama"
        ],
        gif: "/shinji.gif",
        titulo: "Yōkoso · Sakasama no Sekai e",
        subtitulo: "Shinji Hirako · Capitán de la 5ª División",
        color: "#7C2D12",
        claseEfecto: "efecto-sakasama"
    },
    {
        claves: [
            "yokoso watashi no soul society",
            "soul society",
            "sociedad de almas",
            "yokoso",
            "yo coso",
            "yo koso"
        ],
        gif: "/aizen-tybw.gif",
        titulo: "Yōkoso · Watashi no Soul Society e",
        subtitulo: "Sōsuke Aizen · El que lo planeó todo desde el principio",
        color: "#3B0764",
        claseEfecto: "efecto-cristal"
    },
    {
        claves: [
            "the almighty",
            "el todopoderoso",
            "yhwach",
            "juha bach",
            // Aberraciones fonéticas (el reconocedor odia este nombre):
            "de old mig",
            "the old mig",
            "dd all tim",
            "The oldmight"
        ],
        gif: "/yhwach.gif",
        titulo: "The Almighty — A",
        subtitulo: "Yhwach · El Padre de los Quincy",
        color: "#1F2937",
        claseEfecto: "efecto-almighty"
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
