const games = [
  { type: "quiz", key: "alif-quiz-1" },
  { type: "quiz", key: "alif-quiz-2" },
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "drag", key: "alif-drag-1" },
  { type: "image-drag", key: "fruits" },
  { type: "audio-quiz", key: "alif-audio-1" },
  { type: "audio-quiz", key: "alif-audio-2" },
];

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de (ع)  pour compléter ce mot ?",
    wordWithHole: "مُـرَبَّـ...", // Le mot avec le trou
    options: [
      { text: "ـعُـ", correct: false }, // Forme isolée début
      { text: "ـعٌ", correct: true }, // Forme attachée
      { text: "عٌ", correct: false }, // Forme avec kasra
    ],
  },
  "alif-forms-2": {
    instruction: "Quelle est la bonne forme de (ع)  pour compléter ce mot ?",
    wordWithHole: "شَارِ...", // Le mot avec le trou
    options: [
      { text: "ـعُـ", correct: false }, // Forme isolée début
      { text: "ـعٌ", correct: false }, // Forme attachée
      { text: "عٌ", correct: true }, // Forme avec kasra
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/3in/ecouter.MP3", // Le nom de votre fichier dans le dossier sounds
    options: [
      { text: "ثَعْلَبٌ", correct: false },
      { text: "يَسْمَعُ", correct: true },
      { text: "سَبْعَةٌ", correct: false },
    ],
  },
  "alif-audio-2": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/3in/drapeau.MP3", // Le nom de votre fichier dans le dossier sounds
    options: [
      { text: "نَعامَةٌ", correct: false },
      { text: "عَلَمٌ", correct: true },
      { text: "شارِعٌ", correct: false },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot  (Enseignant)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "مُــعَــلِّــمٌ",
    letters: ["ـمٌ", "ـلِّـ", "ـعَـ", "مُـ"],
  },
};

const quizData = {
  "alif-quiz-1": {
    question: "Choisis le mot qui contient la lettre عين ",
    answers: [
      { text: "ثَعْلَبٌ", correct: true },
      { text: "مِقْلَمَةٌ", correct: false },
      { text: "تِين", correct: false },
      { text: "قُرْصانٌ", correct: false },
    ],
  },
  "alif-quiz-2": {
    question: "Choisis le mot qui contient la lettre عين",
    answers: [
      { text: "مُرَبَّعٌ", correct: true },
      { text: "تُفَّاحٌ", correct: false },
      { text: "غُرْفَةٌ", correct: false },
    ],
  },
};

const dragData = {
  "alif-drag-1": {
    instruction:
      "ٌrelie entre la forme de la lettre avec laquel elle est écrite dans le mot",
    letters: ["ـعـ", "عـ", "ـع"],
    pairs: [
      { letter: "ـعـ", word: "ثــعـلب" },
      { letter: "ـع", word: "مربـع" },
      { letter: "عـ", word: "عـلبة" },
    ],
  },
};
const imageDragData = {
  fruits: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "raisin", src: "../img/lettre-3in/raisin1.png" },
      { id: "renard", src: "../img/lettre-3in/renard1.png" },
      { id: "neuf", src: "../img/lettre-3in/neuf1.png" },
    ],
    words: [
      { word: "عِنَبٌ", match: "raisin" },
      { word: "ثَعْلَبٌ", match: "renard" },
      { word: "تِسْعَةٌ", match: "neuf" },
    ],
  },
};
