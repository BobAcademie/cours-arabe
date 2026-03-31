const games = [
  { type: "quiz", key: "Sad-verbs-conjugation" },
  { type: "scramble", key: "Sad-scramble-1" },
  { type: "odd-one-out", key: "karima-routine-1" },
  { type: "odd-one-out", key: "karima-routine-2" },
  { type: "sentence-quiz", key: "karima-sentence-1" },
  { type: "forms-quiz", key: "Sad-forms-1" },
  { type: "puzzle", key: "Sad-puzzle-1" },
  { type: "audio-quiz", key: "Sad-audio-1" },
  { type: "audio-quiz", key: "Sad-audio-2" },
  { type: "image-drag", key: "Sad-images" },
];

// 1. Remettre la phrase dans l'ordre (Début du texte)
const scrambleData = {
  "Sad-scramble-1": {
    instruction: "Remets les mots dans le bon ordre :",
    correctSentence: "تَسْتَيْقِظُ كَرِيمَةُ في الصَّبَاحِ",
    words: ["الصَّبَاحِ", "في", "كَرِيمَةُ", "تَسْتَيْقِظُ"],
  },
};

// 2. Questions de compréhension (Texte Karima)
const oddOneOutData = {
  "karima-routine-1": {
    instruction: "مَتَى تَسْتَيْقِظُ كَرِيمَةُ؟",
    options: [
      { text: "في اللَّيْلِ", correct: false },
      { text: "في الصَّبَاحِ الْبَاكِرِ", correct: true }, // Le matin tôt
      { text: "في الظُّهْرِ", correct: false },
      { text: "بَعْدَ الْمَدْرَسَةِ", correct: false },
    ],
  },
  "karima-routine-2": {
    instruction: "مَاذَا تَتَنَاوَلُ كَرِيمَةُ؟",
    options: [
      { text: "عَصِيرًا فَقَطْ", correct: false },
      { text: "فُطُورًا صِحِّيًّا", correct: true }, // Un petit-déjeuner sain
      { text: "حَلْوَى كَثيرَةً", correct: false },
      { text: "لَا تَتَنَاوَلُ شَيْئًا", correct: false },
    ],
  },
};

// 3. Grammaire / Accord (Adjectif pour le petit-déjeuner/Foutour)
const sentenceQuizData = {
  "karima-sentence-1": {
    instruction:
      "Choisis l'adjectif correct pour le petit-déjeuner (فُطُورًا) :",
    sentenceWithHole: "تَتَنَاوَلُ فُطُورًا ...",
    correctWord: "صِحِّيًّا",
    options: [
      { text: "صِحِّيَّةٌ", correct: false },
      { text: "صِحِّيًّا", correct: true }, // Masculin (accord avec Foutouran)
      { text: "بَارِدَةٌ", correct: false },
    ],
  },
};

// 4. Formes de la lettre Sad (Basé sur le mot Matin)
const formsQuizData = {
  "Sad-forms-1": {
    instruction: "Complète le mot : الـ...ـبَاحِ (Le matin)",
    wordWithHole: "الـ...ـبَاحِ",
    options: [
      { text: "ـصَّـ", correct: true }, // Milieu (attaché des deux côtés)
      { text: "صـ", correct: false },
      { text: "ـص", correct: false },
    ],
  },
};

// 5. Audio (Mots clés du texte de Karima)
const audioQuizData = {
  "Sad-audio-1": {
    instruction: "Écoute et choisis le mot correspondant au texte :",
    audioPath: "../sounds/sad/ampoule.MP3", // مصباح
    options: [
      { text: "الصَّبَاحُ", correct: false },
      { text: "مِصْباحٌ", correct: true },
      { text: "مُصْحَفٌ", correct: false },
    ],
  },
  "Sad-audio-2": {
    instruction: "Écoute et choisis l'adjectif entendu :",
    audioPath: "../sounds/sad/pharmacie.MP3",
    options: [
      { text: "صَباحٌ", correct: false },
      { text: "صَيْدَلِيَّةٌ", correct: true },
      { text: "صَحافِيٌّّ", correct: false },
    ],
  },
};

// 6. Puzzle (Mot : Petit-déjeuner)
const puzzleData = {
  "Sad-puzzle-1": {
    instruction: "Reconstitue le mot (ampoule)",
    word: "مِــصْــبَـاحٌ",
    letters: ["حٌ", "مِـ", "ـصْـ", "ـبَـا"],
  },
};

// 7. Images (Routine de Karima)
const imageDragData = {
  "Sad-images": {
    instruction: "Associe l’image à l'action ou l'objet",
    images: [
      { id: "matin", src: "../img/lettre-sad/savon1.png" },
      { id: "jus", src: "../img/lettre-sad/jus1.png" }, // Pour le petit déjeuner
      { id: "pharmacie", src: "../img/lettre-sad/pharmacie1.png" }, // Juste pour réviser le Sad
    ],
    words: [
      { word: "صَابُونٌ", match: "savon" },
      { word: "عَصِيرٌ", match: "jus" },
      { word: "صَيْدَلِيَّة", match: "pharmacie" },
    ],
  },
};

// 8. Quiz de conjugaison (Verbe Nettoyer / Se laver)
const quizData = {
  "Sad-verbs-conjugation": {
    question: "Choisis la forme correcte pour Karima (Elle / Présent) :",
    answers: [
      { text: "يَغْسِلُ وَجْهَهُ", correct: false },
      { text: "تَغْسِلُ وَجْهَهَا", correct: true }, // Féminin (Elle lave son visage)
      { text: "تَغْسِلُ وَجْهَهُ", correct: false },
    ],
  },
};
