const games = [
  { type: "quiz", key: "Sad-quiz-1" },
  { type: "quiz", key: "Sad-quiz-2" },
  { type: "forms-quiz", key: "Sad-forms-1" },
  { type: "puzzle", key: "Sad-puzzle-1" },
  { type: "drag", key: "Sad-drag-1" },
  { type: "image-drag", key: "Sad-images-1" },
  { type: "audio-quiz", key: "Sad-audio-1" },
  { type: "audio-quiz", key: "Sad-audio-2" },
];

const formsQuizData = {
  "Sad-forms-1": {
    instruction: "Quelle est la bonne forme de (ص) pour compléter ce mot ?",
    wordWithHole: "...ابونٌ", // Sabun (Savon)
    options: [
      { text: "صَـ", correct: true }, // Début (s'attache à gauche)
      { text: "ـصـ", correct: false },
      { text: "ص", correct: false },
    ],
  },
  "Sad-forms-2": {
    instruction: "Quelle est la bonne forme de (ص) pour compléter ce mot ?",
    wordWithHole: "عَصيـ...ـرٌ", // 'Asir (Jus)
    options: [
      { text: "ـر", correct: false },
      { text: "ـصـ", correct: true }, // Milieu (attachée des deux côtés)
      { text: "ص", correct: false },
    ],
  },
};

const audioQuizData = {
  "Sad-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/sad/savon.MP3",
    options: [
      { text: "صابونٌ", correct: true }, // Savon
      { text: "قَفَصٌ", correct: false }, // Cage
      { text: "قَميصٌ", correct: false }, // Chemise
    ],
  },
  "Sad-audio-2": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/sad/jaune.MP3",
    options: [
      { text: "صندوقٌ", correct: false }, // Boite
      { text: "أَصْفَرُ", correct: true }, // Jaune
      { text: "عَصيرٌ", correct: false }, // Jus
    ],
  },
};

const puzzleData = {
  "Sad-puzzle-1": {
    instruction: "Reconstitue le mot (Boîte)",
    word: "صُــنْــدُوقٌ",
    letters: ["قٌ", "صُـ", "ـدُو", "ـنْـ"],
  },
};

const quizData = {
  "Sad-quiz-1": {
    question: "Choisis le mot qui contient la lettre ص (Sad)",
    answers: [
      { text: "صَيْدَلِيَّةٌ", correct: true }, // Pharmacie
      { text: "تُفَّاحٌ", correct: false },
      { text: "قَلَمٌ", correct: false },
      { text: "كِتابٌ", correct: false },
    ],
  },
  "Sad-quiz-2": {
    question: "Dans quel mot la lettre ص est-elle à la fin ?",
    answers: [
      { text: "قَفَصٌ", correct: true }, // Cage
      { text: "صابونٌ", correct: false },
      { text: "أَصْفَرُ", correct: false },
    ],
  },
};

const dragData = {
  "Sad-drag-1": {
    instruction: "Relie la place de la lettre à son mot",
    letters: ["Au début", "Au milieu", "À la fin"],
    pairs: [
      { letter: "Au début", word: "صَيْدَلِيَّة" }, // Pharmacie
      { letter: "Au milieu", word: "عَصَّارَةٌ" }, // Chemise
      { letter: "À la fin", word: "قَفَص" }, // Cage
    ],
  },
};

const imageDragData = {
  "Sad-images-1": {
    instruction: "Associe l’image au mot",
    images: [
      { id: "jus", src: "../img/lettre-sad/jus1.png" },
      { id: "ampoule", src: "../img/lettre-sad/ampoule1.png" },
      { id: "boite", src: "../img/lettre-sad/boite1.png" },
    ],
    words: [
      { word: "عَصيرٌ", match: "jus" },
      { word: "مِصْباحٌ", match: "ampoule" },
      { word: "صُندوقٌ", match: "boite" },
    ],
  },
};
