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
    correctSentence: "يَضَعُ قَاسِمُ الْأَقْلامَ فِي الْمِقْلَمَةِ",
    words: ["فِي", "يَضَعُ", "قَاسِمُ", "الْأَقْلامَ", "الْمِقْلَمَةِ"], // Les mots individuels
  },
};

const oddOneOutData = {
  "nature-1": {
    instruction: "ماذا يُجَهِّزُ قاسِمٌ كُلَّ صَباحٍ؟      ",
    options: [
      { text: "قُفْلٌ", audio: "../sounds/9af/cadenat.mp3", correct: false }, // Pomme
      { text: "حَقِيبَةٌ", audio: "../sounds/9af/valise.mp3", correct: true }, // Banane
      {
        text: "قَنْطَرَةٌ",
        audio: "../sounds/9af/9anttara.mp3",
        correct: false,
      }, // Orange
      { text: "قِسْمٌ", audio: "../sounds/9af/9ism.mp3", correct: false }, // Stylo (L'intrus)
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
    sentenceWithHole: "يَحْلِسُ قَاسِمُ فِي ...  ", // On utilise encore les points
    correctWord: "الْقِسْمِ",
    options: [
      { text: "الْقِسْمِ", correct: true },
      { text: "الْقُفْلِ", correct: false },
      { text: "الْمِقْلَمَةِ", correct: false },
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    // Ici, tu mets le chemin exact à partir de la racine de ton projet
    audioPath: "../sounds/9af/9ofl.MP3",
    options: [
      { text: "قِيثَارَةٌ", correct: false },
      { text: "قُفْلٌ", correct: true },
      { text: "قَنْطَرَةٌ", correct: false },
    ],
  },
  "pomme-audio": {
    instruction: "Écoute bien et choisis le mot correspondant",
    // Ici, tu peux viser un sous-dossier sans problème !
    audioPath: "../sounds/9af/9ism.MP3",
    options: [
      { text: "قِسْمٌ", correct: true },
      { text: "قِطَارٌ", correct: false },
      { text: "قَلَمٌ", correct: false },
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
