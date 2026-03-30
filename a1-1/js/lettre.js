function playCustomSound(path, element) {
  const audio = new Audio(path);

  // Si l'élément cliqué est le bouton, on cherche la carte parente (.syllable-card)
  // S'il n'y a pas de parent spécifique, on utilise l'élément lui-même
  const targetCard = element
    ? element.closest(".syllable-card") || element
    : null;

  if (targetCard) {
    targetCard.classList.add("playing-now");

    audio.onended = function () {
      targetCard.classList.remove("playing-now");
    };
  }

  audio.play().catch((e) => console.error("Erreur audio:", e));
}
// ================================
// 🎮 GESTION GLOBALE DU JEU
// ================================

// index du jeu actuel (quiz ou drag)
let currentGameIndex = 0;

// ⭐ score total (1 point max par jeu)
let totalScore = 0;

// conteneur principal
const container = document.getElementById("game-container");

// ================================
// 🔁 CHARGER LE JEU SUIVANT
// ================================
function loadNextGame() {
  container.innerHTML = "";

  // la fonction de barre de progression
  updateProgressBar();

  // 🎉 fin de la leçon
  // 🎉 FIN DE LA LEÇON
  if (currentGameIndex >= games.length) {
    let finalMsg = "";
    let finalEmoji = "";

    // Calcul de la moitié
    const halfScore = games.length / 2;

    // SCORE PARFAIT !
    if (totalScore === games.length) {
      finalMsg = "INCROYABLE ! Score parfait ! 🏆";
      finalEmoji = "🌟🌟🌟";

      // Lancement des confettis
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4da3ff", "#22c55e", "#ff9f45"], // Tes couleurs d'application
      });
    } else if (totalScore >= halfScore) {
      finalMsg = "C'est très bien ! Continue comme ça ! 👍";
      finalEmoji = "✨✨";
    } else {
      finalMsg = "N'abandonne pas, réessaie pour t'améliorer ! 💪";
      finalEmoji = "🌱";
    }

    container.innerHTML = `
      <div class="letter-quiz result-card">
        <h2>🎉 Leçon terminée !</h2>
        <div class="final-emoji">${finalEmoji}</div>
        <p class="final-message">${finalMsg}</p>
        <p class="final-score">⭐ Ton score : <strong>${totalScore.toFixed(
          2,
        )}</strong> / ${games.length}</p>
        <button class="retry-btn" onclick="location.reload()">🔄 Recommencer</button>
      </div>
    `;
    return;
  }

  const game = games[currentGameIndex];

  if (game.type === "forms-quiz") {
    renderFormsQuiz(formsQuizData[game.key]);
  }

  if (game.type === "audio-quiz") {
    renderAudioQuiz(audioQuizData[game.key]);
  }

  if (game.type === "puzzle") {
    renderPuzzle(puzzleData[game.key]);
  }

  if (game.type === "quiz") {
    renderQuiz(quizData[game.key]);
  }

  if (game.type === "drag") {
    renderDrag(dragData[game.key]);
  }
  if (game.type === "image-drag") {
    renderImageDrag(imageDragData[game.key]);
  }
}

//  =======================
// Melangeur des questions
// ========================
function shuffleArray(array) {
  // On crée une copie pour ne pas modifier l'original
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // On échange les places
  }
  return newArr;
}

