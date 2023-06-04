console.log("Je suis la console !");
setInterval(incrementerDuree, 1000);

function bienvenu() {
  alert("Bonjour !");
  setTimeout(bienvenu, 100);
  setInterval(bienvenu, 500);
}

function supprimer() {
	if (confirm("Confirmez-vous la suppression de tous les mots de passe générés ?")) {
	  var tableau = document.getElementById("repertoire");
	  var nombreLignes = tableau.rows.length;
  
	  for (var i = nombreLignes - 1; i > 0; i--) {
		tableau.removeChild(tableau.lastChild);
	  }
	}
  }

function generer() {
  var monformulaire = document.forms.ajoutPWD;

  console.log(monformulaire.nombrecar.value);

  var minuscule = "abcdefghijklmnopqrstuvwxyz";
  var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var chiffre = "0123456789";
  var carspecial = "%!&*^()#$:";
  var password = "";
  var listecar = "";

  if (monformulaire.elements["minuscule"].checked) {
    listecar += minuscule;
  }

  if (monformulaire.elements["majuscule"].checked) {
    listecar += majuscule;
  }

  if (monformulaire.elements["chiffre"].checked) {
    listecar += chiffre;
  }

  if (monformulaire.elements["symbole"].checked) {
    listecar += carspecial;
  }

  //console.log(listecar);

  for (var i = 1; i <= monformulaire.elements["nombrecar"].value; i++) {
    var randomNumber = Math.floor(Math.random() * listecar.length);
    password += listecar.substring(randomNumber, randomNumber + 1);
  }

  console.log(password);

  var newLine = document.createElement("tr");
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  var col4 = document.createElement("td");
  var col5 = document.createElement("td");
  var duree = document.createElement("td");
  duree.classList.add("duree");
  duree.textContent = "0";
  col1.textContent = monformulaire.elements["nombrecar"].value;
  col2.textContent = monformulaire.elements["datevalidite"].value;
  col3.textContent = monformulaire.elements["categorie"].value;
  col4.textContent = monformulaire.elements["site"].value;
  col5.textContent = password;
  newLine.append(col1, col2, col3, col4, col5, duree);
  var tableau = document.getElementById("repertoire");
  tableau.appendChild(newLine);
  document.ajoutPWD.reset();

  const pwd = col5.textContent;
  const nvPWD = PwdSaisi(pwd);

  // Ajouter le nouvel objet à la collection mesPWDs
  pushPWD(nvPWD);

  const table = document.getElementById('repertoire');
  mesPWDs.forEach(pwd => {
//     const row = table.insertRow(-1);
//     const cell1 = row.insertCell(0);
//     const cell2 = row.insertCell(1);
//     const cell3 = row.insertCell(2);
//     const cell4 = row.insertCell(3);
//     const cell5 = row.insertCell(4);
//     const cell6 = row.insertCell(5);

//     cell1.innerHTML = pwd.nombrecar;
//     cell2.innerHTML = pwd.dateCreation;
//     cell3.innerHTML = pwd.categorie;
//     cell4.innerHTML = pwd.site;
//     cell5.innerHTML = pwd.mdp;
//     cell6.innerHTML = pwd.getDuree();

    pwd.incrementerDuree();
  });

  // Afficher la collection mesPWDs dans la console
  console.log(mesPWDs);
}


function incrementerDuree() {
	let durees = document.getElementsByClassName("duree");
  
	if (durees.length !== 0) {
	  Array.prototype.forEach.call(durees, function (dureeElement) {
		let valeur = parseInt(dureeElement.textContent);
		valeur += 1;
  
		if (valeur <= 60) {
		  dureeElement.textContent = valeur;
		} else {
		  dureeElement.textContent = "Expiré !";
		  dureeElement.style.color = "gray";
		}
	  });
	}
  }
  
  document.addEventListener("DOMContentLoaded", function () {
	document.querySelector('#addPWD').addEventListener('submit', function (e) {
	  e.preventDefault();
	  var critere1 = document.querySelector('#minuscule').checked;
	  var critere2 = document.querySelector('#majuscule').checked;
	  var critere3 = document.querySelector('#chiffre').checked;
	  var critere4 = document.querySelector('#symbole').checked;
  
	  if (critere1 || critere2 || critere3|| critere4) {
		// generer();
	  } else {
		window.alert("Veuillez choisir au moins un critère !");
	  }
	});
  });
  
  
  
  function PwdSaisi(pwd) {
	const nombre = document.getElementById("nombrecar").value;
	const date = document.getElementById("datevalidite").value;
	const categorie = document.getElementById("catégorie").value;
	const site = document.getElementById("site").value;
	const mdp = pwd;
  
	const NewPwd = {
	  nombre: nombre,
	  date: date,
	  categorie: categorie,
	  site: site,
	  mdp: mdp
	};
	const NvPWD = new PWD(NewPwd.nombre, NewPwd.date, NewPwd.categorie, NewPwd.site, NewPwd.mdp);
  
	return NvPWD;
  }
  
  class PWD {
	constructor(nombrecar, dateCreation, categorie, site, mdp) {
	  this.nombrecarac = nombrecar;
	  this.dateCreation = dateCreation;
	  this.categorie = categorie;
	  this.site = site;
	  this.mdp = mdp;
	  this.duree = 0;
	}
  
	printPWD() {
	  console.log("Nombre de caractères : ", this.nombrecarac);
	  console.log("Date de création : ", this.dateCreation);
	  console.log("Catégorie d'utilisation : ", this.categorie);
	  console.log("Site ou application : ", this.site);
	  console.log("Mot de passe généré : ", this.mdp);
	}
  
	getDuree() {
	  return this.duree;
	}
  
	incrementerDuree() {
	  this.duree++;
	}
  }
  
  const mesPWDs = [];
  
  function pushPWD(pwd) {
	mesPWDs.push(pwd);
	console.log(mesPWDs);
  }
  
  
  
  
  


	

  
  
  
  
  
