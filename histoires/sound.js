// Sons système (pour le quiz, etc.)
const sounds = {
  click: new Audio("../sounds/click.mp3"),
  success: new Audio("../sounds/success.wav"),
  error: new Audio("../sounds/error.wav"),
};

function playSound(name) {
  if (!sounds[name]) return;
  sounds[name].currentTime = 0;
  sounds[name].play();
}

/**
 * Nouvelle fonction pour lire n'importe quel fichier audio
 * @param {string} audioPath - Le chemin vers le fichier mp3
 * @param {HTMLElement} btn - Le bouton cliqué (optionnel, pour animer)
 */
function playCustomSound(audioPath) {
  const audio = new Audio(audioPath);
  audio.play().catch((error) => {
    console.error("Erreur de lecture audio :", error);
    alert(
      "Le fichier audio n'a pas pu être chargé. Vérifiez le chemin : " +
        audioPath,
    );
  });
}
