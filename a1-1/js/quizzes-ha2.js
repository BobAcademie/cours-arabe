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
    wordWithHole: "تِمْسَا...", // Le mot avec le trou
    options: [
      { text: "حـ", correct: false }, // Forme isolée début
      { text: "ـحٌ", correct: false }, // Forme attachée
      { text: "حٌ", correct: true }, // Forme avec kasra
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/haa2/magicien.MP3", // Le nom de votre fichier dans le dossier sounds
    options: [
      { text: "حمامة", correct: false },
      { text: "حليب", correct: false },
      { text: "ساحر", correct: true },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot Lion (Asad)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "حَــمـامَــةٌ",
    letters: ["مَـ", "ـمـا", "حَـ", "ـةٌ"],
  },
};

const quizData = {
  "alif-quiz-1": {
    question: "Choisis le mot qui contient la lettre Haa2 (ح)",
    answers: [
      { text: "بَاب", correct: false },
      { text: "تِين", correct: false },
      { text: "نَحْلَةٌ", correct: true },
      { text: "تِين", correct: false },
    ],
  },
  "alif-quiz-2": {
    question: "Choisis le mot qui contient la lettre Haa2",
    answers: [
      { text: "مَرْكَب", correct: false },
      { text: "حَمامَةٌ", correct: true },
      { text: "لَبَن", correct: false },
    ],
  },
};

const dragData = {
  "alif-drag-1": {
    instruction: "Clique sur la lettre ثم الكلمة المناسبة",
    letters: ["ـحـ", "حـ", "ح"],
    pairs: [
      { letter: "حـ", word: "حَلِيبٌ" },
      { letter: "ح", word: "فَلَّاحٌ" },
      { letter: "ـحـ", word: "مِممْسَحَةٌ" },
    ],
  },
};
const imageDragData = {
  fruits: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "bus", src: "../img/lettre-ha2/bus.jpg" },
      { id: "pomme", src: "../img/lettre-ha2/pomme.jpg" },
      { id: "pigeon", src: "../img/lettre-ha2/pigeon.jpg" },
    ],
    words: [
      { word: "تُفَّاحٌ", match: "pomme" },
      { word: "حَافِلَةٌ", match: "bus" },
      { word: "حَمامَةٌ", match: "pigeon" },
    ],
  },
};

