const games = [
  { type: "quiz", key: "alif-quiz-1" },
  { type: "quiz", key: "alif-quiz-2" },
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "drag", key: "alif-drag-1" },
  { type: "image-drag", key: "fruits" },
  { type: "audio-quiz", key: "alif-audio-1" },
];

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de l'Alif pour compléter ce mot ?",
    wordWithHole: "...ــيـثارة", // Le mot avec le trou
    options: [
      { text: "ـقـ", correct: false }, // Forme isolée début
      { text: "ـق", correct: false }, // Forme attachée
      { text: "قـ", correct: true }, // Forme avec kasra
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/9af/ba99alon.MP3", // Le nom de votre fichier dans le dossier sounds
    options: [
      { text: "بَقَّالٌ", correct: true },
      { text: "قَنْطَرَةٌ", correct: false },
      { text: "حليب", correct: false },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot Lion (Pont)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "قَــنْــطَــرَةٌ",
    letters: ["ـنْـ", "ـطَـ", "قَـ", "ةٌ", "ـرَ"],
  },
};

const quizData = {
  "alif-quiz-1": {
    question: "Choisis le mot qui contient la lettre 9af ",
    answers: [
      { text: "حارِسٌ", correct: false },
      { text: "مِقْلَمَةٌ", correct: true },
      { text: "تِين", correct: false },
      { text: "حِصَانٌ", correct: false },
    ],
  },
  "alif-quiz-2": {
    question: "Choisis le mot qui contient la lettre 9af",
    answers: [
      { text: "مَرْكَب", correct: false },
      { text: "حَلِيبٌ", correct: false },
      { text: "قَرْيَةٌ", correct: true },
    ],
  },
};

const dragData = {
  "alif-drag-1": {
    instruction: "Clique sur la lettre ثم الكلمة المناسبة",
    letters: ["ق", "قـ", "ـق"],
    pairs: [
      { letter: "ـق", word: "إِبْريق" },
      { letter: "ق", word: "حَلَّاقٌ" },
      { letter: "قـ", word: "قَـلَمٌ" },
    ],
  },
};
const imageDragData = {
  fruits: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "cadenat", src: "../img/lettre-9af/9ofl.png" },
      { id: "poel", src: "../img/lettre-9af/mi9lat.png" },
      { id: "cuillère", src: "../img/lettre-9af/mil3a9a.png" },
    ],
    words: [
      { word: "قُفْلٌ", match: "cadenat" },
      { word: "مِقْلاةٌ", match: "poel" },
      { word: "مِلْعَقَةٌ", match: "cuillère" },
    ],
  },
};
