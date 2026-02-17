const games = [
  { type: "vocab-quiz", key: "animal-vache" },
  { type: "vocab-quiz", key: "animal-chat" },
  { type: "vocab-quiz", key: "animal-chien" },
  { type: "vocab-quiz", key: "animal-singe" },
  { type: "vocab-quiz", key: "animal-cheval" },
  { type: "vocab-quiz", key: "animal-poisson" },
  { type: "vocab-quiz", key: "animal-mouton" },
  { type: "vocab-quiz", key: "animal-giraffe" },
  { type: "vocab-quiz", key: "animal-poule" },
  { type: "vocab-quiz", key: "animal-coq" },
  { type: "image-drag", key: "drag-animaux-1" },
];

const vocabData = {
  "animal-vache": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/vache.jpeg",
    options: [
      { text: "بَقَرَةٌ", audio: "../sounds/animaux/vache.MP3", correct: true },
      { text: "قِطٌّ", audio: "../sounds/animaux/chat.MP3", correct: false },
      { text: "كَلْبٌ", audio: "../sounds/animaux/chien.MP3", correct: false },
      {
        text: "حِصَانٌ",
        audio: "../sounds/animaux/chevale.MP3",
        correct: false,
      },
    ],
  },
  "animal-chat": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/chat.jpeg",
    options: [
      { text: "قِطٌّ", audio: "../sounds/animaux/chat.MP3", correct: true },
      { text: "قِرْدٌ", audio: "../sounds/animaux/singe.MP3", correct: false },
      {
        text: "سَمَكَةٌ",
        audio: "../sounds/animaux/poisson.MP3",
        correct: false,
      },
      { text: "دِيكٌ", audio: "../sounds/animaux/coq.MP3", correct: false },
    ],
  },
  "animal-chien": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/chien.jpeg",
    options: [
      { text: "كَلْبٌ", audio: "../sounds/animaux/chien.MP3", correct: true },
      {
        text: "خَرُوفٌ",
        audio: "../sounds/animaux/mouton.MP3",
        correct: false,
      },
      {
        text: "دَجَاجَةٌ",
        audio: "../sounds/animaux/poule.MP3",
        correct: false,
      },
      {
        text: "بَقَرَةٌ",
        audio: "../sounds/animaux/vache.MP3",
        correct: false,
      },
    ],
  },
  "animal-singe": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/singe.png",
    options: [
      { text: "قِرْدٌ", audio: "../sounds/animaux/singe.MP3", correct: true },
      {
        text: "زَرَافَةٌ",
        audio: "../sounds/animaux/giraffe.MP3",
        correct: false,
      },
      {
        text: "حِصَانٌ",
        audio: "../sounds/animaux/chevale.MP3",
        correct: false,
      },
      { text: "قِطٌّ", audio: "../sounds/animaux/chat.MP3", correct: false },
    ],
  },
  "animal-cheval": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/chevale.jpeg",
    options: [
      {
        text: "حِصَانٌ",
        audio: "../sounds/animaux/chevale.MP3",
        correct: true,
      },
      {
        text: "خَرُوفٌ",
        audio: "../sounds/animaux/mouton.MP3",
        correct: false,
      },
      {
        text: "بَقَرَةٌ",
        audio: "../sounds/animaux/vache.MP3",
        correct: false,
      },
      { text: "كَلْبٌ", audio: "../sounds/animaux/chien.MP3", correct: false },
    ],
  },
  "animal-poisson": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/poisson.jpeg",
    options: [
      {
        text: "سَمَكَةٌ",
        audio: "../sounds/animaux/poisson.MP3",
        correct: true,
      },
      { text: "دِيكٌ", audio: "../sounds/animaux/coq.MP3", correct: false },
      {
        text: "دَجَاجَةٌ",
        audio: "../sounds/animaux/poule.MP3",
        correct: false,
      },
      { text: "قِطٌّ", audio: "../sounds/animaux/chat.MP3", correct: false },
    ],
  },
  "animal-mouton": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/mouton.jpeg",
    options: [
      { text: "خَرُوفٌ", audio: "../sounds/animaux/mouton.MP3", correct: true },
      {
        text: "بَقَرَةٌ",
        audio: "../sounds/animaux/vache.MP3",
        correct: false,
      },
      {
        text: "حِصَانٌ",
        audio: "../sounds/animaux/chevale.MP3",
        correct: false,
      },
      {
        text: "زَرَافَةٌ",
        audio: "../sounds/animaux/giraffe.MP3",
        correct: false,
      },
    ],
  },
  "animal-giraffe": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/giraffe.jpeg",
    options: [
      {
        text: "زَرَافَةٌ",
        audio: "../sounds/animaux/giraffe.MP3",
        correct: true,
      },
      { text: "قِرْدٌ", audio: "../sounds/animaux/singe.MP3", correct: false },
      {
        text: "حِصَانٌ",
        audio: "../sounds/animaux/chevale.MP3",
        correct: false,
      },
      { text: "كَلْبٌ", audio: "../sounds/animaux/chien.MP3", correct: false },
    ],
  },
  "animal-poule": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/poule.jpeg",
    options: [
      {
        text: "دَجَاجَةٌ",
        audio: "../sounds/animaux/poule.MP3",
        correct: true,
      },
      { text: "دِيكٌ", audio: "../sounds/animaux/coq.MP3", correct: false },
      {
        text: "سَمَكَةٌ",
        audio: "../sounds/animaux/poisson.MP3",
        correct: false,
      },
      { text: "قِطٌّ", audio: "../sounds/animaux/chat.MP3", correct: false },
    ],
  },
  "animal-coq": {
    instruction: "مَا هَذَا الْحَيَوَان؟",
    audioInstruction: "../sounds/animaux/quest.MP3",
    image: "../img/animaux/coq.jpeg",
    options: [
      { text: "دِيكٌ", audio: "../sounds/animaux/coq.MP3", correct: true },
      {
        text: "دَجَاجَةٌ",
        audio: "../sounds/animaux/poule.MP3",
        correct: false,
      },
      {
        text: "حِصَانٌ",
        audio: "../sounds/animaux/chevale.MP3",
        correct: false,
      },
      {
        text: "بَقَرَةٌ",
        audio: "../sounds/animaux/vache.MP3",
        correct: false,
      },
    ],
  },
};

const imageDragData = {
  "drag-animaux-1": {
    instruction: "صِلِ الْحَيَوَانَ بِاسْمِهِ الْمُنَاسِبِ",
    images: [
      { id: "chat", src: "../img/animaux/chat.jpeg" },
      { id: "chien", src: "../img/animaux/chien.jpeg" },
      { id: "singe", src: "../img/animaux/singe.png" },
    ],
    words: [
      { word: "قِطٌّ", match: "chat" },
      { word: "كَلْبٌ", match: "chien" },
      { word: "قِرْدٌ", match: "singe" },
    ],
  },
};
