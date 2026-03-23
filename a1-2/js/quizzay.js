const games = [
  { type: "quiz", key: "Zay-verbs-conjugation" },
  { type: "scramble", key: "Zay-scramble-1" },
  { type: "odd-one-out", key: "nizar-comprehension-1" },
  { type: "odd-one-out", key: "nizar-comprehension-2" },
  { type: "sentence-quiz", key: "nizar-sentence-1" },
  { type: "forms-quiz", key: "Zay-forms-1" },
  { type: "puzzle", key: "Zay-puzzle-1" },
  { type: "audio-quiz", key: "Zay-audio-1" },
  { type: "audio-quiz", key: "Zay-audio-2" },
  { type: "image-drag", key: "Zay-images" },
];

// 1. Remettre la phrase cible dans l'ordre
const scrambleData = {
  "Zay-scramble-1": {
    instruction: "Remets les mots dans le bon ordre :",
    correctSentence: "زارَ نِزارُ عَمَّهُ",
    words: ["عَمَّهُ", "نِزارُ", "زارَ"],
  },
};

// 2. Questions de compréhension basées sur la visite de Nizar
const oddOneOutData = {
  "nizar-comprehension-1": {
    instruction: "مَاذَا فَعَلَ نِزارُ ؟",
    options: [
      { text: "أَكَلَ الزَّيْتُونَ", correct: false },
      { text: "زارَ عَمَّهُ زَيْدًا", correct: true },
      { text: "ذَهَبَ إِلَى الْمَزْرَعَةِ", correct: false },
      { text: "رَسَمَ جَزيرَةً", correct: false },
    ],
  },
  "nizar-comprehension-2": {
    instruction: "أَيْنَ زارَ نِزارُ عَمَّهُ ؟",
    options: [
      { text: "فِي الْحَديقَةِ", correct: false },
      { text: "فِي الْمَنْزِلِ", correct: true },
      { text: "فِي الشّارِعِ", correct: false },
      { text: "فِي الْمَطْعَمِ", correct: false },
    ],
  },
};

// 3. Grammaire / Accord
const sentenceQuizData = {
  "nizar-sentence-1": {
    instruction: "Choisis le bon mot pour compléter la phrase :",
    sentenceWithHole: "زارَ نِزارُ ... زَيْدًا",
    correctWord: "عَمَّهُ",
    options: [
      { text: "عَمَّتَهُ", correct: false },
      { text: "عَمَّهُ", correct: true }, // Masculin (Oncle)
      { text: "خالَتَهُ", correct: false },
    ],
  },
};

// 4. Formes de la lettre Zay (Basé sur le mot Maison)
const formsQuizData = {
  "Zay-forms-1": {
    instruction: "Complète le mot : الْمَنْـ...ـلِ (La maison)",
    wordWithHole: "الْمَنْـ...ـلِ",
    options: [
      { text: "ـزِ", correct: true }, // Forme milieu (attachée à droite)
      { text: "ـزـ", correct: false }, // Le Zay ne s'attache jamais à gauche
      { text: "زِ", correct: false },
    ],
  },
};

// 5. Audio (Fichiers MP3 demandés)
const audioQuizData = {
  "Zay-audio-1": {
    instruction: "Écoute et choisis le mot correct :",
    audioPath: "../sounds/zay/escargot.MP3",
    options: [
      { text: "حَلَزونٌ", correct: true },
      { text: "زُجاجَةٌ", correct: false },
      { text: "مِيزانٌ", correct: false },
    ],
  },
  "Zay-audio-2": {
    instruction: "Écoute et choisis le mot que tu entends :",
    audioPath: "../sounds/zay/olive.MP3",
    options: [
      { text: "مَزْرَعَةٌ", correct: false },
      { text: "زَيْتُونٌ", correct: true },
      { text: "جَزيرَةٌ", correct: false },
    ],
  },
};

// 6. Puzzle (Mot : ferme)
const puzzleData = {
  "Zay-puzzle-1": {
    instruction: "Reconstitue le nom (ferme)",
    word: "مَــزْرَعَــةٌ",
    letters: ["ـةٌ", "رَ", "مَـ", "ـزْ", "عَـ"],
  },
};

// 7. Images (Fichiers PNG demandés)
const imageDragData = {
  "Zay-images": {
    instruction: "Associe l’image au bon mot",
    images: [
      { id: "ferme", src: "../img/lettre-zay/ferme.png" },
      { id: "fleurs", src: "../img/lettre-zay/fleurs.png" }, // fleurs = زُهور
      { id: "balance", src: "../img/lettre-zay/balance.png" },
    ],
    words: [
      { word: "مَزْرَعَةٌ", match: "ferme" },
      { word: "زُهورٌ", match: "fleurs" },
      { word: "مِيزانٌ", match: "balance" },
    ],
  },
};

// 8. Conjugaison (Passé)
const quizData = {
  "Zay-verbs-conjugation": {
    question: "Choisis le verbe correct pour Nizar (Masculin - Passé) :",
    answers: [
      { text: "زارَتْ نِزارُ", correct: false },
      { text: "زارَ نِزارُ", correct: true }, // Masculin singulier
      { text: "تَزورُ نِزارُ", correct: false },
    ],
  },
};
