let maDate = new Date();
const date = document.getElementById('date');
mettreAJourDate();

date.onclick = function(){
    maDate.setDate(maDate.getDate() + 1);
    mettreAJourDate();
    if (etats1 === "vert") {
    etats1 = "jaune";
    compteurs1.style.color = "rgb(229, 195, 4)"
    } else if (etats1 === "jaune"){
    etats1 = "orange";
    compteurs1.style.color = "orange"
    } else if (etats1 === "orange") {
    etats1 = "rouge";
    compteurs1.style.color = "red"
    valeurCompteurs1 = 0;
    compteurs1.textContent = valeurCompteurs1
    }

    if (etats2a === "vert") {
    etats2a = "jaune";
    compteurs2a.style.color = "rgb(229, 195, 4)"
    } else if (etats2a === "jaune"){
    etats2a = "orange";
    compteurs2a.style.color = "orange"
    } else if (etats2a === "orange") {
    etats2a = "rouge";
    compteurs2a.style.color = "red"
    valeurCompteurs2a = 0;
    compteurs2a.textContent = valeurCompteurs2a
    }

    if (etats2b === "vert") {
    etats2b = "jaune";
    compteurs2b.style.color = "rgb(229, 195, 4)"
    } else if (etats2b === "jaune"){
    etats2b = "orange";
    compteurs2b.style.color = "orange"
    } else if (etats2b === "orange") {
    etats2b = "rouge";
    compteurs2b.style.color = "red"
    valeurCompteurs2b = 0;
    compteurs2b.textContent = valeurCompteurs2b
    }

    if (etats3 === "vert") {
    etats3 = "jaune";
    compteurs3.style.color = "rgb(229, 195, 4)"
    } else if (etats3 === "jaune"){
    etats3 = "orange";
    compteurs3.style.color = "orange"
    } else if (etats3 === "orange") {
    etats3 = "rouge";
    compteurs3.style.color = "red"
    valeurCompteurs3 = 0;
    compteurs3.textContent = valeurCompteurs3
    }

    if (etats4 === "vert") {
    etats4 = "jaune";
    compteurs4.style.color = "rgb(229, 195, 4)"
    } else if (etats4 === "jaune"){
    etats4 = "orange";
    compteurs4.style.color = "orange"
    } else if (etats4 === "orange") {
    etats4 = "rouge";
    compteurs4.style.color = "red"
    valeurCompteurs4 = 0;
    compteurs4.textContent = valeurCompteurs4
    }

    if (etats5 === "vert") {
    etats5 = "jaune";
    compteurs5.style.color = "rgb(229, 195, 4)"
    } else if (etats5 === "jaune"){
    etats5 = "orange";
    compteurs5.style.color = "orange"
    } else if (etats5 === "orange") {
    etats5 = "rouge";
    compteurs5.style.color = "red"
    valeurCompteurs5 = 0;
    compteurs5.textContent = valeurCompteurs5
    }

    if (etats6 === "vert") {
    etats6 = "jaune";
    compteurs6.style.color = "rgb(229, 195, 4)"
    } else if (etats6 === "jaune"){
    etats6 = "orange";
    compteurs6.style.color = "orange"
    } else if (etats6 === "orange") {
    etats6 = "rouge";
    compteurs6.style.color = "red"
    valeurCompteurs6 = 0;
    compteurs6.textContent = valeurCompteurs6
    }

}

function mettreAJourDate() {
    const jour = String(maDate.getDate()).padStart(2, '0');
    const mois = String(maDate.getMonth() + 1).padStart(2, '0');  
    date.textContent = `${jour}/${mois}`;
}

// ______________________________________________________

const croix = document.getElementById('croix')
const fond = document.getElementById('fond')

croix.onclick = function() {
    fond.style.display="none"
    date.style.display="flex"
    croix.style.display="none"

    s1bis.style.display="none"
    pnjs1.style.display="none"
    compteurs1.style.display="flex"
    compteurs1.style.top="110px"
    compteurs1.style.left="170px"

    compteurs2a.style.top="298px"
    compteurs2b.style.top="285px"
    s2bis.style.display="none"
    pnjs2a.style.display="none"
    pnjs2b.style.display="none"
    compteurs2a.style.display="flex"
    compteurs2b.style.display="flex"

    s3bis.style.display="none"
    pnjs3.style.display="none"
    compteurs3.style.display="flex"
    compteurs3.style.fontSize = "100%"; 
    compteurs3.style.top="460px"
    compteurs3.style.left="150px"

    s4bis.style.display="none"
    pnjs4.style.display="none"
    compteurs4.style.fontSize = "100%"; 
    compteurs4.style.display="flex"
    compteurs4.style.top="410px"
    compteurs4.style.left="332px"

    s5bis.style.display="none"
    pnjs5.style.display="none"
    compteurs5.style.fontSize = "100%"; 
    compteurs5.style.display="flex"
    compteurs5.style.top="550px"
    compteurs5.style.left="2px"

    s6bis.style.display="none"
    pnjs6.style.display="none"
    compteurs6.style.fontSize = "100%"; 
    compteurs6.style.display="flex"
    compteurs6.style.top="550px"
    compteurs6.style.left="235px"
}

