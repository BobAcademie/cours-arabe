// --- 1. Variables Globales ---
let tempsRestant;
let score;
let questionNb;
let reponseCorrecte;
let monChrono;

// --- 2. Éléments du DOM ---
const zoneChrono = document.getElementById("affichage-chrono");
const zoneResultat = document.getElementById("resultat");
const zoneJeu = document.getElementById("zone-jeu");
const ecranAccueil = document.getElementById("ecran-accueil");
const ecranFin = document.getElementById("ecran-fin");

// --- 3. Fonctions de Contrôle ---

function lancerLeJeu() {
  // 1. Initialiser les variables
  tempsRestant = 60;
  score = 0;
  questionNb = 0;

  // 2. Gestion du scroll sécurisée
  const container = document.getElementById("game-container");
  if (container) {
    window.scrollTo({
      top: container.offsetTop - 20,
      behavior: "smooth",
    });
  }

  // 3. Affichage
  ecranAccueil.style.display = "none";
  ecranFin.style.display = "none";
  zoneJeu.style.display = "block";
  zoneResultat.textContent = "Bonne chance !";

  demarrerChrono();
  genererCalcul();
}

function demarrerChrono() {
  zoneChrono.textContent = tempsRestant;
  // On nettoie un ancien chrono au cas où
  clearInterval(monChrono);

  monChrono = setInterval(function () {
    tempsRestant--;
    zoneChrono.textContent = tempsRestant;

    if (tempsRestant <= 0) {
      finirJeu("Temps écoulé ! ⏱️");
    }
  }, 1000);
}

function genererCalcul() {
  let n1 = Math.floor(Math.random() * 10) + 1;
  let n2 = Math.floor(Math.random() * 10) + 1;
  reponseCorrecte = n1 * n2;

  const zoneQuestion = document.getElementById("zone-question");
  document.getElementById("actuelle").textContent = questionNb + 1;

  // 1. On retire la classe d'animation (au cas où elle y soit déjà)
  zoneQuestion.classList.remove("transition-active");

  // 2. On force le navigateur à "oublier" l'ancienne animation (astuce technique)
  void zoneQuestion.offsetWidth;

  // 3. On met à jour les chiffres
  document.getElementById("nombre1").textContent = n1;
  document.getElementById("nombre2").textContent = n2;

  // 4. On ajoute la classe pour lancer l'effet PowerPoint
  zoneQuestion.classList.add("transition-active");

  genererChoix();
}

function genererChoix() {
  let choix = [reponseCorrecte];
  while (choix.length < 4) {
    let faux = reponseCorrecte + (Math.floor(Math.random() * 11) - 5);
    if (!choix.includes(faux) && faux > 0) choix.push(faux);
  }
  choix.sort(() => Math.random() - 0.5);
  let boutonsZone = document.getElementById("zone-reponses");
  boutonsZone.classList.remove("transition-active");
  void boutonsZone.offsetWidth;
  boutonsZone.classList.add("transition-active");
  let boutons = document.querySelectorAll(".btn-reponse");
  boutons.forEach((btn, index) => {
    btn.textContent = choix[index];
    btn.onclick = function () {
      verifierQCM(this);
    };
  });
}

function verifierQCM(boutonClique) {
  // On récupère la valeur numérique du bouton
  const valeurBouton = Number(boutonClique.textContent);

  if (valeurBouton === reponseCorrecte) {
    score++;

    // 1. On ajoute la couleur verte
    boutonClique.classList.add("correct");

    // 2. On joue le son de succès sur CE bouton précis
    playSound("success");

    zoneResultat.textContent = "Bravo ! ✅";
  } else {
    // 1. On ajoute la couleur rouge
    boutonClique.classList.add("wrong");

    // 2. On joue le son d'erreur sur CE bouton
    playSound("error");

    zoneResultat.textContent = "Faux ! ❌";
  }

  // Petit délai pour laisser l'enfant voir la couleur avant de changer de calcul
  setTimeout(() => {
    // On retire les couleurs pour le prochain calcul
    boutonClique.classList.remove("correct", "wrong");

    questionNb++;
    if (questionNb >= 10) {
      finirJeu("Quiz terminé !");
    } else {
      genererCalcul();
    }
  }, 600); // 600ms de pause
}

function finirJeu(message) {
  clearInterval(monChrono);
  zoneJeu.style.display = "none";
  ecranFin.style.display = "block";

  let appreciation = "";
  let imageMedaille = ""; // Nouvelle variable pour l'image

  // LOGIQUE DES RÉCOMPENSES
  if (score === 10) {
    appreciation = "🏆 Incroyable ! Un sans-faute !";
    // Chemin vers ta médaille d'or
    imageMedaille =
      '<img src="../img/medaille-or.png" alt="Médaille d\'or" class="img-medaille">';
  } else if (score >= 7) {
    appreciation = "🌟 Très bien ! Tu es presque un expert !";
    // Chemin vers ta médaille d'argent
    imageMedaille =
      '<img src="../img/medaille-argent.png" alt="Médaille d\'argent" class="img-medaille">';
  } else if (score >= 5) {
    appreciation = "👍 Pas mal ! Continue de t'entraîner.";
    // Pas de médaille, on laisse vide
    imageMedaille = "";
  } else {
    appreciation = "💪 Ne lâche rien, réessaie encore !";
    imageMedaille = "";
  }

  // AFFICHAGE DE LA MÉDAILLE
  document.getElementById("zone-medaille").innerHTML = imageMedaille;

  // AFFICHAGE DU RECAP (Déjà en place)
  const zoneFin = document.getElementById("recap-final");
  zoneFin.innerHTML = `
    <h3>${message}</h3>
    <p class="appreciation">${appreciation}</p>
    <p class="final-score">Score final : <strong>${score}/10</strong></p>
  `;
}

// --- 4. Ecouteurs d'événements (Le clic sur les boutons) ---

document.getElementById("btn-commencer").onclick = lancerLeJeu;
document.getElementById("btn-rejouer").onclick = lancerLeJeu;

