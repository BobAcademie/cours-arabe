const games = [
  { type: "quiz", key: "Zay-verbs-conjugation" },
  { type: "scramble", key: "Zay-scramble-1" },
  { type: "odd-one-out", key: "zay-voyage-1" },
  { type: "odd-one-out", key: "zay-voyage-2" },
  { type: "sentence-quiz", key: "zay-sentence-1" },
  { type: "forms-quiz", key: "Zay-forms-1" },
  { type: "puzzle", key: "Zay-puzzle-1" },
  { type: "audio-quiz", key: "Zay-audio-1" },
  { type: "audio-quiz", key: "Zay-audio-2" },
  { type: "image-drag", key: "Zay-images" },
];

// 1. Remettre la phrase dans l'ordre (Début du texte)
const scrambleData = {
  "Zay-scramble-1": {
    instruction: "Remets les mots dans le bon ordre :",
    correctSentence: "ذَهَبَ رامِزٌ إِلَى الْمَزْرَعَةِ",
    words: ["الْمَزْرَعَةِ", "إِلَى", "رامِزٌ", "ذَهَبَ"],
  },
};

// 2. Questions de compréhension (Texte A2-1)
const oddOneOutData = {
  "zay-voyage-1": {
    instruction: "ماذا شاهَدَ الْأَصْدِقاءُ فِي الْمَزْرَعَةِ؟",
    options: [
      { text: "أَشْجارَ التُّفّاحِ", correct: false },
      { text: "زُهوراً وَأَشْجارَ الزَّيْتونِ", correct: true },
      { text: "حَيَواناتٍ كَثيرَةً", correct: false },
      { text: "سَيّاراتٍ سَريعَةً", correct: false },
    ],
  },
  "zay-voyage-2": {
    instruction: "مَنْ أَجابَ عَلى سُؤالِ رامِزٍ؟",
    options: [
      { text: "زَيْدٌ", correct: false },
      { text: "زَيْنَبُ", correct: true },
      { text: "الْمُعَلِّمُ", correct: false },
      { text: "الْأَبُ", correct: false },
    ],
  },
};

// 3. Grammaire / Accord (Adjectif pour le voyage/excursion)
const sentenceQuizData = {
  "zay-sentence-1": {
    instruction: "Choisis l'adjectif correct pour le voyage (رِحْلَة) :",
    sentenceWithHole: "هَذِهِ رِحْلَةٌ ...",
    correctWord: "جَمِيلَةٌ",
    options: [
      { text: "جَمِيلٌ", correct: false },
      { text: "جَمِيلَةٌ", correct: true }, // Féminin singulier (accord avec Rihla)
      { text: "أَخْضَرُ", correct: false },
    ],
  },
};

// 4. Formes de la lettre Zay (Basé sur le mot Ferme)
const formsQuizData = {
  "Zay-forms-1": {
    instruction: "Complète le mot : الْمَـ...ـرَعَةِ (La ferme)",
    wordWithHole: "الْمَـ...ـرَعَةِ",
    options: [
      { text: "ـزْ", correct: true }, // Milieu
      { text: "ز", correct: false },
      { text: "ـر", correct: false },
    ],
  },
};

// 5. Audio (Mots clés du texte)
const audioQuizData = {
  "Zay-audio-1": {
    instruction: "Écoute et choisis l'arbre mentionné :",
    audioPath: "../sounds/zay/olive.MP3",
    options: [
      { text: "زَيْتُونٌ", correct: true },
      { text: "بُرْتُقالٌ", correct: false },
      { text: "مَوْزٌ", correct: false },
    ],
  },
  "Zay-audio-2": {
    instruction: "Écoute et choisis ce que Zeynab a vu :",
    audioPath: "../sounds/zay/fleurs.MP3",
    options: [
      { text: "جِبالٌ", correct: false },
      { text: "زُهورٌ", correct: true },
      { text: "رِمالٌ", correct: false },
    ],
  },
};

// 6. Puzzle (Mot : Huile)
const puzzleData = {
  "Zay-puzzle-1": {
    instruction: "Reconstitue le mot (ferme)",
    word: "مَــزْرَعَــةٌ",
    letters: ["رَ", "مَـ", "ـزْ", "عَـ", "ـةٌ"],
  },
};

// 7. Images (Associer les mots du texte)
const imageDragData = {
  "Zay-images": {
    instruction: "Associe l’image au bon mot",
    images: [
      { id: "ferme", src: "../img/lettre-zay/ferme.png" },
      { id: "olives", src: "../img/lettre-zay/olive.png" },
      { id: "fleurs", src: "../img/lettre-zay/fleurs.png" },
    ],
    words: [
      { word: "مَزْرَعَة", match: "ferme" },
      { word: "زَيْتُون", match: "olives" },
      { word: "زُهور", match: "fleurs" },
    ],
  },
};

// 8. Quiz de conjugaison (Verbe Obtenir)
const quizData = {
  "Zay-verbs-conjugation": {
    question: "Choisis la forme correcte pour (Elle) : ... هِيَ ",
    answers: [
      { text: "يُحِبُّ أُمَّهُ", correct: false },
      { text: "تُحِبُّ أُمَّها", correct: true }, // Nous obtenons
      { text: "تُحِبُّ أُمَّكَ", correct: false },
    ],
  },
};
