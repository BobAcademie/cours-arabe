const games = [
  { type: "quiz", key: "Ta2-quiz-1" },
  { type: "quiz", key: "Ta2-quiz-2" },
  { type: "forms-quiz", key: "Ta2-forms-1" },
  { type: "puzzle", key: "Ta2-puzzle-1" },
  { type: "drag", key: "Ta2-drag-1" },
  { type: "image-drag", key: "Ta2-images-1" }, // Changé 'fruits' pour plus de cohérence
  { type: "audio-quiz", key: "Ta2-audio-1" },
  { type: "audio-quiz", key: "Ta2-audio-2" },
];

const formsQuizData = {
  "Ta2-forms-1": {
    instruction: "Quelle est la bonne forme de (ط) pour compléter ce mot ?",
    wordWithHole: "مَـ...ـعَــم",
    options: [
      { text: "ـطـ", correct: true }, // Forme milieu
      { text: "طـ", correct: false }, // Forme début
      { text: "ـط", correct: false }, // Forme fin
    ],
  },
  "Ta2-forms-2": {
    instruction: "Quelle est la bonne forme de (ط) pour compléter ce mot ?",
    wordWithHole: "بَـطـاطِـ...",
    options: [
      { text: "ـس", correct: true }, // Ici on teste la fin du mot بطاطس
      { text: "سـ", correct: false },
      { text: "ص", correct: false },
    ],
  },
};

const audioQuizData = {
  "Ta2-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/ta2/avion.MP3",
    options: [
      { text: "طَائِرَةٌ", correct: true },
      { text: "طَبِيبٌ", correct: false },
      { text: "طَمَاطِمٌ", correct: false },
    ],
  },
  "Ta2-audio-2": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/ta2/medecin.MP3",
    options: [
      { text: "طَائِرَةٌ", correct: false },
      { text: "طَبِيبٌ", correct: true },
      { text: "مِسْطَرَةٌ", correct: false },
    ],
  },
};

const puzzleData = {
  "Ta2-puzzle-1": {
    instruction: "Reconstitue le mot (Restaurant)",
    word: "مَــطْــعَــمٌ",
    letters: ["ـمٌ", "ـعَـ", "ـطْـ", "مَـ"],
  },
};

const quizData = {
  "Ta2-quiz-1": {
    question: "Choisis le mot qui contient la lettre ط (Ta2)",
    answers: [
      { text: "طَاوُوسٌ", correct: true },
      { text: "مِقْلَمَةٌ", correct: false },
      { text: "تِين", correct: false },
      { text: "قُرْصانٌ", correct: false },
    ],
  },
  "Ta2-quiz-2": {
    question: "Dans quel mot la lettre ط est-elle au milieu ?",
    answers: [
      { text: "مِسْطَرَة", correct: true },
      { text: "طَباشِير", correct: false },
      { text: "بَلُوط", correct: false },
    ],
  },
};

const dragData = {
  "Ta2-drag-1": {
    instruction: "Relie la forme de la lettre à sa place dans le mot",
    letters: ["طـ", "ـطـ", "ـط"],
    pairs: [
      { letter: "طـ", word: "طَوِيلٌ" },
      { letter: "ـطـ", word: "مِسْطَرَةٌ" },
      { letter: "ـط", word: "قِطٌّ" },
    ],
  },
};

const imageDragData = {
  "Ta2-images-1": {
    instruction: "Associe l’image au mot",
    images: [
      { id: "avion", src: "../img/lettre-ta2/avion1.png" },
      { id: "chat", src: "../img/lettre-ta2/chat1.png" },
      { id: "tomate", src: "../img/lettre-ta2/tomate1.png" },
    ],
    words: [
      { word: "طائِـرَة", match: "avion" },
      { word: "قِـط", match: "chat" },
      { word: "طَماطِم", match: "tomate" },
    ],
  },
};
