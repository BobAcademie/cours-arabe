const games = [
  { type: "scramble", key: "scramble-1" },
  { type: "odd-one-out", key: "nature-1" },
  { type: "sentence-quiz", key: "dina-sentence-1" },
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "quiz", key: "alif-quiz-2" },
  { type: "audio-quiz", key: "alif-audio-1" },
  { type: "audio-quiz", key: "pomme-audio" },
  { type: "image-drag", key: "fruits" },
];

const scrambleData = {
  "scramble-1": {
    instruction: "Remets les mots dans le bon ordre pour former la phrase :",
    correctSentence: "عِيدٌ سَعِيدٌ يا عِمادُ",
    words: ["عِيدٌ", "سَعِيدٌ", "يا عِمادُ"], // Les mots individuels
  },
};

const oddOneOutData = {
  "nature-1": {
    instruction: "ماذا قالَ الْجَميعُ لِعِمادٍ",
    options: [
      {
        text: "صَباحُ الخَيْرِ",
        audio: "../sounds/9af/cadenat.mp3",
        correct: false,
      }, // Pomme
      {
        text: "عِيدٌ سَعيدٌ",
        audio: "../sounds/9af/valise.mp3",
        correct: true,
      }, // Banane
      {
        text: "السَّلامُ عَلَيْكُمْ",
        audio: "../sounds/9af/9anttara.mp3",
        correct: false,
      }, // Orange
      {
        text: "رَمَصانٌ كَريمٌ",
        audio: "../sounds/9af/9ism.mp3",
        correct: false,
      }, // Stylo (L'intrus)
    ],
  },
};

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de ع pour compléter ce mot ?",
    wordWithHole: "مُـ...ـلِّمٌ", // Le mot avec le trou
    options: [
      { text: "ـعَـ", correct: true },
      { text: "عَ", correct: false },
      { text: "عَـ", correct: false },
    ],
  },
};
const sentenceQuizData = {
  "dina-sentence-1": {
    instruction: "Choisis le mot qui manque pour compléter la phrase :",
    sentenceWithHole: "هَذَا الْوَلَدُ ...", // On utilise encore les points
    correctWord: "سَعِيدٌ",
    options: [
      { text: "سَعِيدٌ", correct: true },
      { text: "سَعِيدَةٌ", correct: false },
      { text: "كَبِيرَةٌ", correct: false },
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    // Ici, tu mets le chemin exact à partir de la racine de ton projet
    audioPath: "../sounds/3in/autruche.MP3",
    options: [
      { text: "قِيثَارَةٌ", correct: false },
      { text: "نَعامَةٌ", correct: true },
      { text: "عِطْرٌ", correct: false },
    ],
  },
  "pomme-audio": {
    instruction: "Écoute bien et choisis le mot correspondant",
    // Ici, tu peux viser un sous-dossier sans problème !
    audioPath: "../sounds/3in/ecouter.MP3",
    options: [
      { text: "عَلَمٌ", correct: false },
      { text: "يَسْمَعُ", correct: true },
      { text: "مُعَلِّمٌ", correct: false },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot  (renard)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "ثَــعْــلَــبٌ",
    letters: ["ـعْـ", "ـبٌ", "ثَـ", "ـلَـ"],
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
