var cases = document.querySelectorAll(".case");

i = 0;


function start(){

	cases.forEach(el => el.querySelector(".trait1").style.visibility = "hidden");
	cases.forEach(el => el.querySelector(".trait2").style.visibility = "hidden");
	cases.forEach(el => el.querySelector(".cercle").style.visibility = "hidden");
	cases.forEach(el => el.querySelector(".disque").style.visibility = "hidden");

	function testO(){
		joueurO = prompt("Entrez le nom du joueur O:");
		if (joueurO == ""){
			alert("veuillez entrer un nom.");
			testO();
		} 
	}

	function testX(){
		joueurX = prompt("Entrez le nom du joueur X:");
		if (joueurX == ""){
			alert("veuillez entrer un nom.");
			testX();
		} 
	}

	testO();
	testX();
	
}

start()


function tour(){
	i++;
	var joueur = i % 2 === 0 ? "X" : "O" ;
	return joueur;
	
}

function jouer(){

	joueur = tour();

	if (joueur == 'X'){ //si le joueur est X

		var test1 = this.querySelector(".trait1")
		var test3 = this.querySelector(".disque")

		if (test1.style.visibility == "visible" || test3.style.visibility == "visible"){ // si la case est marquée alors recommence le tour
			i++;
		} else {
			var test1 = this.querySelector(".trait1")
			test1.style.visibility = "visible";
			test1.dataset.fill == "true"
			var test2 = this.querySelector(".trait2")
			test2.style.visibility = "visible";	
			forme = "croix";

		}
	} else if(joueur == "O"){ // si le joueur est O

		var test1 = this.querySelector(".trait1")
		var test3 = this.querySelector(".disque")

		if (test1.style.visibility == "visible" || test3.style.visibility == "visible"){ // si la case est marquée alors recommence le tour
			i++;
		} else {
			var test = this.querySelector(".disque")
			test.style.visibility = "visible";
			test.dataset.fill == "true"
			var test = this.querySelector(".cercle")
			test.style.visibility = "visible";
			forme = "anneau"
		}
	}

	isGagner()
}