// ______________________________________________________

const s1 = document.getElementById('s1');
const s1bis = document.getElementById('s1bis');
const pnjs1 = document.getElementById('pnjs1')
const compteurs1 = document.getElementById('compteurs1')
let valeurCompteurs1 = 0
let etats1 = "rouge"

s1.onclick = function() {
    fond.style.display="flex"
    s1bis.style.display="flex"
    s1bis.style.top="263px"
    croix.style.display="flex"
    pnjs1.style.display="flex"
    date.style.display="none"
    compteurs1.style.top="366px"
    compteurs1.style.left="177px"
    compteurs2a.style.display="none"
    compteurs2b.style.display="none"
    compteurs4.style.display="none"
    compteurs3.style.display="none"
    compteurs5.style.display="none"
    compteurs6.style.display="none"
  }

pnjs1.onclick = function() {
    const fait1 = confirm("le magicien a utilisé sa machine moins d'1h30")
    if (fait1) {
        valeurCompteurs1 = valeurCompteurs1 + 1
        compteurs1.style.color = "lightgreen";
        compteurs1.textContent = valeurCompteurs1
        etats1 = "vert"
    }
}

// ______________________________________________________

const s2 = document.getElementById('s2');
const pnjs2a = document.getElementById('pnjs2a')
const pnjs2b = document.getElementById('pnjs2b')
const compteurs2a = document.getElementById('compteurs2a')
const compteurs2b = document.getElementById('compteurs2b')
let etats2a = "rouge"
let valeurCompteurs2a = 0
let etats2b = "rouge"
let valeurCompteurs2b = 0
let fait2b2 = 75


s2.onclick = function() {
    fond.style.display="flex"
    s2bis.style.display="flex"
    croix.style.display="flex"
    compteurs1.style.display="none"
    compteurs3.style.display="none"
    compteurs4.style.display="none"
    pnjs2a.style.display="flex"
    pnjs2b.style.display="flex"
    date.style.display="none"
    compteurs2a.style.top="378px"
    compteurs2b.style.top="365px"
    compteurs5.style.display="none"
    compteurs6.style.display="none"
  }

pnjs2a.onclick = function() {
    const fait2a = confirm("les soldats se sont entrainés")
    if (fait2a) {
        valeurCompteurs2a = valeurCompteurs2a + 1
        compteurs2a.style.color = "lightgreen";
        compteurs2a.textContent = valeurCompteurs2a
        etats2a = "vert"
    }
}

pnjs2b.onclick = function() {
    const fait2b1 = prompt("poids d'un soldat")
    let fait2b = parseFloat(fait2b1)
    if ((fait2b+0.2)<=fait2b2) {
        valeurCompteurs2b = valeurCompteurs2b + 1
        compteurs2b.style.color = "lightgreen";
        etats2b = "vert"
    }
    compteurs2b.textContent = String(valeurCompteurs2b) + " (" + String(fait2b) + ")"
    fait2b2 = fait2b
}

// __________________________________________________________

const s3 = document.getElementById('s3');
const s3bis = document.getElementById('s3bis');
const pnjs3 = document.getElementById('pnjs3')
const compteurs3 = document.getElementById('compteurs3')
let valeurCompteurs3 = 0
let etats3 = "rouge"

s3.onclick = function() {
    fond.style.display="flex"
    s3bis.style.display="flex"
    s3bis.style.top="175px"
    croix.style.display="flex"
    pnjs3.style.display="flex"
    date.style.display="none"
    compteurs3.style.top="400px"
    compteurs3.style.left="315px"
    compteurs3.style.fontSize = "200%";
    compteurs2a.style.display="none"
    compteurs2b.style.display="none"
    compteurs4.style.display="none"
    compteurs1.style.display="none"
    compteurs5.style.display="none"
    compteurs6.style.display="none"
  }

pnjs3.onclick = function() {
    const fait3 = confirm("Le diable n'a pas frappé ?")
    if (fait3) {
        valeurCompteurs3 = valeurCompteurs3 + 1
        compteurs3.style.color = "lightgreen";
        compteurs3.textContent = valeurCompteurs3
        etats3 = "vert"
    }
}

// __________________________________________________________

const s4 = document.getElementById('s4');
const s4bis = document.getElementById('s4bis');
const pnjs4 = document.getElementById('pnjs4')
const compteurs4 = document.getElementById('compteurs4')
let valeurCompteurs4 = 0
let etats4 = "rouge"

s4.onclick = function() {
    fond.style.display="flex"
    s4bis.style.display="flex"
    croix.style.display="flex"
    pnjs4.style.display="flex"
    date.style.display="none"
    compteurs4.style.top="317px"
    compteurs4.style.left="285px"
    compteurs4.style.fontSize = "200%";
    compteurs2a.style.display="none"
    compteurs2b.style.display="none"
    compteurs1.style.display="none"
    compteurs3.style.display="none"
    compteurs5.style.display="none"
    compteurs6.style.display="none"
  }

