const games = [
  { type: "vocab-quiz", key: "famille-frere" },
  { type: "vocab-quiz", key: "famille-soeur" },
  { type: "vocab-quiz", key: "famille-pere" },
  { type: "vocab-quiz", key: "famille-mere" },
  { type: "vocab-quiz", key: "famille-gpere" },
  { type: "vocab-quiz", key: "famille-gmere" },
  { type: "image-drag", key: "fruits" },
  { type: "image-drag", key: "fruits2" },
];

const vocabData = {
  "famille-frere": {
    instruction: "مَنْ هَذا؟",
    audioInstruction: "../sounds/famille/cqui.MP3",
    image: "../img/famille/frère.png",
    options: [
      {
        text: "هَذا أَخِي",
        audio: "../sounds/famille/frere2.MP3",
        correct: true,
      },
      {
        text: "هَذِهِ جَدَّتي",
        audio: "../sounds/famille/g-mere2.MP3",
        correct: false,
      },
      {
        text: "هَذا جَدِّي",
        audio: "../sounds/famille/g-pere2.MP3",
        correct: false,
      },
      {
        text: "هَذِهِ أُخْتِي",
        audio: "../sounds/famille/soeur2.MP3",
        correct: false,
      },
    ],
  },
  "famille-soeur": {
    instruction: "مَنْ هَذِهِ؟",
    audioInstruction: "../sounds/famille/cqui.MP3",
    image: "../img/famille/soeur.png",
    options: [
      {
        text: "هَذِهِ أُخْتِي",
        audio: "../sounds/famille/soeur2.MP3",
        correct: true,
      },
      {
        text: "هَذا أَبي",
        audio: "../sounds/famille/pere2.MP3",
        correct: false,
      },
      {
        text: "هَذِهِ أُمِّي",
        audio: "../sounds/famille/mere2.MP3",
        correct: false,
      },
      {
        text: "هَذا أَخِي",
        audio: "../sounds/famille/frere2.MP3",
        correct: false,
      },
    ],
  },
  "famille-pere": {
    instruction: "مَنْ هَذا؟",
    audioInstruction: "../sounds/famille/cqui.MP3",
    image: "../img/famille/père.png",
    options: [
      {
        text: "هَذا أَبي",
        audio: "../sounds/famille/pere2.MP3",
        correct: true,
      },
      {
        text: "هَذا جَدِّي",
        audio: "../sounds/famille/g-pere2.MP3",
        correct: false,
      },
      {
        text: "هَذا أَخِي",
        audio: "../sounds/famille/frere2.MP3",
        correct: false,
      },
      {
        text: "هَذِهِ أُمِّي",
        audio: "../sounds/famille/mere2.MP3",
        correct: false,
      },
    ],
  },
  "famille-mere": {
    instruction: "مَنْ هَذِهِ؟",
    audioInstruction: "../sounds/famille/cqui.MP3",
    image: "../img/famille/mère.png",
    options: [
      {
        text: "هَذِهِ أُمِّي",
        audio: "../sounds/famille/mere2.MP3",
        correct: true,
      },
      {
        text: "هَذِهِ جَدَّتي",
        audio: "../sounds/famille/g-mere2.MP3",
        correct: false,
      },
      {
        text: "هَذِهِ أُخْتِي",
        audio: "../sounds/famille/soeur2.MP3",
        correct: false,
      },
      {
        text: "هَذا أَبي",
        audio: "../sounds/famille/pere2.MP3",
        correct: false,
      },
    ],
  },
  "famille-gpere": {
    instruction: "مَنْ هَذا؟",
    audioInstruction: "../sounds/famille/cqui.MP3",
    image: "../img/famille/grand-père.png",
    options: [
      {
        text: "هَذا جَدِّي",
        audio: "../sounds/famille/g-pere2.MP3",
        correct: true,
      },
      {
        text: "هَذا أَبي",
        audio: "../sounds/famille/pere2.MP3",
        correct: false,
      },
      {
        text: "هَذا أَخِي",
        audio: "../sounds/famille/frere2.MP3",
        correct: false,
      },
      {
        text: "هَذِهِ جَدَّتي",
        audio: "../sounds/famille/g-mere2.MP3",
        correct: false,
      },
    ],
  },
  "famille-gmere": {
    instruction: "مَنْ هَذِهِ؟",
    audioInstruction: "../sounds/famille/cqui.MP3",
    image: "../img/famille/grand-mère.png",
    options: [
      {
        text: "هَذِهِ جَدَّتي",
        audio: "../sounds/famille/g-mere2.MP3",
        correct: true,
      },
      {
        text: "هَذِهِ أُمِّي",
        audio: "../sounds/famille/mere2.MP3",
        correct: false,
      },
      {
        text: "هَذِهِ أُخْتِي",
        audio: "../sounds/famille/soeur2.MP3",
        correct: false,
      },
      {
        text: "هَذا جَدِّي",
        audio: "../sounds/famille/g-pere2.MP3",
        correct: false,
      },
    ],
  },
};

const imageDragData = {
  fruits: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "pere", src: "../img/famille/père.png" },
      { id: "grand-pere", src: "../img/famille/grand-père.png" },
      { id: "soeur", src: "../img/famille/soeur.png" },
    ],
    words: [
      { word: "أَبِي", match: "pere" },
      { word: "جَدَّي", match: "grand-pere" },
      { word: "أخْتي", match: "soeur" },
    ],
  },
  fruits2: {
    instruction: "Associe l’image au mot",
    images: [
      { id: "mere", src: "../img/famille/mère.png" },
      { id: "grand-mere", src: "../img/famille/grand-mère.png" },
      { id: "frere", src: "../img/famille/frère.png" },
    ],
    words: [
      { word: "أَُمِّي", match: "mere" },
      { word: "جَدَّتِي", match: "grand-mere" },
      { word: "أَخِي", match: "frere" },
    ],
  },
};

