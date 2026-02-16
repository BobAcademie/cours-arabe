const games = [
  { type: "vocab-quiz", key: "couleur-rouge" },
  { type: "vocab-quiz", key: "couleur-bleu" },
  { type: "vocab-quiz", key: "couleur-vert" },
  { type: "vocab-quiz", key: "couleur-jaune" },
  { type: "vocab-quiz", key: "couleur-noir" },
  { type: "vocab-quiz", key: "couleur-blanc" },
  { type: "vocab-quiz", key: "couleur-rose" },
  { type: "vocab-quiz", key: "couleur-marron" },
  { type: "vocab-quiz", key: "couleur-orange" },
  { type: "image-drag", key: "drag-couleurs-1" },
];

const vocabData = {
  "couleur-rouge": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/rouge.jpeg",
    options: [
      { text: "أَحْمَر", audio: "../sounds/couleurs/rouge.MP3", correct: true },
      { text: "أَزْرَق", audio: "../sounds/couleurs/bleu.MP3", correct: false },
      { text: "أَخْضَر", audio: "../sounds/couleurs/vert.MP3", correct: false },
      {
        text: "أَصْفَر",
        audio: "../sounds/couleurs/jaune.MP3",
        correct: false,
      },
    ],
  },
  "couleur-bleu": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/bleu.jpeg",
    options: [
      { text: "أَزْرَق", audio: "../sounds/couleurs/bleu.MP3", correct: true },
      {
        text: "أَحْمَر",
        audio: "../sounds/couleurs/rouge.MP3",
        correct: false,
      },
      {
        text: "أَسْوَد",
        audio: "../sounds/couleurs/noire.MP3",
        correct: false,
      },
      {
        text: "أَبْيَض",
        audio: "../sounds/couleurs/blanc.MP3",
        correct: false,
      },
    ],
  },
  "couleur-vert": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/vert.jpeg",
    options: [
      { text: "أَخْضَر", audio: "../sounds/couleurs/vert.MP3", correct: true },
      {
        text: "أَصْفَر",
        audio: "../sounds/couleurs/jaune.MP3",
        correct: false,
      },
      {
        text: "بُنِّي",
        audio: "../sounds/couleurs/marron.MP3",
        correct: false,
      },
      { text: "وَرْدِي", audio: "../sounds/couleurs/rose.MP3", correct: false },
    ],
  },
  "couleur-jaune": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/jaune.jpeg",
    options: [
      { text: "أَصْفَر", audio: "../sounds/couleurs/jaune.MP3", correct: true },
      {
        text: "أَحْمَر",
        audio: "../sounds/couleurs/rouge.MP3",
        correct: false,
      },
      {
        text: "بُرْتُقَالِي",
        audio: "../sounds/couleurs/orange.MP3",
        correct: false,
      },
      { text: "أَزْرَق", audio: "../sounds/couleurs/bleu.MP3", correct: false },
    ],
  },
  "couleur-noir": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/noire.jpeg",
    options: [
      { text: "أَسْوَد", audio: "../sounds/couleurs/noire.MP3", correct: true },
      {
        text: "أَبْيَض",
        audio: "../sounds/couleurs/blanc.MP3",
        correct: false,
      },
      {
        text: "بُنِّي",
        audio: "../sounds/couleurs/marron.MP3",
        correct: false,
      },
      { text: "أَزْرَق", audio: "../sounds/couleurs/bleu.MP3", correct: false },
    ],
  },
  "couleur-blanc": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/blanc.jpeg",
    options: [
      { text: "أَبْيَض", audio: "../sounds/couleurs/blanc.MP3", correct: true },
      {
        text: "أَسْوَد",
        audio: "../sounds/couleurs/noire.MP3",
        correct: false,
      },
      { text: "وَرْدِي", audio: "../sounds/couleurs/rose.MP3", correct: false },
      { text: "أَخْضَر", audio: "../sounds/couleurs/vert.MP3", correct: false },
    ],
  },
  "couleur-rose": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/rose.jpeg",
    options: [
      { text: "وَرْدِي", audio: "../sounds/couleurs/rose.MP3", correct: true },
      {
        text: "أَحْمَر",
        audio: "../sounds/couleurs/rouge.MP3",
        correct: false,
      },
      {
        text: "بُنِّي",
        audio: "../sounds/couleurs/marron.MP3",
        correct: false,
      },
      {
        text: "بُرْتُقَالِي",
        audio: "../sounds/couleurs/orange.MP3",
        correct: false,
      },
    ],
  },
  "couleur-marron": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/marron.jpeg",
    options: [
      { text: "بُنِّي", audio: "../sounds/couleurs/marron.MP3", correct: true },
      {
        text: "أَسْوَد",
        audio: "../sounds/couleurs/noire.MP3",
        correct: false,
      },
      { text: "أَخْضَر", audio: "../sounds/couleurs/vert.MP3", correct: false },
      {
        text: "أَصْفَر",
        audio: "../sounds/couleurs/jaune.MP3",
        correct: false,
      },
    ],
  },
  "couleur-orange": {
    instruction: "مَا هَذَا اللَّوْن؟",
    audioInstruction: "../sounds/couleurs/quelcouleur.MP3",
    image: "../img/couleurs/orange.jpeg",
    options: [
      {
        text: "بُرْتُقَالِي",
        audio: "../sounds/couleurs/orange.MP3",
        correct: true,
      },
      {
        text: "أَصْفَر",
        audio: "../sounds/couleurs/jaune.MP3",
        correct: false,
      },
      {
        text: "أَحْمَر",
        audio: "../sounds/couleurs/rouge.MP3",
        correct: false,
      },
      { text: "وَرْدِي", audio: "../sounds/couleurs/rose.MP3", correct: false },
    ],
  },
};

const imageDragData = {
  "drag-couleurs-1": {
    instruction: "صِلِ اللَّوْنَ بِاسْمِهِ",
    images: [
      { id: "rouge", src: "../img/couleurs/rouge.jpeg" },
      { id: "bleu", src: "../img/couleurs/bleu.jpeg" },
      { id: "vert", src: "../img/couleurs/vert.jpeg" },
    ],
    words: [
      { word: "أَحْمَر", match: "rouge" },
      { word: "أَزْرَق", match: "bleu" },
      { word: "أَخْضَر", match: "vert" },
    ],
  },
};
