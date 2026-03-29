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

  // 2. Gérer l'affichage des écrans
  ecranAccueil.style.display = "none";
  ecranFin.style.display = "none";
  zoneJeu.style.display = "block";
  zoneResultat.textContent = "";

  // 3. Démarrer la logique
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

  document.getElementById("nombre1").textContent = n1;
  document.getElementById("nombre2").textContent = n2;

  genererChoix();
}

function genererChoix() {
  let choix = [reponseCorrecte];
  while (choix.length < 4) {
    let faux = reponseCorrecte + (Math.floor(Math.random() * 11) - 5);
    if (!choix.includes(faux) && faux > 0) choix.push(faux);
  }
  choix.sort(() => Math.random() - 0.5);

  let boutons = document.querySelectorAll(".btn-reponse");
  boutons.forEach((btn, index) => {
    btn.textContent = choix[index];
    btn.onclick = function () {
      verifierQCM(this.textContent);
    };
  });
}

function verifierQCM(valeurBouton) {
  if (Number(valeurBouton) === reponseCorrecte) {
    score++;
    zoneResultat.textContent = "Bravo ! ✅";
    zoneResultat.style.color = "green";
  } else {
    zoneResultat.textContent = "Faux ! ❌";
    zoneResultat.style.color = "red";
  }

  questionNb++;
  if (questionNb >= 10) {
    finirJeu("Quiz terminé !");
  } else {
    genererCalcul();
  }
}

function finirJeu(message) {
  clearInterval(monChrono);
  zoneJeu.style.display = "none";
  ecranFin.style.display = "block";
  zoneResultat.innerHTML = `<h3>${message}</h3><p>Score final : ${score}/10</p>`;
  zoneResultat.style.color = "blue";
}

// --- 4. Ecouteurs d'événements (Le clic sur les boutons) ---

document.getElementById("btn-commencer").onclick = lancerLeJeu;
document.getElementById("btn-rejouer").onclick = lancerLeJeu;
