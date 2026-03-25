const games = [
  { type: "quiz", key: "Shin-verbs-conjugation" },
  { type: "scramble", key: "Shin-scramble-1" },
  { type: "odd-one-out", key: "shama-comprehension-1" },
  { type: "odd-one-out", key: "shama-comprehension-2" },
  { type: "sentence-quiz", key: "shama-sentence-1" },
  { type: "forms-quiz", key: "Shin-forms-1" },
  { type: "puzzle", key: "Shin-puzzle-1" },
  { type: "audio-quiz", key: "Shin-audio-1" },
  { type: "audio-quiz", key: "Shin-audio-2" },
  { type: "image-drag", key: "Shin-images" },
];

// 1. Remettre la phrase cible dans l'ordre
const scrambleData = {
  "Shin-scramble-1": {
    instruction: "Remets les mots dans le bon ordre :",
    correctSentence: "تَشْوِي شَامَةُ اللَّحْمَ عَلَى الْمِشْوَاةِ",
    words: ["الْمِشْوَاةِ", "عَلَى", "اللَّحْمَ", "شَامَةُ", "تَشْوِي"],
  },
};

// 2. Questions de compréhension basées sur Shama
const oddOneOutData = {
  "shama-comprehension-1": {
    instruction: "ماذا تَفْعَلُ شَامَةُ؟",
    options: [
      { text: "تَأْكُلُ الْمِشْمِشَ", correct: false },
      { text: "تَشْوِي اللَّحْمَ", correct: true },
      { text: "تَشْرَبُ الشّايَ", correct: false },
      { text: "تَغْسِلُ الصُّحونَ", correct: false },
    ],
  },
  "shama-comprehension-2": {
    instruction: "أَيْنَ تَشْوِي شَامَةُ اللَّحْمَ؟",
    options: [
      { text: "فِي الْمِقْلاةِ", correct: false },
      { text: "فِي الْفُرْنِ", correct: false },
      { text: "عَلَى الْمِشْوَاةِ", correct: true },
      { text: "فِي الطَّنْجَرَةِ", correct: false },
    ],
  },
};

// 3. Grammaire / Accord (Niveau Intermédiaire)
const sentenceQuizData = {
  "shama-sentence-1": {
    instruction: "Choisis l'adjectif correct pour la viande (اللَّحْم) :",
    sentenceWithHole: "تَشْوِي شَامَةُ اللَّحْمَ ...",
    correctWord: "الطَّازَجَ",
    options: [
      { text: "الطَّازَجَةَ", correct: false },
      { text: "الطَّازَجَ", correct: true }, // Masculin singulier
      { text: "لَذيذَةٌ", correct: false },
    ],
  },
};

// 4. Formes de la lettre Shin (Basé sur le mot Barbecue)
const formsQuizData = {
  "Shin-forms-1": {
    instruction: "Complète le mot : الْمِـ...ـوَاة (Le barbecue)",
    wordWithHole: "الْمِـ...ـوَاة",
    options: [
      { text: "ـشْـ", correct: true }, // Forme milieu avec sukun
      { text: "ـشـ", correct: false },
      { text: "شـ", correct: false },
    ],
  },
};

// 5. Audio (Fichiers MP3 pour le Shin)
const audioQuizData = {
  "Shin-audio-1": {
    instruction: "Écoute et choisis ce que Shama utilise :",
    audioPath: "../sounds/chine/grille1.MP3",
    options: [
      { text: "مِشْوَاة", correct: true },
      { text: "مِعْطَف", correct: false },
      { text: "مِقَصّ", correct: false },
    ],
  },
  "Shin-audio-2": {
    instruction: "Écoute et choisis le mot que tu entends :",
    audioPath: "../sounds/chine/policier1.MP3",
    options: [
      { text: "شامَةُ", correct: false },
      { text: "شُرْطِيٌّ", correct: true },
      { text: "شَجَرَةٌ", correct: false },
    ],
  },
};

// 6. Puzzle (Mot : Hicham)
const puzzleData = {
  "Shin-puzzle-1": {
    instruction: "Reconstitue le nom (Hicham)",
    word: "هِــشَــامٌ",
    letters: ["ـامٌ", "ـشَـ", "هِـ"],
  },
};

// 7. Images (Fichiers PNG pour le Shin)
const imageDragData = {
  "Shin-images": {
    instruction: "Associe l’image au bon mot du texte",
    images: [
      { id: "barbecue", src: "../img/lettre-chine/grille.png" },
      { id: "arbre", src: "../img/lettre-chine/arbre.png" },
      { id: "camion", src: "../img/lettre-chine/camion.png" },
    ],
    words: [
      { word: "مِشْوَاة", match: "barbecue" },
      { word: "شَجَرَةٌ", match: "arbre" },
      { word: "شاحِنَةٌ", match: "camion" },
    ],
  },
};

// 8. Conjugaison (Féminin vs Masculin)
const quizData = {
  "Shin-verbs-conjugation": {
    question: "Choisis la forme correcte pour Shama (Féminin) :",
    answers: [
      { text: "يَشْوِي شَامَةُ", correct: false },
      { text: "تَشْوِي شَامَةُ", correct: true }, // Conjugaison féminine au présent
      { text: "أَشْوِي شَامَةُ", correct: false },
    ],
  },
};
