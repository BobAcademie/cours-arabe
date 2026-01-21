const sounds = {
  click: new Audio("sounds/click.mp3"),
  success: new Audio("sounds/success.wav"),
  error: new Audio("sounds/error.wav"),
};

function playSound(name) {
  if (!sounds[name]) return;
  sounds[name].currentTime = 0;
  sounds[name].play();
}