// ================================
// 🧠 QUIZ À CHOIX MULTIPLES
// ================================
function renderQuiz(data) {
  let selectedAnswer = null;
  let selectedButton = null;
  let validated = false;
  let quizScoreAdded = false; // empêche le double comptage

  const shuffledAnswers = shuffleArray(data.answers);

  const section = document.createElement("section");
  section.className = "letter-quiz";

  section.innerHTML = `
    <h2>🧠 Quiz</h2>
    <p>${data.question}</p>
    <div class="quiz-options"></div>
    <p class="quiz-feedback"></p>
    <button class="validate-btn" disabled>✅ Valider</button>
  `;

  container.appendChild(section);

  const options = section.querySelector(".quiz-options");
  const feedback = section.querySelector(".quiz-feedback");
  const validateBtn = section.querySelector(".validate-btn");

  // 🔘 réponses
  shuffledAnswers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn";
    btn.textContent = answer.text;

    btn.addEventListener("click", () => {
      if (validated) return;

      playSound("click");

      document
        .querySelectorAll(".quiz-btn")
        .forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");
      selectedAnswer = answer;
      selectedButton = btn;
      validateBtn.disabled = false;
    });

    options.appendChild(btn);
  });

  // ✅ Valider
  validateBtn.addEventListener("click", () => {
    if (!selectedAnswer) return;

    validated = true;

    if (selectedAnswer.correct) {
      playSound("success");
      selectedButton.classList.add("correct");
      feedback.textContent = "✅ Bravo ! Bonne réponse";
      feedback.style.color = "green";

      // ⭐ 1 point pour CE quiz
      if (!quizScoreAdded) {
        totalScore += 1;
        quizScoreAdded = true;
      }
    } else {
      playSound("error");
      selectedButton.classList.add("wrong");
      feedback.textContent = "❌ Mauvaise réponse";
      feedback.style.color = "red";

      // On parcourt tous les boutons créés à l'écran
      document.querySelectorAll(".quiz-btn").forEach((btn) => {
        // On cherche dans les données originales quelle réponse a "correct: true"
        const isCorrectAnswer = data.answers.find(
          (a) => a.text === btn.textContent && a.correct,
        );

        if (isCorrectAnswer) {
          btn.classList.add("correct"); // On allume en vert le bouton qui contient le bon texte
        }
      });
    }

    document
      .querySelectorAll(".quiz-btn")
      .forEach((btn) => (btn.disabled = true));

    validateBtn.textContent = "➡️ Question suivante";
    validateBtn.addEventListener(
      "click",
      () => {
        currentGameIndex++;
        loadNextGame();
      },
      { once: true },
    );
  });
}

// ================================
// 🔤 DRAG & DROP (CLIC → CLIC)
// ================================
function renderDrag(data) {
  let selectedLetter = null;
  let localScore = 1; // Score potentiel pour ce module
  let solvedCount = 0;
  let quizScoreAdded = false; // Sécurité pour ne pas ajouter le score plusieurs fois
  // --- LE MÉLANGE ---
  // On mélange les lettres seules
  const shuffledLetters = shuffleArray(data.letters);
  // On mélange les paires (lettre + mot)
  const shuffledPairs = shuffleArray(data.pairs);

  const section = document.createElement("section");
  section.className = "letter-drag";

  section.innerHTML = `
    <h2>🔤 Associe la lettre au mot</h2>
    <p>${data.instruction}</p>
    <div class="letters"></div>
    <div class="words"></div>
    <p class="drag-feedback"></p>
    <button class="next-btn" disabled>➡️ Suivant</button>
  `;

  container.appendChild(section);

  const lettersEl = section.querySelector(".letters");
  const wordsEl = section.querySelector(".words");
  const feedback = section.querySelector(".drag-feedback");
  const nextBtn = section.querySelector(".next-btn");

  // --- 1. AFFICHAGE DES LETTRES ---
  shuffledLetters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "drag-letter";
    btn.textContent = letter;

    btn.addEventListener("click", () => {
      playSound("click");
      document
        .querySelectorAll(".drag-letter")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedLetter = letter;
    });

    lettersEl.appendChild(btn);
  });

  // --- 2. AFFICHAGE DES MOTS ---
  shuffledPairs.forEach((pair) => {
    const btn = document.createElement("button");
    btn.className = "drag-word";
    btn.textContent = pair.word;

    btn.addEventListener("click", () => {
      if (!selectedLetter) {
        playSound("click");
        feedback.textContent = "👆 Choisis d'abord une lettre";
        feedback.style.color = "#eab308";
        return;
      }

      // ✅ CAS 1 : BONNE ASSOCIATION
      if (pair.letter === selectedLetter) {
        playSound("success");
        btn.classList.add("correct");
        btn.disabled = true;

        // Désactiver la lettre correspondante
        const activeLetterBtn = section.querySelector(".drag-letter.active");
        if (activeLetterBtn) {
          activeLetterBtn.classList.add("correct");
          activeLetterBtn.style.pointerEvents = "none";
          activeLetterBtn.style.opacity = "0.5";
        }

        solvedCount++;
        selectedLetter = null;
        document
          .querySelectorAll(".drag-letter")
          .forEach((l) => l.classList.remove("active"));

        feedback.textContent = "✅ Bravo !";
        feedback.style.color = "green";

        // Vérification de la fin du module
        if (solvedCount === data.pairs.length) {
          if (!quizScoreAdded) {
            totalScore += localScore; // On ajoute le score restant au total global
            quizScoreAdded = true;
          }
          nextBtn.disabled = false;
        }
      }

      // ❌ CAS 2 : MAUVAISE ASSOCIATION
      else {
        playSound("error");

        // Pénalité
        localScore = Math.max(0, localScore - 0.25);

        btn.classList.add("wrong");
        feedback.textContent = `❌ Essaie encore ! (Points : ${localScore.toFixed(
          2,
        )})`;
        feedback.style.color = "red";

        setTimeout(() => {
          btn.classList.remove("wrong");
          feedback.textContent = "";
        }, 700);
      }
    });

    wordsEl.appendChild(btn);
  });

  // --- 3. BOUTON SUIVANT ---
  nextBtn.addEventListener("click", () => {
    currentGameIndex++;
    loadNextGame();
  });
}