pnjs4.onclick = function() {
    const fait4 = confirm("Le barde a-t-il joué aujourdh'hui ?")
    if (fait4) {
        valeurCompteurs4 = valeurCompteurs4 + 1
        compteurs4.style.color = "lightgreen";
        compteurs4.textContent = valeurCompteurs4
        etats4 = "vert"
    }
}

// __________________________________________________________

const s5 = document.getElementById('s5');
const s5bis = document.getElementById('s5bis');
const pnjs5 = document.getElementById('pnjs5')
const compteurs5 = document.getElementById('compteurs5')
let valeurCompteurs5 = 0
let etats5 = "rouge"

s5.onclick = function() {
    fond.style.display="flex"
    s5bis.style.display="flex"
    croix.style.display="flex"
    pnjs5.style.display="flex"
    date.style.display="none"
    compteurs5.style.top="250px"
    compteurs5.style.left="5px"
    compteurs5.style.fontSize = "200%";
    compteurs2a.style.display="none"
    compteurs2b.style.display="none"
    compteurs1.style.display="none"
    compteurs3.style.display="none"
    compteurs4.style.display="none"
    compteurs6.style.display="none"
  }

pnjs5.onclick = function() {
    const fait5 = confirm("le sage c'est instruit?")
    if (fait5) {
        valeurCompteurs5 = valeurCompteurs5 + 1
        compteurs5.style.color = "lightgreen";
        compteurs5.textContent = valeurCompteurs5
        etats5 = "vert"
    }
}

// __________________________________________________________

const s6 = document.getElementById('s6');
const s6bis = document.getElementById('s6bis');
const pnjs6 = document.getElementById('pnjs6')
const compteurs6 = document.getElementById('compteurs6')
let valeurCompteurs6 = 0
let etats6 = "rouge"

s6.onclick = function() {
    fond.style.display="flex"
    s6bis.style.display="flex"
    croix.style.display="flex"
    pnjs6.style.display="flex"
    date.style.display="none"
    compteurs6.style.top="235px"
    compteurs6.style.left="95px"
    compteurs6.style.fontSize = "200%";
    compteurs2a.style.display="none"
    compteurs2b.style.display="none"
    compteurs1.style.display="none"
    compteurs3.style.display="none"
    compteurs4.style.display="none"
    compteurs5.style.display="none"
  }

pnjs6.onclick = function() {
    const fait6 = confirm("10 pigeons voyageurs sont partis")
    if (fait6) {
        valeurCompteurs6 = valeurCompteurs6 + 1
        compteurs6.style.color = "lightgreen";
        compteurs6.textContent = valeurCompteurs6
        etats6 = "vert"
    }
}


/* ===== SAUVEGARDE AUTOMATIQUE DU CHATEAU ===== */

const cleSauvegarde = "sauvegardeChateau";

function sauvegarderChateau() {
    const elements = {};

    document.querySelectorAll("[id]").forEach(element => {
        elements[element.id] = {
            texte: element.textContent,
            style: element.getAttribute("style"),
            src: element.getAttribute("src")
        };
    });

    const donnees = {
        date: maDate.getTime(),

        variables: {
            valeurCompteurs1, valeurCompteurs2a,
            valeurCompteurs2b, valeurCompteurs3,
            valeurCompteurs4, valeurCompteurs5,
            valeurCompteurs6,
            etats1, etats2a, etats2b,
            etats3, etats4, etats5, etats6,
            fait2b2
        },

        elements
    };

    localStorage.setItem(cleSauvegarde, JSON.stringify(donnees));
}

function chargerChateau() {
    const sauvegarde = localStorage.getItem(cleSauvegarde);
    if (!sauvegarde) return;

    try {
        const donnees = JSON.parse(sauvegarde);
        const v = donnees.variables;

        maDate = new Date(donnees.date);

        valeurCompteurs1 = v.valeurCompteurs1;
        valeurCompteurs2a = v.valeurCompteurs2a;
        valeurCompteurs2b = v.valeurCompteurs2b;
        valeurCompteurs3 = v.valeurCompteurs3;
        valeurCompteurs4 = v.valeurCompteurs4;
        valeurCompteurs5 = v.valeurCompteurs5;
        valeurCompteurs6 = v.valeurCompteurs6;

        etats1 = v.etats1;
        etats2a = v.etats2a;
        etats2b = v.etats2b;
        etats3 = v.etats3;
        etats4 = v.etats4;
        etats5 = v.etats5;
        etats6 = v.etats6;

        fait2b2 = v.fait2b2;

        for (const [id, etat] of Object.entries(donnees.elements)) {
            const element = document.getElementById(id);
            if (!element) continue;

            element.textContent = etat.texte;

            if (etat.style === null) {
                element.removeAttribute("style");
            } else {
                element.setAttribute("style", etat.style);
            }

            if (etat.src !== null) {
                element.setAttribute("src", etat.src);
            }
        }
    } catch (erreur) {
        console.error("Erreur de chargement de la sauvegarde :", erreur);
    }
}

chargerChateau();

document.addEventListener("click", sauvegarderChateau);

// window.removeEventListener("beforeunload", sauvegarderChateau);
// localStorage.removeItem("sauvegardeChateau");
// location.reload();