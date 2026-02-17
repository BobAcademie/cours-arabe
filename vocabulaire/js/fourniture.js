const games = [
  { type: "vocab-quiz", key: "fourniture-stylo" },
  { type: "vocab-quiz", key: "fourniture-livre" },
  { type: "vocab-quiz", key: "fourniture-cahier" },
  { type: "vocab-quiz", key: "fourniture-cartable" },
  { type: "vocab-quiz", key: "fourniture-gomme" },
  { type: "vocab-quiz", key: "fourniture-trousse" },
  { type: "vocab-quiz", key: "fourniture-regle" },
  { type: "vocab-quiz", key: "fourniture-tableau" },
  { type: "vocab-quiz", key: "fourniture-ciseaux" },
  { type: "image-drag", key: "drag-fourniture-1" },
];

const vocabData = {
  "fourniture-stylo": {
    instruction: "مَا هَذَا؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3", // Assure-toi d'avoir ce son ou change le nom
    image: "../img/f-scolaire/stylo.png",
    options: [
      {
        text: "قَلَمٌ",
        audio: "../sounds/f-scolaire/stylo.MP3",
        correct: true,
      },
      {
        text: "كِتَابٌ",
        audio: "../sounds/f-scolaire/livre.MP3",
        correct: false,
      },
      {
        text: "مِمْحَاةٌ",
        audio: "../sounds/f-scolaire/effaceure.MP3",
        correct: false,
      },
      {
        text: "مِسْطَرَةٌ",
        audio: "../sounds/f-scolaire/regle.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-livre": {
    instruction: "مَا هَذَا؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/livre.jpg",
    options: [
      {
        text: "كِتَابٌ",
        audio: "../sounds/f-scolaire/livre.MP3",
        correct: true,
      },
      {
        text: "دَفْتَرٌ",
        audio: "../sounds/f-scolaire/cahier.MP3",
        correct: false,
      },
      {
        text: "قَلَمٌ",
        audio: "../sounds/f-scolaire/stylo.MP3",
        correct: false,
      },
      {
        text: "مِحْفَظَةٌ",
        audio: "../sounds/f-scolaire/cartable.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-cahier": {
    instruction: "مَا هَذَا؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/cahier.jpg",
    options: [
      {
        text: "دَفْتَرٌ",
        audio: "../sounds/f-scolaire/cahier.MP3",
        correct: true,
      },
      {
        text: "كِتَابٌ",
        audio: "../sounds/f-scolaire/livre.MP3",
        correct: false,
      },
      {
        text: "مِقْلَمَةٌ",
        audio: "../sounds/f-scolaire/trousse.MP3",
        correct: false,
      },
      {
        text: "سَبُّورَةٌ",
        audio: "../sounds/f-scolaire/tableau.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-cartable": {
    instruction: "مَا هَذَا؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/cartable.jpeg",
    options: [
      {
        text: "مِحْفَظَةٌ",
        audio: "../sounds/f-scolaire/cartable.MP3",
        correct: true,
      },
      {
        text: "مِقْلَمَةٌ",
        audio: "../sounds/f-scolaire/trousse.MP3",
        correct: false,
      },
      {
        text: "قَلَمٌ",
        audio: "../sounds/f-scolaire/stylo.MP3",
        correct: false,
      },
      {
        text: "مِمْحَاةٌ",
        audio: "../sounds/f-scolaire/effaceure.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-gomme": {
    instruction: "مَا هَذِهِ؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/gomme.jpg",
    options: [
      {
        text: "مِمْحَاةٌ",
        audio: "../sounds/f-scolaire/gomme.MP3",
        correct: true,
      },
      {
        text: "مِسْطَرَةٌ",
        audio: "../sounds/f-scolaire/regle.MP3",
        correct: false,
      },
      {
        text: "مِقْلَمَةٌ",
        audio: "../sounds/f-scolaire/trousse.MP3",
        correct: false,
      },
      {
        text: "قَلَمٌ",
        audio: "../sounds/f-scolaire/stylo.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-trousse": {
    instruction: "مَا هَذِهِ؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/trousse.jpeg",
    options: [
      {
        text: "مِقْلَمَةٌ",
        audio: "../sounds/f-scolaire/trousse.MP3",
        correct: true,
      },
      {
        text: "مِحْفَظَةٌ",
        audio: "../sounds/f-scolaire/cartable.MP3",
        correct: false,
      },
      {
        text: "سَبُّورَةٌ",
        audio: "../sounds/f-scolaire/tableau.MP3",
        correct: false,
      },
      {
        text: "مِقَصٌّ",
        audio: "../sounds/f-scolaire/sciseaux.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-regle": {
    instruction: "مَا هَذِهِ؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/regle.jpg",
    options: [
      {
        text: "مِسْطَرَةٌ",
        audio: "../sounds/f-scolaire/regle.MP3",
        correct: true,
      },
      {
        text: "دَفْتَرٌ",
        audio: "../sounds/f-scolaire/cahier.MP3",
        correct: false,
      },
      {
        text: "مِمْحَاةٌ",
        audio: "../sounds/f-scolaire/gomme.MP3",
        correct: false,
      },
      {
        text: "مِقْلَمَةٌ",
        audio: "../sounds/f-scolaire/trousse.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-tableau": {
    instruction: "مَا هَذِهِ؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/tableau.jpg",
    options: [
      {
        text: "سَبُّورَةٌ",
        audio: "../sounds/f-scolaire/tableau.MP3",
        correct: true,
      },
      {
        text: "مِحْفَظَةٌ",
        audio: "../sounds/f-scolaire/cartable.MP3",
        correct: false,
      },
      {
        text: "كِتَابٌ",
        audio: "../sounds/f-scolaire/livre.MP3",
        correct: false,
      },
      {
        text: "مِقَصٌّ",
        audio: "../sounds/f-scolaire/sciseaux.MP3",
        correct: false,
      },
    ],
  },
  "fourniture-ciseaux": {
    instruction: "مَا هَذَا؟",
    audioInstruction: "../sounds/f-scolaire/quest.MP3",
    image: "../img/f-scolaire/sciseaux.jpeg",
    options: [
      {
        text: "مِقَصٌّ",
        audio: "../sounds/f-scolaire/sciseaux.MP3",
        correct: true,
      },
      {
        text: "قَلَمٌ",
        audio: "../sounds/f-scolaire/stylo.MP3",
        correct: false,
      },
      {
        text: "مِسْطَرَةٌ",
        audio: "../sounds/f-scolaire/regle.MP3",
        correct: false,
      },
      {
        text: "دَفْتَرٌ",
        audio: "../sounds/f-scolaire/cahier.MP3",
        correct: false,
      },
    ],
  },
};

const imageDragData = {
  "drag-fourniture-1": {
    instruction: "صِلِ الصُّورَةَ بِالْكَلِمَةِ الْمُنَاسِبَةِ",
    images: [
      { id: "stylo", src: "../img/f-scolaire/stylo.png" },
      { id: "livre", src: "../img/f-scolaire/livre.jpg" },
      { id: "cartable", src: "../img/f-scolaire/cartable.jpeg" },
    ],
    words: [
      { word: "قَلَمٌ", match: "stylo" },
      { word: "كِتَابٌ", match: "livre" },
      { word: "مِحْفَظَةٌ", match: "cartable" },
    ],
  },
};
