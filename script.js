function init() {
  console.log("Chargement terminé !");

  //   ========================
  // Traitement du formulaire
  //   ========================
  const form = document.querySelector("#formAjoutApprenant");
  form.addEventListener("submit", ajouterUnApprenant);

  const formerGroupes = document.querySelector("#formFormerGroupes");
  formerGroupes.addEventListener("submit", formerLesGroupes);
} //fin init()

// ========
// Plugin
// ========

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

let compteur = 1;
const ajouterUnApprenant = function (even) {
  let nomInput = document.getElementById("nom");
  let prenomInput = document.getElementById("prenom");
  const apprenant = document.querySelector("#test");

  // empêcher l'envoi du formulaire
  even.preventDefault();

  // Récupération de la saisie
  const nom = nomInput.value;
  const prenom = prenomInput.value;

  // Définition de variables d'erreur avec une valeur par défaut
  let nomErr = true;
  let prenomErr = true;

  // Validation du nom
  if (nom == "") {
    printError("nomErr", "Veuillez saisir un nom");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(nom) === false) {
      printError("nomErr", "Veuillez saisir un nom valide");
    } else {
      printError("nomErr", "");
      nomErr = false;
    }
  }

  // Validation du prenom
  if (prenom == "") {
    printError("prenomErr", "Veuillez saisir un prenom");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(prenom) === false) {
      printError("prenomErr", "Veuillez saisir un prenom valide");
    } else {
      printError("prenomErr", "");
      prenomErr = false;
    }
  }

  // Empêcher l'envoi du formulaire en cas d'erreur
  if ((nomErr || prenomErr) == true) {
    return false;
  }

  let row = document.createElement("tr");

  let th = document.createElement("th");
  th.scope = "row";
  th.innerHTML = compteur;
  let td1 = document.createElement("td");
  // Mise en place de la gestion des doublon à fire ici
  td1.innerHTML = nom;
  let td2 = td1.cloneNode();
  td2.innerHTML = prenom;

  row.appendChild(th);
  row.appendChild(td1);
  row.appendChild(td2);

  apprenant.appendChild(row);
  compteur++;
};

const formerLesGroupes = function (even) {
  let nbGroupesInput = document.getElementById("nbGroupes");
  const apprenants = document.querySelectorAll("#test tr");

  // empêcher l'envoi du formulaire
  even.preventDefault();

  let listGroupes = [];
  for (const apprenant of apprenants) {
    listGroupes.push(
      `${apprenant.childNodes[1].innerHTML} ${apprenant.childNodes[2].innerHTML}`
    );
  }

  // Récupération de la saisie
  const nbGroupes = nbGroupesInput.value;

  // Définition de variables d'erreur avec une valeur par défaut
  let nombreGroupesErr = true;

  // Validation du nombre saisie
  if (nbGroupes == "") {
    printError("nombreGroupesErr", "Veuillez saisir un nombre");
  } else if (nbGroupes < 2 || nbGroupes > 8) {
    printError("nombreGroupesErr", "Veuillez saisir un nombre entre 2 et 8");
  } else {
    var regex = /^\d+$/;
    if (regex.test(nbGroupes) === false) {
      printError("nombreGroupesErr", "Veuillez saisir un nombre valide");
    } else {
      printError("nombreGroupesErr", "");
      nombreGroupesErr = false;
    }
  }

  // Empêcher l'envoi du formulaire en cas d'erreur
  if (nombreGroupesErr == true) {
    return false;
  }

  let mixterLesGroupes;
  if (listGroupes.length >= 2) {
    mixterLesGroupes = melangerUnTableau(listGroupes);
  }

  let fractionnerGroupes = spliceIntoChunks(mixterLesGroupes, nbGroupes);

  for (const equipe of fractionnerGroupes) {
    let table = document.createElement("table");
    table.className = `tableGroupe${makeid(3)}`;

    let thead = document.createElement("thead");
    table.appendChild(thead);
    let trThead = document.createElement("tr");
    let thThead = document.createElement("th");
    thThead.scope = "col";
    thThead.innerHTML = "#";
    let thThead2 = thThead.cloneNode();
    thThead2.scope = "col";
    thThead2.innerHTML = `Groupe ${makeid(3)}`;
    trThead.appendChild(thThead);
    trThead.appendChild(thThead2);
    thead.appendChild(trThead);

    let tbody = document.createElement("tbody");
    for (const apprenant of equipe) 
    {
      let trTbody = trThead.cloneNode();
      let thTbody = thThead.cloneNode();
      thTbody.scope = "row";
      let tdTbody = document.createElement("td");
      tdTbody.innerHTML = `${apprenant}`;
      trTbody.appendChild(thTbody);
      trTbody.appendChild(tdTbody);
      tbody.appendChild(trTbody);
      table.appendChild(tbody);
    }

    const listeGroupes = document.querySelector("#listeGroupes");
    // const firstTable = listeGroupes.firstChild;

    listeGroupes.appendChild(table);
    // listeGroupes.innerHTML = table;
    console.log(
      "🚀 ~ file: script.js:172 ~ formerLesGroupes ~ listeGroupes:",
      listeGroupes
    );
  }
};

const melangerUnTableau = function (array) {
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  return shuffledArray;
};

const spliceIntoChunks = function (shuffledArray, chunkSize) {
  const res = [];
  while (shuffledArray.length > 0) {
    const chunk = shuffledArray.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
};

const makeid = function (length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

window.addEventListener("load", init);
