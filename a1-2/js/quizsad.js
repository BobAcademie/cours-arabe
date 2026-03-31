const games = [
  { type: "quiz", key: "Sad-verbs-conjugation" },
  { type: "scramble", key: "Sad-scramble-1" },
  { type: "odd-one-out", key: "safiya-comprehension-1" },
  { type: "odd-one-out", key: "safiya-comprehension-2" },
  { type: "sentence-quiz", key: "safiya-sentence-1" },
  { type: "forms-quiz", key: "Sad-forms-1" },
  { type: "puzzle", key: "Sad-puzzle-1" },
  { type: "audio-quiz", key: "Sad-audio-1" },
  { type: "audio-quiz", key: "Sad-audio-2" },
  { type: "image-drag", key: "Sad-images" },
];

// 1. Remettre la phrase cible dans l'ordre
const scrambleData = {
  "Sad-scramble-1": {
    instruction: "Remets les mots dans le bon ordre :",
    correctSentence: "تُحِبُّ صَفِيَّةُ عَصِيـرَ الْبُرْتُقالِ",
    words: ["الْبُرْتُقالِ", "عَصِيـرَ", "صَفِيَّةُ", "تُحِبُّ"],
  },
};

// 2. Questions de compréhension basées sur Safiya
const oddOneOutData = {
  "safiya-comprehension-1": {
    instruction: "مَاذَا تُحِبُّ صَفِيَّةُ ؟",
    options: [
      { text: "تُحِبُّ الْحَلِيبَ", correct: false },
      { text: "تُحِبُّ عَصِيرَ الْبُرْتُقالِ", correct: true },
      { text: "تُحِبُّ التُّفَّاحَ", correct: false },
      { text: "تُحِبُّ الصّابُونَ", correct: false },
    ],
  },
  "safiya-comprehension-2": {
    instruction: "كَيْفَ هُوَ الْعَصِيرُ ؟",
    options: [
      { text: "ساخِنٌ", correct: false }, // Chaud
      { text: "بَارِدٌ", correct: true }, // Froid
      { text: "مُرٌّ", correct: false }, // Amer
    ],
  },
};

// 3. Grammaire / Accord (Féminin)
const sentenceQuizData = {
  "safiya-sentence-1": {
    instruction: "Choisis le bon verbe pour Safiya (Féminin) :",
    sentenceWithHole: "... صَفِيَّةُ عَصِيرَ الْبُرْتُقالِ",
    correctWord: "تُحِبُّ",
    options: [
      { text: "يُحِبُّ", correct: false }, // Masculin
      { text: "تُحِبُّ", correct: true }, // Féminin
      { text: "أُحِبُّ", correct: false },
    ],
  },
};

// 4. Formes de la lettre Sad (Mot : Jus)
const formsQuizData = {
  "Sad-forms-1": {
    instruction: "Complète le mot : عـ...ـيرٌ (Jus)",
    wordWithHole: "عَـ...ـيرٌ",
    options: [
      { text: "ـصِـ", correct: true }, // Forme milieu (attachée des deux côtés)
      { text: "ـصـ", correct: false },
      { text: "صـ", correct: false },
    ],
  },
};

// 5. Audio (Mots avec Sad)
const audioQuizData = {
  "Sad-audio-1": {
    instruction: "Écoute et choisis le mot correct :",
    audioPath: "../sounds/sad/savon.MP3",
    options: [
      { text: "صابونٌ", correct: true },
      { text: "صُنْدوقٌ", correct: false },
      { text: "بَصَلٌ", correct: false },
    ],
  },
  "Sad-audio-2": {
    instruction: "Écoute et choisis le mot que tu entends :",
    audioPath: "../sounds/sad/jus.MP3",
    options: [
      { text: "أَصْفَرُ", correct: false },
      { text: "عَصِيرٌ", correct: true },
      { text: "قَفَصٌ", correct: false },
    ],
  },
};

// 6. Puzzle (Mot : Pharmacie)
const puzzleData = {
  "Sad-puzzle-1": {
    instruction: "Reconstitue le nom (Pharmacie)",
    word: "صَــيْــدَلِــيَّــةٌ",
    letters: ["لِـ", "صَـ", "ـدَ", "ـيْـ", "ـةٌ", "ـيَّـ"],
  },
};

// 7. Images (Sad)
const imageDragData = {
  "Sad-images": {
    instruction: "Associe l’image au bon mot",
    images: [
      { id: "savon", src: "../img/lettre-sad/savon1.png" },
      { id: "boite", src: "../img/lettre-sad/boite1.png" },
      { id: "cage", src: "../img/lettre-sad/cage1.png" },
    ],
    words: [
      { word: "صابونٌ", match: "savon" },
      { word: "صُندوقٌ", match: "boite" },
      { word: "قَفَصٌ", match: "cage" },
    ],
  },
};

// 8. Conjugaison / Accord
const quizData = {
  "Sad-verbs-conjugation": {
    question: "Comment dit-on 'Safiya aime' ?",
    answers: [
      { text: "يُحِبُّ صَفِيَّةُ", correct: false },
      { text: "تُحِبُّ صَفِيَّةُ", correct: true }, // Féminin singulier
      { text: "تُحِبُّ صَفِيَّ", correct: false },
    ],
  },
};