function isGagner(){
	if (cases[0].querySelector(".trait1").style.visibility == "visible" && cases[1].querySelector(".trait1").style.visibility == "visible" && cases[2].querySelector(".trait1").style.visibility == "visible") { // les 3 du hauts pour croix et anneau
		console.log("visible haut ligne croix")
		alert("Victoire de " + joueurX + " sur ligne du haut !")
		start()
		return;
	} else if (cases[0].querySelector(".disque").style.visibility == "visible" && cases[1].querySelector(".disque").style.visibility == "visible" && cases[2].querySelector(".disque").style.visibility == "visible"){
		console.log("visible haut ligne anneau")
		alert("Victoire de " + joueurO + " sur ligne du haut !")
		start()
	} else if (cases[3].querySelector(".trait1").style.visibility == "visible" && cases[4].querySelector(".trait1").style.visibility == "visible" && cases[5].querySelector(".trait1").style.visibility == "visible"){ // les 3 du milieu pour croix et anneau{
		console.log("visible milieu ligne croix")
		alert("Victoire de " + joueurX + " sur ligne du milieu !")
		start()
	} else if (cases[3].querySelector(".disque").style.visibility == "visible" && cases[4].querySelector(".disque").style.visibility == "visible" && cases[5].querySelector(".disque").style.visibility == "visible") {
		console.log("visible milieu ligne anneau")
		alert("Victoire de " + joueurO + " sur ligne du milieu !")
		start()
	} else if (cases[6].querySelector(".trait1").style.visibility == "visible" && cases[7].querySelector(".trait1").style.visibility == "visible" && cases[8].querySelector(".trait1").style.visibility == "visible"){ //les 3 du bas pour croix/anneau
		console.log("visible bas ligne croix") 
		alert("Victoire de " + joueurX + " sur ligne du bas !")
		start()
	} else if (cases[6].querySelector(".disque").style.visibility == "visible" && cases[7].querySelector(".disque").style.visibility == "visible" && cases[8].querySelector(".disque").style.visibility == "visible"){ 
		console.log("visible bas ligne anneau")
		alert("Victoire de " + joueurO + " sur ligne du bas !")
		start() //LIGNES

	} else if (cases[0].querySelector(".trait1").style.visibility == "visible" && cases[3].querySelector(".trait1").style.visibility == "visible" && cases[6].querySelector(".trait1").style.visibility == "visible"){ // les 3 du hauts pour croix et anneau
		console.log("visible gauche colonne croix")
		alert("Victoire de " + joueurX + " sur colonne de gauche !")
		start()
	} else if (cases[0].querySelector(".disque").style.visibility == "visible" && cases[3].querySelector(".disque").style.visibility == "visible" && cases[6].querySelector(".disque").style.visibility == "visible"){
		console.log("visible gauche colonne anneau")
		alert("Victoire de " + joueurO + " sur colonne de gauche !")
		start()
	} else if (cases[1].querySelector(".trait1").style.visibility == "visible" && cases[4].querySelector(".trait1").style.visibility == "visible" && cases[7].querySelector(".trait1").style.visibility == "visible"){ // les 3 du milieu pour croix et anneau{
		console.log("visible milieu colonne croix")
		alert("Victoire de " + joueurX + " sur colonne du milieu !")
		start()
	} else if (cases[1].querySelector(".disque").style.visibility == "visible" && cases[4].querySelector(".disque").style.visibility == "visible" && cases[7].querySelector(".disque").style.visibility == "visible"){
		console.log("visible milieu colonne anneau")
		alert("Victoire de " + joueurO + " sur colonne du milieu !")
		start()
	} else if (cases[2].querySelector(".trait1").style.visibility == "visible" && cases[5].querySelector(".trait1").style.visibility == "visible" && cases[8].querySelector(".trait1").style.visibility == "visible"){
		console.log("visible droite colonne croix")
		alert("Victoire de " + joueurX + " sur colonne de droite !")
		start()
	} else if (cases[2].querySelector(".disque").style.visibility == "visible" && cases[5].querySelector(".disque").style.visibility == "visible" && cases[8].querySelector(".disque").style.visibility == "visible"){
		console.log("visible droite colonne anneau")
		alert("Victoire de " + joueurXO + " sur colonne de droite !")
		start() //COLONNES

	}  else if (cases[0].querySelector(".trait1").style.visibility == "visible" && cases[4].querySelector(".trait1").style.visibility == "visible" && cases[8].querySelector(".trait1").style.visibility == "visible"){ 
		console.log("visible diagonale gauche croix")
		alert("Victoire de " + joueurX + " sur diagonale gauche !")
		start()
	} else if (cases[0].querySelector(".disque").style.visibility == "visible" && cases[4].querySelector(".disque").style.visibility == "visible" && cases[8].querySelector(".disque").style.visibility == "visible"){
		console.log("visible diagonale gauche anneau")
		alert("Victoire de " + joueurO + " sur diagonale gauche !")
		start()
	} else if (cases[2].querySelector(".trait1").style.visibility == "visible" && cases[4].querySelector(".trait1").style.visibility == "visible" && cases[6].querySelector(".trait1").style.visibility == "visible"){ 
		console.log("visible diagonale droite croix")
		alert("Victoire de " + joueurX + " sur diagonale droite !")
		start()
	} else if (cases[2].querySelector(".disque").style.visibility == "visible" && cases[4].querySelector(".disque").style.visibility == "visible" && cases[6].querySelector(".disque").style.visibility == "visible"){
		console.log("visible diagonale droite anneau") //DIAGONALES
		alert("Victoire de " + joueurO + " sur diagonale droite !")
		start()
	} else {
		console.log("pas visible")
	}
		
}

cases.forEach(el => el.addEventListener("click", jouer))