// ================================
// 🔤 DRAG & DROP image ==> Nom (CLIC → CLIC)
// ================================
function renderImageDrag(data) {
  let selectedImage = null;
  let quizScoreAdded = false;
  let solvedCount = 0;

  // NOUVEAU : On commence avec 1 point pour ce jeu
  let currentMatchScore = 1;
  // On mélange les images et les mots séparément !
  const shuffledImages = shuffleArray(data.images);
  const shuffledWords = shuffleArray(data.words);

  const section = document.createElement("section");
  section.className = "letter-drag";
  section.innerHTML = `
    <h2>🖼️ Associe l’image au mot</h2>
    <p>${data.instruction}</p>
    <div class="images"></div>
    <div class="words"></div>
    <p class="drag-feedback"></p>
    <button class="next-btn" disabled>➡️ Suivant</button>
  `;
  container.appendChild(section);

  const imagesEl = section.querySelector(".images");
  const wordsEl = section.querySelector(".words");
  const feedback = section.querySelector(".drag-feedback");
  const nextBtn = section.querySelector(".next-btn");

  // --- AFFICHAGE DES IMAGES ---
  shuffledImages.forEach((img) => {
    const btn = document.createElement("button");
    btn.className = "drag-image";
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.id;
    btn.appendChild(image);
    btn.addEventListener("click", () => {
      playSound("click");
      document
        .querySelectorAll(".drag-image")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedImage = img.id;
    });
    imagesEl.appendChild(btn);
  });

  // --- AFFICHAGE DES MOTS ---
  shuffledWords.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "drag-word";
    btn.textContent = item.word;

    btn.addEventListener("click", () => {
      if (!selectedImage) {
        feedback.textContent = "👆 Choisis d’abord une image";
        return;
      }

      if (item.match === selectedImage) {
        playSound("success");
        btn.classList.add("correct");
        btn.disabled = true;

        const activeImgBtn = section.querySelector(".drag-image.active");
        if (activeImgBtn) {
          activeImgBtn.classList.add("correct");
          activeImgBtn.style.pointerEvents = "none";
          activeImgBtn.style.opacity = "0.5";
        }

        feedback.textContent = "✅ ";
        solvedCount++;
        selectedImage = null;

        // Quand TOUTES les images sont rangées
        if (solvedCount === data.words.length) {
          if (!quizScoreAdded) {
            // On ajoute le score restant (ex: 0.75 s'il y a eu une erreur)
            totalScore += currentMatchScore;
            quizScoreAdded = true;
          }
          nextBtn.disabled = false;
        }
      } else {
        playSound("error");
        // PÉNALITÉ : On retire 0.25, mais sans descendre sous 0
        currentMatchScore = Math.max(0, currentMatchScore - 0.25);

        btn.classList.add("wrong");
        feedback.textContent = `❌  (Score actuel : ${currentMatchScore})`;
        feedback.style.color = "red";

        setTimeout(() => {
          btn.classList.remove("wrong");
          feedback.textContent = "";
        }, 700);
      }
    });
    wordsEl.appendChild(btn);
  });

  nextBtn.addEventListener("click", () => {
    currentGameIndex++;
    loadNextGame();
  });
}
// ================================
// Puzzle Word
// ================================
function renderPuzzle(data) {
  let userWord = "";
  let localScore = 1;
  let quizScoreAdded = false;

  const section = document.createElement("section");
  section.className = "letter-puzzle-game";

  section.innerHTML = `
    <h2>🧩 Puzzle de mots</h2>
    <p>${data.instruction}</p>
    <div class="word-display">. . .</div> 
    <div class="letters-grid"></div> 
    <p class="drag-feedback"></p>
    <div class="actions">
      <button class="reset-btn">🔄 Effacer</button>
      <button class="next-btn" disabled>➡️ Suivant</button>
    </div>
  `;

  container.appendChild(section);

  const display = section.querySelector(".word-display");
  const lettersGrid = section.querySelector(".letters-grid");
  const feedback = section.querySelector(".drag-feedback");
  const nextBtn = section.querySelector(".next-btn");
  const resetBtn = section.querySelector(".reset-btn");

  data.letters.forEach((char) => {
    const btn = document.createElement("button");
    btn.className = "puzzle-letter-btn";
    btn.textContent = char;

    btn.addEventListener("click", () => {
      if (quizScoreAdded) return; // Bloque si déjà réussi

      playSound("click");
      userWord += char;
      display.textContent = userWord;
      btn.disabled = true;
      btn.style.opacity = "0.5";

      // VÉRIFICATION : Quand on a cliqué sur toutes les lettres
      if (userWord.length === data.word.length) {
        // Nettoyage des mots pour la comparaison (enlève espaces et normalise)
        const cleanUserWord = userWord.trim().normalize();
        const cleanTargetWord = data.word.trim().normalize();

        if (cleanUserWord === cleanTargetWord) {
          // ✅ SUCCÈS
          playSound("success");
          feedback.textContent = "✅ Bravo ! Tu as bien écrit le mot.";
          feedback.style.color = "green";
          display.style.color = "green";

          if (!quizScoreAdded) {
            totalScore += localScore;
            quizScoreAdded = true;
          }
          nextBtn.disabled = false;
        } else {
          // ❌ ERREUR
          playSound("error");
          localScore = Math.max(0, localScore - 0.25);

          feedback.textContent = "❌ Ce n'est pas le bon ordre !";
          feedback.style.color = "red";
          display.style.color = "red";

          // On désactive les boutons temporairement pour laisser l'élève voir son erreur
          document
            .querySelectorAll(".puzzle-letter-btn")
            .forEach((b) => (b.disabled = true));

          setTimeout(() => {
            resetPuzzle();
            display.style.color = "inherit"; // Remet la couleur normale
          }, 1500);
        }
      }
    });
    lettersGrid.appendChild(btn);
  });

  function resetPuzzle() {
    userWord = "";
    display.textContent = ". . .";
    feedback.textContent = "";
    section.querySelectorAll(".puzzle-letter-btn").forEach((btn) => {
      btn.disabled = false;
      btn.style.opacity = "1";
    });
  }

  resetBtn.addEventListener("click", resetPuzzle);

  nextBtn.addEventListener("click", () => {
    currentGameIndex++;
    loadNextGame();
  });
}

