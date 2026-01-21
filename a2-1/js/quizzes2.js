const games = [
  { type: "scramble", key: "scramble-1" },
  { type: "odd-one-out", key: "nature-1" },
  { type: "sentence-quiz", key: "dina-sentence-1" },
  { type: "sentence-quiz", key: "dina-sentence-2" },
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "quiz", key: "alif-quiz-2" },
  { type: "audio-quiz", key: "alif-audio-1" },
];

const scrambleData = {
  "scramble-1": {
    instruction: "Remets les mots dans le bon ordre pour former la phrase :",
    correctSentence: "اشْتَرَتْ دِينَا دُمْيَةً جَمِيلَةً",
    words: ["دِينَا", "اشْتَرَتْ", "جَمِيلَةً", "دُمْيَةً"], // Les mots individuels
  },
};

const oddOneOutData = {
  "nature-1": {
    instruction: "ماذا اشْتَرَتْ دِينا؟",
    options: [
      { text: "جَميلَةٌ", audio: "sounds/fruits/pomme.mp3", correct: false }, // Pomme
      { text: "مَوْز", audio: "sounds/fruits/banane.mp3", correct: false }, // Banane
      { text: "دُمْيَةٌ", audio: "sounds/fruits/orange.mp3", correct: false }, // Orange
      { text: "دينا", audio: "sounds/fruits/stylo.mp3", correct: true }, // Stylo (L'intrus)
    ],
  },
};

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de Dal pour compléter ce mot ?",
    wordWithHole: "دُو...ةٌ", // Le mot avec le trou
    options: [
      { text: "ـدَ", correct: false },
      { text: "دَ", correct: true },
      { text: "دِ", correct: false },
    ],
  },
};
const sentenceQuizData = {
  "dina-sentence-1": {
    instruction: "Choisis le mot qui manque pour compléter la phrase :",
    sentenceWithHole: "اشْتَرَتْ ... دُمْيَةً جَمِيلَةً", // On utilise encore les points
    correctWord: "دِينَا",
    options: [
      { text: "عَلِيّ", correct: false },
      { text: "دِينَا", correct: true },
      { text: "مُحَمَّد", correct: false },
    ],
  },
  "dina-sentence-2": {
    instruction: "Choisis le mot qui manque pour compléter la phrase :",
    sentenceWithHole: "اشْتَرَى ... دُمْيَةً جَمِيلَةً", // On utilise encore les points
    correctWord: "دِينَا",
    options: [
      { text: "دينا", correct: false },
      { text: "عَلِيّ", correct: true },
      { text: "فاذمة", correct: false },
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioKey: "asad_sound", // Le nom de votre fichier dans le dossier sounds
    options: [
      { text: "أَسَد", correct: true },
      { text: "بَاب", correct: false },
      { text: "تِين", correct: false },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot Lion (Asad)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "دُودَةٌ",
    letters: ["ةٌ", "دَ", "دُو"],
  },
};

const quizData = {
  "alif-quiz-1": {
    question: "Choisis le mot qui contient la lettre Alif",
    answers: [
      { text: "أَسَد", correct: true },
      { text: "بَاب", correct: false },
      { text: "تِين", correct: false },
      { text: "تِين", correct: false },
    ],
  },
  "alif-quiz-2": {
    question: "Choisis le mot qui contient la lettre Alif",
    answers: [
      { text: "مَرْكَب", correct: false },
      { text: "أَرْنَب", correct: true },
      { text: "لَبَن", correct: false },
    ],
  },
};

const dragData = {
  "alif-drag-1": {
    instruction: "Clique sur la lettre ثم الكلمة المناسبة",
    letters: ["أ", "ـأ", "ا"],
    pairs: [
      { letter: "أ", word: "أسد" },
      { letter: "ـأ", word: "سأل" },
      { letter: "ا", word: "مال" },
    ],
  },
};
const imageDragData = {
  fruits: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "apple", src: "img/apple.jpg" },
      { id: "banana", src: "img/banana.png" },
      { id: "orange", src: "img/orange.png" },
    ],
    words: [
      { word: "Pomme", match: "apple" },
      { word: "Banane", match: "banana" },
      { word: "Orange", match: "orange" },
    ],
  },
};
