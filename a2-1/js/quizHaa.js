const games = [
  { type: "audio-quiz", key: "alif-audio-1" },
  { type: "scramble", key: "scramble-1" },
  { type: "odd-one-out", key: "nature-1" },
  { type: "sentence-quiz", key: "dina-sentence-1" },
  { type: "sentence-quiz", key: "dina-sentence-2" },
  { type: "forms-quiz", key: "alif-forms-1" },
  { type: "puzzle", key: "alif-puzzle-1" },
  { type: "quiz", key: "alif-quiz-2" },
];

const scrambleData = {
  "scramble-1": {
    instruction: "Remets les mots dans le bon ordre pour former la phrase :",
    correctSentence: "أُحِبُّ حَيَواناتِ الْمَزْرَعَةِ",
    words: ["حَيَواناتِ", "أُحِبُّ", "الْمَزْرَعَةِ"], // Les mots individuels
  },
};

const oddOneOutData = {
  "nature-1": {
    instruction: "ماذا تُعْطينا الدَّجَاجَةُ",
    options: [
      { text: "فَرِحٌ", audio: "../sounds/haa2/content.mp3", correct: false }, // Pomme
      { text: "حَمامَةٌ", audio: "../sounds/haa2/pigeon.mp3", correct: false }, // Banane
      { text: "مَسْبَحٌ", audio: "../sounds/haa2/piscine.mp3", correct: false }, // Orange
      { text: "بَيْضًا", audio: "../sounds/haa2/oeufs.mp3", correct: true }, // Stylo (L'intrus)
    ],
  },
};

const formsQuizData = {
  "alif-forms-1": {
    instruction: "Quelle est la bonne forme de Dal pour compléter ce mot ?",
    wordWithHole: "مِفْتا...", // Le mot avec le trou
    options: [
      { text: "ـحٌ", correct: false },
      { text: "ـحُـ", correct: false },
      { text: "حٌ", correct: true },
    ],
  },
};
const sentenceQuizData = {
  "dina-sentence-1": {
    instruction: "Choisis le mot qui manque pour compléter la phrase :",
    sentenceWithHole: "يَحْمِلُ ... الْقَشَّ ", // On utilise encore les points
    correctWord: "الْحِمارُ",
    options: [
      { text: "الحِمارُ", correct: true },
      { text: "الْحِصانُ", correct: false },
      { text: "حَمامَةٌ", correct: false },
    ],
  },
  "dina-sentence-2": {
    instruction: "Choisis le mot qui manque pour compléter la phrase :",
    sentenceWithHole: "يُحِبُّ ... حَيَواناتِ الْمَزْرَعَةِ", // On utilise encore les points
    correctWord: "التِّلْمِيذُ",
    options: [
      { text: "التِّلْمِيذَةُ", correct: false },
      { text: "الْبِنْتُ", correct: false },
      { text: "الْوَلَدُ", correct: true },
    ],
  },
};

const audioQuizData = {
  "alif-audio-1": {
    instruction: "Écoute bien et choisis le mot correspondant",
    audioPath: "../sounds/haa2/abeille.mp3", // Le nom de votre fichier dans le dossier sounds
    options: [
      { text: "نَحْلَةٌ", correct: true },
      { text: "بَاب", correct: false },
      { text: "تِين", correct: false },
    ],
  },
};

const puzzleData = {
  "alif-puzzle-1": {
    instruction: "Reconstitue le mot clé (Miftah)",
    // Ne tapez pas le mot au clavier, faites : letters[1] + letters[2] + letters[0]
    word: "مِفْــتاحٌ",
    letters: ["مِفْـ", "حٌ", "ـتا"],
  },
};

const quizData = {
  "alif-quiz-1": {
    question: "Choisis le mot qui contient la lettre Haa",
    answers: [
      { text: "بَخْرٌ", correct: true },
      { text: "بَاب", correct: false },
      { text: "تِين", correct: false },
      { text: "مِسْطَرَةٌ", correct: false },
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
    letters: ["حـ", "ـح", "ح"],
    pairs: [
      { letter: "حـ", word: "حَـبْلٌ" },
      { letter: "ـح", word: "مَـسْرَحٌ" },
      { letter: "ح", word: "مِفْتاحٌ" },
    ],
  },
};
const imageDragData = {
  fruits: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "valise", src: "../img/pomme-audio/valise.JPG" },
      { id: "pomme", src: "../img/pomme-audio/pomme.JPG" },
      { id: "pigeon", src: "../img/pomme-audio/pigeon.JPG" },
    ],
    words: [
      { word: "تُفَّاحٌ", match: "pomme" },
      { word: "حَقيبَةٌ", match: "valise" },
      { word: "حَمامَةٌ", match: "pigeon" },
    ],
  },
};
