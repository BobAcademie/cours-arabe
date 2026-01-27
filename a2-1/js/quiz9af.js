const games = [
  { type: "scramble", key: "scramble-1" },
  { type: "odd-one-out", key: "nature-1" },
  { type: "odd-one-out", key: "nature-2" },
  { type: "sentence-quiz", key: "dina-sentence-1" },
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "quiz", key: "alif-quiz-2" },
  { type: "audio-quiz", key: "alif-audio-1" },
  { type: "image-drag", key: "fruits" },
];

const scrambleData = {
  "scramble-1": {
    instruction: "Remets les mots dans le bon ordre pour former la phrase :",
    correctSentence: "يَضَعُ قَاسِمُ الْأَقْلامَ فِي الْمِقْلَمَةِ",
    words: ["فِي", "يَضَعُ", "قَاسِمُ", "الْأَقْلامَ", "الْمِقْلَمَةِ"], // Les mots individuels
  },
};

const oddOneOutData = {
  "nature-1": {
    instruction: "أَيْنَ يَجْلِسُ قَاسِمُ؟  ",
    options: [
      {
        text: "في الْحَقيبَةِ",
        audio: "../sounds/9af/cartable.mp3",
        correct: false,
      }, // Pomme
      {
        text: "في الْمِقْلَمَةِ",
        audio: "../sounds/9af/trousse.mp3",
        correct: false,
      }, // Banane
      {
        text: "في الْقِسْمِ",
        audio: "../sounds/9af/classe.mp3",
        correct: true,
      }, // Orange
      {
        text: "في الْقَلَمِ",
        audio: "../sounds/9af/stylo.mp3",
        correct: false,
      }, // Stylo (L'intrus)
    ],
  },
  "nature-2": {
    instruction: "أَيْنَ يَضَعُ قَاسِمُ أَقْلامَهُ؟ ",
    options: [
      {
        text: "في الْحَقيبَةِ",
        audio: "../sounds/9af/cartable.mp3",
        correct: false,
      }, // Pomme
      {
        text: "في الْمِقْلَمَةِ",
        audio: "../sounds/9af/trousse.mp3",
        correct: true,
      }, // Banane
      {
        text: "في الْقِسْمِ",
        audio: "../sounds/9af/classe.mp3",
        correct: false,
      }, // Orange
      {
        text: "في الْقَلَمِ",
        audio: "../sounds/9af/stylo.mp3",
        correct: false,
      }, // Stylo (L'intrus)
    ],
  },
};

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de Haa pour compléter ce mot ?",
    wordWithHole: "مِـ...ـصٌّ", // Le mot avec le trou
    options: [
      { text: "ـقَـ", correct: true },
      { text: "قَ", correct: false },
      { text: "قَـ", correct: false },
    ],
  },
};
const sentenceQuizData = {
  "dina-sentence-1": {
    instruction: "Choisis le mot qui manque pour compléter la phrase :",
    sentenceWithHole: "يُحِبُّ قاسِمُ ...  ", // On utilise encore les points
    correctWord: "الْقِراءَةَ",
    options: [
      { text: "الْقِراءَةَ", correct: true },
      { text: "النَّوْمَ", correct: false },
      { text: "الْكَلامَ", correct: false },
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/9af/ba99alon.MP3", // Le nom de votre fichier dans le dossier sounds
    options: [
      { text: "قَارِبٌ", correct: false },
      { text: "بَقَّالٌ", correct: true },
      { text: "قَنْطَرَةٌ", correct: false },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot Lion (Pont)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "قَنْطَرَةٌ",
    letters: ["نْ", "طَ", "ةٌ", "رَ", "قَ"],
  },
};

const quizData = {
  "alif-quiz-1": {
    question: "Choisis le mot qui contient la lettre 9af",
    answers: [
      { text: "قارَبٌ", correct: true },
      { text: "تِين", correct: false },
      { text: "حَلِيبٌ", correct: false },
    ],
  },
  "alif-quiz-2": {
    question: "Choisis le mot qui contient la lettre 9af",
    answers: [
      { text: "مَرْكَب", correct: false },
      { text: "قَرْيَةٌ", correct: true },
      { text: "لَبَن", correct: false },
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

