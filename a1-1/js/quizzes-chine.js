const games = [
  { type: "quiz", key: "Shin-quiz-1" },
  { type: "quiz", key: "Shin-quiz-2" },
  { type: "forms-quiz", key: "Shin-forms-1" },
  { type: "puzzle", key: "Shin-puzzle-1" },
  { type: "drag", key: "Shin-drag-1" },
  { type: "image-drag", key: "Shin-images-1" },
  { type: "audio-quiz", key: "Shin-audio-1" },
  { type: "audio-quiz", key: "Shin-audio-2" },
];

const formsQuizData = {
  "Shin-forms-1": {
    instruction: "Quelle est la bonne forme de (ش) pour compléter ce mot ?",
    wordWithHole: "...َـجَـرَةٌ", // Shajaratun (Arbre)
    options: [
      { text: "شـ", correct: true }, // Début
      { text: "ـشـ", correct: false },
      { text: "ش", correct: false },
    ],
  },
  "Shin-forms-2": {
    instruction: "Quelle est la bonne forme de (ش) pour compléter ce mot ?",
    wordWithHole: "مِـ...ـمِـشٌ", // Mishmish (Abricot)
    options: [
      { text: "ـشـ", correct: true }, // Milieu
      { text: "ـش", correct: false },
      { text: "شـ", correct: false },
    ],
  },
};

const audioQuizData = {
  "Shin-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/chine/camion1.MP3",
    options: [
      { text: "شاحِنَةٌ", correct: true },
      { text: "شَجَرَةٌ", correct: false },
      { text: "شاشة", correct: false },
    ],
  },
  "Shin-audio-2": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/chine/bougie.MP3",
    options: [
      { text: "فَرَاشَةٌ", correct: false },
      { text: "شَمْعَةٌ", correct: true },
      { text: "مِشْطٌ", correct: false },
    ],
  },
};

const puzzleData = {
  "Shin-puzzle-1": {
    instruction: "Reconstitue le mot (Soleil)",
    word: "شَــمْــسٌ",
    letters: ["ـمْـ", "شَـ", "ـسٌ"],
  },
};

const quizData = {
  "Shin-quiz-1": {
    question: "Choisis le mot qui contient la lettre ش (Shin)",
    answers: [
      { text: "شِبَّاكٌ", correct: true }, // Fenêtre
      { text: "سَمَكَةٌ", correct: false },
      { text: "بَيْتٌ", correct: false },
      { text: "قَلَمٌ", correct: false },
    ],
  },
  "Shin-quiz-2": {
    question: "Dans quel mot la lettre ش est-elle à la fin ?",
    answers: [
      { text: "عُشٌّ", correct: true }, // Nid
      { text: "شَارِعٌ", correct: false },
      { text: "مِشْمِشٌ", correct: true }, // Ici c'est aussi vrai, mais "Nid" est plus court
    ],
  },
};

const dragData = {
  "Shin-drag-1": {
    instruction: "Relie la forme de la lettre à sa place dans le mot",
    letters: ["شـ", "ـشـ", "ـش"],
    pairs: [
      { letter: "شـ", word: "شاي" }, // Thé (Début)
      { letter: "ـشـ", word: "رِيشَة" }, // Plume (Milieu)
      { letter: "ـش", word: "كَبْش" }, // Bélier (Fin)
    ],
  },
};

const imageDragData = {
  "Shin-images-1": {
    instruction: "Associe l’image au mot",
    images: [
      { id: "soleil", src: "../img/lettre-chine/soleil.png" },
      { id: "arbre", src: "../img/lettre-chine/arbre.png" },
      { id: "bougie", src: "../img/lettre-chine/bougie.png" },
    ],
    words: [
      { word: "شَمْسٌ", match: "soleil" },
      { word: "شَجَرَةٌ", match: "arbre" },
      { word: "شَمْعَةٌ", match: "bougie" },
    ],
  },
};
