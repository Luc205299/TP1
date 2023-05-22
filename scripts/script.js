console.log("Je suis la console !");

function bienvenu() {
	alert("Bonjour !");
	setTimeout(bienvenu,100);
	setInterval(bienvenu,500); 	
}

function generer(){
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
		var randomNumber = Math.floor(Math.random() * listecar.length) ;
		password += listecar.substring(randomNumber, randomNumber+1);
	}

	console.log(password);
	
	var newLine =  document.createElement("tr");
	var col1 =  document.createElement("td");
	var col2 =  document.createElement("td");
	var col3 =  document.createElement("td");
	var col4 =  document.createElement("td");
	var col5 =  document.createElement("td");
	col1.textContent = monformulaire.elements["nombrecar"].value;
	col2.textContent = monformulaire.elements["datevalidite"].value;
	col3.textContent = monformulaire.elements["categorie"].value;
	col4.textContent = monformulaire.elements["site"].value;
	col5.textContent = password;	
	newLine.append(col1,col2,col3,col4,col5);
	var tableau = document.getElementById("repertoire");
	tableau.appendChild(newLine);	
}
