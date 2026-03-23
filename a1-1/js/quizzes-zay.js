const games = [
  { type: "quiz", key: "Zay-quiz-1" },
  { type: "quiz", key: "Zay-quiz-2" },
  { type: "forms-quiz", key: "Zay-forms-1" },
  { type: "puzzle", key: "Zay-puzzle-1" },
  { type: "drag", key: "Zay-drag-1" },
  { type: "image-drag", key: "Zay-images-1" },
  { type: "audio-quiz", key: "Zay-audio-1" },
  { type: "audio-quiz", key: "Zay-audio-2" },
];

const formsQuizData = {
  "Zay-forms-1": {
    instruction: "Quelle est la bonne forme de (ز) pour compléter ce mot ?",
    wordWithHole: "...َرافَةٌ", // Zarafatun (Girafe)
    options: [
      { text: "زَ", correct: true }, // Début (ne s'attache pas à gauche)
      { text: "ـزَ", correct: false },
      { text: "رَ", correct: false },
    ],
  },
  "Zay-forms-2": {
    instruction: "Quelle est la bonne forme de (ز) pour compléter ce mot ?",
    wordWithHole: "مِـ...ـرَعَةٌ", // Mazra'atun (Ferme)
    options: [
      { text: "ـزْ", correct: true }, // Milieu (attachée à droite seulement)
      { text: "ـزـ", correct: false }, // Rappel : le Zay ne s'attache jamais après
      { text: "ز", correct: false },
    ],
  },
};

const audioQuizData = {
  "Zay-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/zay/balance.MP3",
    options: [
      { text: "مِيزانٌ", correct: true },
      { text: "زَيْتُونٌ", correct: false },
      { text: "جَزيرَةٌ", correct: false },
    ],
  },
  "Zay-audio-2": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/zay/escargot.MP3",
    options: [
      { text: "بَصَلٌ", correct: false },
      { text: "حَلَزونٌ", correct: true },
      { text: "زُجاجَةٌ", correct: false },
    ],
  },
};

const puzzleData = {
  "Zay-puzzle-1": {
    instruction: "Reconstitue le mot (Olive)",
    word: "زَيْــتُــونٌ",
    letters: ["ـتُــو", "نٌ", "زَ", "يْـ"],
  },
};

const quizData = {
  "Zay-quiz-1": {
    question: "Choisis le mot qui contient la lettre ز (Zay)",
    answers: [
      { text: "حَلَزونٌ", correct: true }, // Escargot
      { text: "سَمَكَةٌ", correct: false },
      { text: "تُفَّاحٌ", correct: false },
      { text: "قَلَمٌ", correct: false },
    ],
  },
  "Zay-quiz-2": {
    question: "Dans quel mot la lettre ز est-elle au milieu ?",
    answers: [
      { text: "مِيزانٌ", correct: true }, // Balance
      { text: "زَيْتٌ", correct: false },
      { text: "كَلْبٌ", correct: false },
    ],
  },
};

const dragData = {
  "Zay-drag-1": {
    instruction: "Relie la place de la lettre à son mot",
    letters: ["Au début", "Au milieu", "À la fin"],
    pairs: [
      { letter: "Au début", word: "زُجاجَة" }, // Bouteille
      { letter: "Au milieu", word: "جَزيرَة" }, // Île
      { letter: "À la fin", word: "كَنز" }, // Trésor
    ],
  },
};

const imageDragData = {
  "Zay-images-1": {
    instruction: "Associe l’image au mot",
    images: [
      { id: "ferme", src: "../img/lettre-zay/ferme.png" },
      { id: "olive", src: "../img/lettre-zay/olive.png" },
      { id: "pot", src: "../img/lettre-zay/pot.png" },
    ],
    words: [
      { word: "مَزْرَعَةٌ", match: "ferme" },
      { word: "زَيْتُونٌ", match: "olive" },
      { word: "مِزْهَرِيَّةٌ", match: "pot" },
    ],
  },
};
