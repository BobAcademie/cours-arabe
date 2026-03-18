const games = [
  { type: "quiz", key: "Shin-verbs-conjugation" },
  { type: "scramble", key: "Shin-scramble-1" },
  { type: "odd-one-out", key: "hicham-comprehension-1" },
  { type: "odd-one-out", key: "hicham-comprehension-2" },
  { type: "sentence-quiz", key: "hicham-sentence-1" },
  { type: "forms-quiz", key: "Shin-forms-1" },
  { type: "puzzle", key: "Shin-puzzle-1" },
  { type: "audio-quiz", key: "Shin-audio-1" },
  { type: "audio-quiz", key: "Shin-audio-2" },
  { type: "image-drag", key: "Shin-images" },
];

// 1. Remettre la phrase dans l'ordre (Basé sur le début du texte)
const scrambleData = {
  "Shin-scramble-1": {
    instruction: "Remets les mots dans le bon ordre :",
    correctSentence: "جَلَسَ هِشامٌ مَعَ عائِلَتِهِ",
    words: ["عائِلَتِهِ", "مَعَ", "جَلَسَ", "هِشامٌ"],
  },
};

// 2. Questions de compréhension (Texte de Hicham)
const oddOneOutData = {
  "hicham-comprehension-1": {
    instruction: "أَيْنَ جَلَسَ هِشامٌ مَعَ عائِلَتِهِ؟",
    options: [
      { text: "فِي الْمَدْرَسَةِ", correct: false },
      { text: "فِي الْحَديقَةِ", correct: true },
      { text: "فِي الشّارِعِ", correct: false },
      { text: "فِي السَّيّارَةِ", correct: false },
    ],
  },
  "hicham-comprehension-2": {
    instruction: "ماذا أَحْضَرَتْ أُخْتُ هِشامٍ بَعْدَ الْأَكْلِ؟",
    options: [
      { text: "طَبَقًا مِنَ التُّفّاحِ", correct: false },
      { text: "عَصِيرًا لَذيذًا", correct: false },
      { text: "طَبَقًا مِنَ الْمِشْمِشِ", correct: true },
      { text: "حَلْوى", correct: false },
    ],
  },
};

// 3. Grammaire / Accord (Adjectif pour l'arbre)
const sentenceQuizData = {
  "hicham-sentence-1": {
    instruction: "Choisis l'adjectif correct pour l'arbre (شَجَرَة) :",
    sentenceWithHole: "قُرْبَ شَجَرَةٍ ...",
    correctWord: "كَبيرَةٍ",
    options: [
      { text: "كَبيرٍ", correct: false },
      { text: "كَبيرَةٍ", correct: true },
      { text: "لَذيذٌ", correct: false },
    ],
  },
};

// 4. Formes de la lettre Shin (Basé sur le mot Mismich)
const formsQuizData = {
  "Shin-forms-1": {
    instruction: "Complète le mot : مِـ...ـمِشٌ (Abricot)",
    wordWithHole: "مِـ...ـمِشٌ",
    options: [
      { text: "ـشـ", correct: true }, // Forme milieu
      { text: "شـ", correct: false },
      { text: "ـش", correct: false },
    ],
  },
};

// 5. Audio (Mots clés du texte)
const audioQuizData = {
  "Shin-audio-1": {
    instruction: "Écoute et choisis le fruit mentionné :",
    audioPath: "../sounds/chine/peche1.MP3",
    options: [
      { text: "مِشْمِشٌ", correct: true },
      { text: "تُفّاحٌ", correct: false },
      { text: "فُرْشاةٌ", correct: false },
    ],
  },
  "Shin-audio-2": {
    instruction: "Écoute et choisis l'objet pour griller la viande :",
    audioPath: "../sounds/chine/grille1.MP3",
    options: [
      { text: "شَبَحٌ", correct: false },
      { text: "مِشْواةٌ", correct: true },
      { text: "شَجَرَةٌ", correct: false },
    ],
  },
};

// 6. Puzzle (Mot : Arbre)
const puzzleData = {
  "Shin-puzzle-1": {
    instruction: "Reconstitue le mot (Arbre)",
    word: "شَجَرَةٌ",
    letters: ["شَ", "ةٌ", "جَ", "رَ"],
  },
};

// 7. Images (Associer les nouveaux mots)
const imageDragData = {
  "Shin-images": {
    instruction: "Associe l’image au bon mot du texte",
    images: [
      { id: "arbre", src: "../img/lettre-chine/arbre.png" },
      { id: "abricot", src: "../img/lettre-chine/peche.png" },
      { id: "barbecue", src: "../img/lettre-chine/grille.png" },
    ],
    words: [
      { word: "شَجَرَة", match: "arbre" },
      { word: "مِشْمِش", match: "abricot" },
      { word: "مِشْواة", match: "barbecue" },
    ],
  },
};

// 8. Quiz de conjugaison (Basé sur le père qui grille)
const quizData = {
  "Shin-verbs-conjugation": {
    question: "Choisis la forme correcte du verbe pour le père (أَبُوهُ) :",
    answers: [
      { text: "تَشْوِي اللَّحْمَ", correct: false },
      { text: "يَشْوِي اللَّحْمَ", correct: true }, // Masculin singulier
      { text: "أَشْوِي اللَّحْمَ", correct: false },
    ],
  },
};
