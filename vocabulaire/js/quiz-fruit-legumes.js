const games = [
  { type: "vocab-quiz", key: "food-ail" },
  { type: "vocab-quiz", key: "food-banane" },
  { type: "vocab-quiz", key: "food-carotte" },
  { type: "vocab-quiz", key: "food-figues" },
  { type: "vocab-quiz", key: "food-grenade" },
  { type: "vocab-quiz", key: "food-oignon" },
  { type: "vocab-quiz", key: "food-orange" },
  { type: "vocab-quiz", key: "food-piment" },
  { type: "vocab-quiz", key: "food-pomme" },
  { type: "vocab-quiz", key: "food-raisin" },
  { type: "vocab-quiz", key: "food-tomate" },
  { type: "image-drag", key: "drag-fruit-legumes-1" },
];

const vocabData = {
  "food-ail": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/ail.jpeg",
    options: [
      {
        text: "ثَوْمٌ",
        audio: "../sounds/fruit-legumes/ail.MP3",
        correct: true,
      },
      {
        text: "بَصَلٌ",
        audio: "../sounds/fruit-legumes/oignon.MP3",
        correct: false,
      },
      {
        text: "جَزَرٌ",
        audio: "../sounds/fruit-legumes/carotte.MP3",
        correct: false,
      },
      {
        text: "طَمَاطِمٌ",
        audio: "../sounds/fruit-legumes/tomate.MP3",
        correct: false,
      },
    ],
  },
  "food-banane": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/banane.jpeg",
    options: [
      {
        text: "مَوْزٌ",
        audio: "../sounds/fruit-legumes/banane.MP3",
        correct: true,
      },
      {
        text: "تُفَّاحٌ",
        audio: "../sounds/fruit-legumes/pomme.MP3",
        correct: false,
      },
      {
        text: "بُرْتُقَالٌ",
        audio: "../sounds/fruit-legumes/Orange.MP3",
        correct: false,
      },
      {
        text: "تِينٌ",
        audio: "../sounds/fruit-legumes/figues.MP3",
        correct: false,
      },
    ],
  },
  "food-carotte": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/carotte.jpeg",
    options: [
      {
        text: "جَزَرٌ",
        audio: "../sounds/fruit-legumes/carotte.MP3",
        correct: true,
      },
      {
        text: "فِلْفِلٌ",
        audio: "../sounds/fruit-legumes/piment.MP3",
        correct: false,
      },
      {
        text: "ثَوْمٌ",
        audio: "../sounds/fruit-legumes/ail.MP3",
        correct: false,
      },
      {
        text: "بَصَلٌ",
        audio: "../sounds/fruit-legumes/oignon.MP3",
        correct: false,
      },
    ],
  },
  "food-figues": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/figues.jpeg",
    options: [
      {
        text: "تِينٌ",
        audio: "../sounds/fruit-legumes/figues.MP3",
        correct: true,
      },
      {
        text: "عِنَبٌ",
        audio: "../sounds/fruit-legumes/raisin.MP3",
        correct: false,
      },
      {
        text: "رُمَّانٌ",
        audio: "../sounds/fruit-legumes/grenade.MP3",
        correct: false,
      },
      {
        text: "مَوْزٌ",
        audio: "../sounds/fruit-legumes/banane.MP3",
        correct: false,
      },
    ],
  },
  "food-grenade": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/grenade.jpeg",
    options: [
      {
        text: "رُمَّانٌ",
        audio: "../sounds/fruit-legumes/grenade.MP3",
        correct: true,
      },
      {
        text: "تُفَّاحٌ",
        audio: "../sounds/fruit-legumes/pomme.MP3",
        correct: false,
      },
      {
        text: "بُرْتُقَالٌ",
        audio: "../sounds/fruit-legumes/Orange.MP3",
        correct: false,
      },
      {
        text: "عِنَبٌ",
        audio: "../sounds/fruit-legumes/raisin.MP3",
        correct: false,
      },
    ],
  },
  "food-oignon": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/oignon.jpeg",
    options: [
      {
        text: "بَصَلٌ",
        audio: "../sounds/fruit-legumes/oignon.MP3",
        correct: true,
      },
      {
        text: "ثَوْمٌ",
        audio: "../sounds/fruit-legumes/ail.MP3",
        correct: false,
      },
      {
        text: "فِلْفِلٌ",
        audio: "../sounds/fruit-legumes/piment.MP3",
        correct: false,
      },
      {
        text: "طَمَاطِمٌ",
        audio: "../sounds/fruit-legumes/tomate.MP3",
        correct: false,
      },
    ],
  },
  "food-orange": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/Orange.jpeg",
    options: [
      {
        text: "بُرْتُقَالٌ",
        audio: "../sounds/fruit-legumes/Orange.MP3",
        correct: true,
      },
      {
        text: "تُفَّاحٌ",
        audio: "../sounds/fruit-legumes/pomme.MP3",
        correct: false,
      },
      {
        text: "رُمَّانٌ",
        audio: "../sounds/fruit-legumes/grenade.MP3",
        correct: false,
      },
      {
        text: "مَوْزٌ",
        audio: "../sounds/fruit-legumes/banane.MP3",
        correct: false,
      },
    ],
  },
  "food-piment": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/piment.jpeg",
    options: [
      {
        text: "فِلْفِلٌ",
        audio: "../sounds/fruit-legumes/piment.MP3",
        correct: true,
      },
      {
        text: "جَزَرٌ",
        audio: "../sounds/fruit-legumes/carotte.MP3",
        correct: false,
      },
      {
        text: "طَمَاطِمٌ",
        audio: "../sounds/fruit-legumes/tomate.MP3",
        correct: false,
      },
      {
        text: "بَصَلٌ",
        audio: "../sounds/fruit-legumes/oignon.MP3",
        correct: false,
      },
    ],
  },
  "food-pomme": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/pomme.jpeg",
    options: [
      {
        text: "تُفَّاحٌ",
        audio: "../sounds/fruit-legumes/pomme.MP3",
        correct: true,
      },
      {
        text: "بُرْتُقَالٌ",
        audio: "../sounds/fruit-legumes/Orange.MP3",
        correct: false,
      },
      {
        text: "مَوْزٌ",
        audio: "../sounds/fruit-legumes/banane.MP3",
        correct: false,
      },
      {
        text: "تِينٌ",
        audio: "../sounds/fruit-legumes/figues.MP3",
        correct: false,
      },
    ],
  },
  "food-raisin": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/raisin.jpeg",
    options: [
      {
        text: "عِنَبٌ",
        audio: "../sounds/fruit-legumes/raisin.MP3",
        correct: true,
      },
      {
        text: "تِينٌ",
        audio: "../sounds/fruit-legumes/figues.MP3",
        correct: false,
      },
      {
        text: "رُمَّانٌ",
        audio: "../sounds/fruit-legumes/grenade.MP3",
        correct: false,
      },
      {
        text: "مَوْزٌ",
        audio: "../sounds/fruit-legumes/banane.MP3",
        correct: false,
      },
    ],
  },
  "food-tomate": {
    instruction: "مَا هَذَا ؟",
    audioInstruction: "../sounds/fruit-legumes/quest.MP3",
    image: "../img/fruit-legumes/tomate.jpeg",
    options: [
      {
        text: "طَمَاطِمٌ",
        audio: "../sounds/fruit-legumes/tomate.MP3",
        correct: true,
      },
      {
        text: "جَزَرٌ",
        audio: "../sounds/fruit-legumes/carotte.MP3",
        correct: false,
      },
      {
        text: "فِلْفِلٌ",
        audio: "../sounds/fruit-legumes/piment.MP3",
        correct: false,
      },
      {
        text: "ثَوْمٌ",
        audio: "../sounds/fruit-legumes/ail.MP3",
        correct: false,
      },
    ],
  },
};

const imageDragData = {
  "drag-fruit-legumes-1": {
    instruction: "صِلِ الْفَاكِهَةَ بِاسْمِهَا الْمُنَاسِبِ",
    images: [
      { id: "banane", src: "../img/fruit-legumes/banane.jpeg" },
      { id: "pomme", src: "../img/fruit-legumes/pomme.jpeg" },
      { id: "raisin", src: "../img/fruit-legumes/raisin.jpeg" },
    ],
    words: [
      { word: "مَوْزٌ", match: "banane" },
      { word: "تُفَّاحٌ", match: "pomme" },
      { word: "عِنَبٌ", match: "raisin" },
    ],
  },
};
