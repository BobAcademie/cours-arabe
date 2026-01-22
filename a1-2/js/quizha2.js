const games = [
  { type: "scramble", key: "scramble-1" },
  { type: "odd-one-out", key: "nature-1" },
  { type: "sentence-quiz", key: "dina-sentence-1" },
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "quiz", key: "alif-quiz-2" },
  { type: "audio-quiz", key: "alif-audio-1" },
  { type: "audio-quiz", key: "pomme-audio" },
];

const scrambleData = {
  "scramble-1": {
    instruction: "Remets les mots dans le bon ordre pour former la phrase :",
    correctSentence: "يَجْري الْحِصانُ وَالْحِمارُ فَرِحَيْنِ",
    words: ["وَالْحِمارُ", "فَرِحَيْنِ", "يَجْري", "الْحِصانُ"], // Les mots individuels
  },
};

const oddOneOutData = {
  "nature-1": {
    instruction: "ماذا يَفْعَلُ الْحِمارُ ؟   ",
    options: [
      { text: "فَرِحٌ", audio: "../sounds/haa2/content.MP3", correct: false }, // Pomme
      { text: "حَقِيبَةٌ", audio: "../sounds/haa2/valise.MP3", correct: false }, // Banane
      {
        text: "يَجْري",
        audio: "../sounds/haa2/courir.MP3",
        correct: true,
      }, // Orange
      { text: "تُفَّاحٌ", audio: "../sounds/haa2/pomme.MP3", correct: false }, // Stylo (L'intrus)
    ],
  },
};

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de Haa pour compléter ce mot ?",
    wordWithHole: "مَسْبَـ...", // Le mot avec le trou
    options: [
      { text: "حٌ", correct: false },
      { text: "حُـ", correct: false },
      { text: "ـحٌ", correct: true },
    ],
  },
};
const sentenceQuizData = {
  "dina-sentence-1": {
    instruction: "Choisis le mot qui manque pour compléter la phrase :",
    sentenceWithHole: "يَجْرِي ... بِسُرعَةٍ", // On utilise encore les points
    correctWord: "الْحِصانُ",
    options: [
      { text: "الْمَسْبَحُ", correct: false },
      { text: "الْحَقيبَةُ", correct: false },
      { text: "الْحِصانُ", correct: true },
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    // Ici, tu mets le chemin exact à partir de la racine de ton projet
    audioPath: "../sounds/haa2/piscine.MP3",
    options: [
      { text: "حَمامَةٌ", correct: false },
      { text: "مَسْبَحٌ", correct: true },
      { text: "لَحْمٌ", correct: false },
    ],
  },
  "pomme-audio": {
    instruction: "Écoute bien et choisis le mot correspondant",
    // Ici, tu peux viser un sous-dossier sans problème !
    audioPath: "../sounds/haa2/valise.MP3",
    options: [
      { text: "حَقيبَةٌ", correct: true },
      { text: "حِصانٌ", correct: false },
      { text: "حَمامَةٌ", correct: false },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot Lait (Halib)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "حَــلِــيــبٌ",
    letters: ["حَـ", "ـبٌ", "ـلِـ", "ـيـ"],
  },
};

const quizData = {
  "alif-quiz-1": {
    question: "Choisis le mot qui contient la lettre Haa",
    answers: [
      { text: "بَاب", correct: false },
      { text: "تِين", correct: false },
      { text: "حَلِيبٌ", correct: true },
      { text: "تِين", correct: false },
    ],
  },
  "alif-quiz-2": {
    question: "Choisis le mot qui contient la lettre Haa",
    answers: [
      { text: "مَرْكَب", correct: false },
      { text: "تُفَّاحَةٌ", correct: true },
      { text: "لَبَن", correct: false },
    ],
  },
};

const dragData = {
  "alif-drag-1": {
    instruction: "Clique sur la lettre ثم الكلمة المناسبة",
    letters: ["ح", "ـحـ", "حـ"],
    pairs: [
      { letter: "ح", word: "فَرِحٌ" },
      { letter: "ـحـ", word: "نَحْلَةٌ" },
      { letter: "حـ", word: "حَلِيبٌ" },
    ],
  },
};
const imageDragData = {
  fruits: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "valise", src: "../img/pomme-audio/valise.jpg" },
      { id: "pomme", src: "../img/pomme-audio/pomme.jpg" },
      { id: "pigeon", src: "../img/pomme-audio/pigeon.jpg" },
    ],
    words: [
      { word: "تُفَّاحٌ", match: "pomme" },
      { word: "حَقيبَةٌ", match: "valise" },
      { word: "حَمامَةٌ", match: "pigeon" },
    ],
  },
};

