const pnjBleu = document.getElementById('pnj_bleu')
const compteurBleu = document.getElementById('compteur_bleu')
let valeurCompteurBleu = 0
let etat = "rouge"
const dateBleu = document.getElementById('date_bleu');
const boutonDate = document.getElementById('bouton_date');
let maDate = new Date();

pnjBleu.onclick = function() {
    const fait = confirm("Avez-vous fait cette action aujourd'hui ?");
    if (fait) {
        valeurCompteurBleu = valeurCompteurBleu + 1
        compteurBleu.style.backgroundColor="green"
        compteurBleu.textContent = valeurCompteurBleu
        etat = "vert"
    }
  }

mettreAJourDate();

boutonDate.onclick = function(){
    maDate.setDate(maDate.getDate() + 1);
    mettreAJourDate();
    if (etat === "vert") {
    etat = "orange";
    compteurBleu.style.backgroundColor = "orange";
    } else if (etat === "orange") {
    etat = "rouge";
    compteurBleu.style.backgroundColor = "red"; 
    valeurCompteurBleu = 0;
    compteurBleu.textContent = valeurCompteurBleu
    }
}

function mettreAJourDate() {
    const jour = String(maDate.getDate()).padStart(2, '0');
    const mois = String(maDate.getMonth() + 1).padStart(2, '0');  
    dateBleu.textContent = `${jour}/${mois}`;
}
