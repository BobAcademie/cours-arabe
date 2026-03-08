const games = [
  { type: "quiz", key: "Ta2-verbs-conjugation" },
  { type: "scramble", key: "Ta2-scramble-1" },
  { type: "odd-one-out", key: "fatima-comprehension-1" },
  { type: "odd-one-out", key: "fatima-comprehension-2" },
  { type: "sentence-quiz", key: "fatima-sentence-1" },
  { type: "forms-quiz", key: "Ta2-forms-1" },
  { type: "puzzle", key: "Ta2-puzzle-1" },
  { type: "audio-quiz", key: "Ta2-audio-1" },
  { type: "audio-quiz", key: "Ta2-audio-2" },
  { type: "image-drag", key: "Ta2-images" },
];

// 1. Remettre la phrase dans l'ordre (Niveau A2)
const scrambleData = {
  "Ta2-scramble-1": {
    instruction: "Remets les mots dans le bon ordre :",
    correctSentence: "تُساعِدُ فاطِمَةُ أُمَّها",
    words: ["تُساعِدُ", "فاطِمَةُ", "أُمَّها"],
  },
};

// 2. Questions de compréhension basées sur votre texte
const oddOneOutData = {
  "fatima-comprehension-1": {
    instruction: "ماذا  تفعل فاطمة ؟",
    options: [
      { text: " تَلْعَبُ الكُرَةَ", correct: false },
      { text: " تُقَطِّعُ الطَّمَاطِمَ وَالْبَطاطِسَ", correct: true }, // Utilise vos mots clés
      { text: " تُشَاهِدُ التِّلْفَازَ", correct: false },
      { text: " تَكْتُبُ وَاجِبَهَا", correct: false },
    ],
  },
  "fatima-comprehension-2": {
    instruction: "أَيْنَ تُوجَدُ فاطِمَةُ وَ أُمُّها ",
    options: [
      { text: " في الْمَدْرَسَةِ", correct: false },
      { text: "في الْمَلْعَبِ", correct: false },
      { text: "في الْمَطْبَخِ", correct: true },
      { text: " في الْغابَةِ", correct: false },
    ],
  },
};

// 3. Grammaire / Accord (Niveau A2)
const sentenceQuizData = {
  "fatima-sentence-1": {
    instruction: "Choisis l'adjectif correct pour Fatima :",
    sentenceWithHole: "فَاطِمَةُ بِنْتٌ ...",
    correctWord: "نَشِيطَةٌ",
    options: [
      { text: "نَشِيطٌ", correct: false },
      { text: "نَشِيطَةٌ", correct: true },
      { text: "طَوِيلٌ", correct: false },
    ],
  },
};

// 4. Formes de la lettre Ta2 (Basé sur le mot Mطبخ du texte)
const formsQuizData = {
  "Ta2-forms-1": {
    instruction: "Complète le mot : الْمَـ...ـبَخ (La cuisine)",
    wordWithHole: "الْمَـ...ـبَخ",
    options: [
      { text: "ـطْـ", correct: true },
      { text: "ـطـ", correct: false },
      { text: "طـ", correct: false },
    ],
  },
};

// 5. Audio (Utilisation de vos fichiers MP3 : avion, tomate)
const audioQuizData = {
  "Ta2-audio-1": {
    instruction: "Écoute et choisis ce que Fatima coupe :",
    audioPath: "../sounds/Ta2/tomate.MP3",
    options: [
      { text: "طَمَاطِم", correct: true },
      { text: "بَطَاطِس", correct: false },
      { text: "بَلُّوط", correct: false },
    ],
  },
  "Ta2-audio-2": {
    instruction: "Écoute et choisis le mot que tu entends",
    audioPath: "../sounds/Ta2/marteau.MP3",
    options: [
      { text: "مَطْبَخٌ", correct: false },
      { text: "مِطْرَقَةٌ", correct: true },
      { text: "نَعامَةٌ", correct: false },
    ],
  },
};

// 6. Puzzle (Mot : Avion)
const puzzleData = {
  "Ta2-puzzle-1": {
    instruction: "Reconstitue le mot (Medecin)",
    word: "طــبـيــبٌ",
    letters: ["ـبـيـ", "ـبٌ", "طـ"],
  },
};

// 7. Images (Utilisation de vos fichiers PNG)
const imageDragData = {
  "Ta2-images": {
    instruction: "Associe l’image au bon mot du texte",
    images: [
      { id: "tomate", src: "../img/lettre-Ta2/tomate1.png" },
      { id: "avion", src: "../img/lettre-Ta2/avion1.png" },
      { id: "medecin", src: "../img/lettre-Ta2/medecin1.png" },
    ],
    words: [
      { word: "طَمَاطِم", match: "tomate" },
      { word: "طَائِرَة", match: "avion" },
      { word: "طَبِيب", match: "medecin" },
    ],
  },
};

const quizData = {
  // ... vos autres quiz ...
  "Ta2-verbs-conjugation": {
    question: "Choisis la forme correcte du verbe pour Fatima :",
    answers: [
      { text: " يُحِبُّ فَاطِمَةُ الطَّبْخَ ", correct: false },
      { text: " تُحِبُّ فَاطِمَةُ الطَّبْخَ", correct: true }, // Féminin singulier
      { text: " أُحِبُّ فَاطِمَةُ الطَّبْخَ", correct: false },
    ],
  },
};