// ================================
// renderAudioQuiz
// ================================
function renderAudioQuiz(data) {
  let selectedAnswer = null;
  let quizScoreAdded = false;
  let localScore = 1;

  const section = document.createElement("section");
  section.className = "letter-quiz audio-quiz-section";

  section.innerHTML = `
    <h2>🔊 Écoute et choisis</h2>
    <p>${data.instruction}</p>
    
    <button class="big-audio-btn">
      <span class="icon">🔊</span>
      <span class="text">Écouter le mot</span>
    </button>

    <div class="answers"></div>
    <p class="quiz-feedback"></p>
    
    <div class="actions">
      <button class="validate-btn" disabled>✅ Valider</button>
      <button class="next-btn" style="display:none">➡️ Suivant</button>
    </div>
  `;

  container.appendChild(section);

  const audioBtn = section.querySelector(".big-audio-btn");
  const answersEl = section.querySelector(".answers");
  const feedback = section.querySelector(".quiz-feedback");
  const validateBtn = section.querySelector(".validate-btn");
  const nextBtn = section.querySelector(".next-btn");

  // Fonction pour lire le son du mot
  audioBtn.addEventListener("click", () => {
    // On utilise directement data.audioPath qui contiendra le chemin complet
    const audio = new Audio(data.audioPath);
    audio
      .play()
      .catch((err) =>
        console.error("Fichier audio introuvable:", data.audioPath),
      );

    // Animation du bouton
    audioBtn.classList.add("playing");
    setTimeout(() => audioBtn.classList.remove("playing"), 500);
  });

  // Créer les options de réponse
  data.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn";
    btn.textContent = opt.text;

    btn.addEventListener("click", () => {
      if (quizScoreAdded) return;
      playSound("click");
      document
        .querySelectorAll(".quiz-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedAnswer = opt;
      validateBtn.disabled = false;
    });

    answersEl.appendChild(btn);
  });

  validateBtn.addEventListener("click", () => {
    if (!selectedAnswer) return;
    const activeBtn = section.querySelector(".quiz-btn.active");

    if (selectedAnswer.correct) {
      playSound("success");
      activeBtn.classList.add("correct");
      feedback.textContent = "✨ Bravo ! C'est exactement ça.";
      feedback.style.color = "green";

      if (!quizScoreAdded) {
        totalScore += localScore;
        quizScoreAdded = true;
      }
      validateBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
    } else {
      playSound("error");
      activeBtn.classList.add("wrong");
      localScore = Math.max(0, localScore - 0.25);
      feedback.textContent = "❌ Ce n'est pas ce mot, réécoute bien.";
      feedback.style.color = "red";
      // Optionnel : permettre de changer de choix après 1 seconde
      setTimeout(() => {
        activeBtn.classList.remove("active", "wrong");
        validateBtn.disabled = true;
        selectedAnswer = null;
      }, 1000);
    }
  });

  nextBtn.addEventListener("click", () => {
    currentGameIndex++;
    loadNextGame();
  });
}
// ================================
//  renderFormsQuiz
//=================================
function renderFormsQuiz(data) {
  let selectedAnswer = null;
  let quizScoreAdded = false;
  let localScore = 1;

  const section = document.createElement("section");
  section.className = "letter-quiz forms-quiz-section";

  section.innerHTML = `
    <h2>✍️ Les formes de la lettre</h2>
    <p>${data.instruction}</p>
    
    <div class="word-to-complete">${data.wordWithHole}</div>

    <div class="answers"></div>
    <p class="quiz-feedback"></p>
    
    <div class="actions">
      <button class="validate-btn" disabled>✅ Valider</button>
      <button class="next-btn" style="display:none">➡️ Suivant</button>
    </div>
  `;

  container.appendChild(section);

  const wordDisplay = section.querySelector(".word-to-complete");
  const answersEl = section.querySelector(".answers");
  const feedback = section.querySelector(".quiz-feedback");
  const validateBtn = section.querySelector(".validate-btn");
  const nextBtn = section.querySelector(".next-btn");

  data.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn form-option-btn";
    btn.textContent = opt.text;

    btn.addEventListener("click", () => {
      if (quizScoreAdded) return;
      playSound("click");
      document
        .querySelectorAll(".quiz-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedAnswer = opt;
      validateBtn.disabled = false;
    });

    answersEl.appendChild(btn);
  });

  validateBtn.addEventListener("click", () => {
    if (!selectedAnswer) return;
    const activeBtn = section.querySelector(".quiz-btn.active");

    if (selectedAnswer.correct) {
      playSound("success");
      activeBtn.classList.add("correct");

      // ✅  Remplace n'importe quelle suite de points par la réponse
      wordDisplay.textContent = data.wordWithHole.replace(
        /\.+/,
        selectedAnswer.text,
      );
      wordDisplay.style.color = "#22c55e";

      feedback.textContent = "✨ Excellent ! Tu as trouvé la bonne forme.";
      feedback.style.color = "green";

      if (!quizScoreAdded) {
        totalScore += localScore;
        quizScoreAdded = true;
      }
      validateBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
    } else {
      playSound("error");
      activeBtn.classList.add("wrong");
      localScore = Math.max(0, localScore - 0.25);
      feedback.textContent =
        "❌ Ce n'est pas la bonne forme, regarde bien sa place.";
      feedback.style.color = "red";
    }
  });

  nextBtn.addEventListener("click", () => {
    currentGameIndex++;
    loadNextGame();
  });
}

// ================================
// la faonction de progression
//=================================
function updateProgressBar() {
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const progressPercentage = document.getElementById("progress-percentage");

  // Calcul du progrès (currentGameIndex + 1 car l'index commence à 0)
  const totalGames = games.length;
  const currentStep = currentGameIndex + 1;

  // Si on a fini tous les jeux, on met à 100%
  const percent = (currentGameIndex / totalGames) * 100;
  const displayPercent = Math.round((currentGameIndex / totalGames) * 100);

  progressFill.style.width = `${displayPercent}%`;

  if (currentGameIndex < totalGames) {
    progressText.textContent = `Exercice ${currentStep} / ${totalGames}`;
    progressPercentage.textContent = `${displayPercent}%`;
  } else {
    progressText.textContent = "Leçon terminée !";
    progressPercentage.textContent = "100%";
  }
}
// ================================
// 🚀 DÉMARRAGE
// ================================
document.addEventListener("DOMContentLoaded", () => {
  loadNextGame();
});
