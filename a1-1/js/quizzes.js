const games = [
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "quiz", key: "alif-quiz-1" },
  { type: "drag", key: "alif-drag-1" },
  { type: "quiz", key: "alif-quiz-2" },
  { type: "image-drag", key: "fruits" },
  { type: "audio-quiz", key: "alif-audio-1" },
];

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de l'Alif pour compléter ce mot ?",
    wordWithHole: "...رنب", // Le mot avec le trou
    options: [
      { text: "أَ", correct: true }, // Forme isolée début
      { text: "ـأَ", correct: false }, // Forme attachée
      { text: "إِ", correct: false }, // Forme avec kasra
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
    word: "مَدْرَسَةٌ",
    letters: ["سَ", "رَ", "دْ", "ةٌ", "مَ"],
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
      { id: "apple", src: "../img/apple.jpg" },
      { id: "banana", src: "../img/banana.png" },
      { id: "orange", src: "../img/orange.png" },
    ],
    words: [
      { word: "Pomme", match: "apple" },
      { word: "Banane", match: "banana" },
      { word: "Orange", match: "orange" },
    ],
  },
};
