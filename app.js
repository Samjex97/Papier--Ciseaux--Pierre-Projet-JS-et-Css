
    var nomeGiocatore = window.prompt("entrez votre nom"); 
    alert("Bienvenue sur papier ciseaux pierre");
    document.getElementById("titolo") .innerHTML = "Bonjour, " + nomeGiocatore;
   
    var sceltaUtente;
    var Scelta =["Papier", "Ciseaux", "Pierre"];
    

    function CliccatoCarta() { 
        sceltaUtente = "Papier";
        alert("Vous avez choisi " + sceltaUtente);
    };
    function CliccatoForbice() { 
         sceltaUtente = "Ciseaux";
        alert("Vous avez choisi " + sceltaUtente);
        };
    function CliccatoSasso() { 
         sceltaUtente = "Pierre";
        alert("Vous avez choisi " + sceltaUtente); 
    };
    function ConfermaScelta() {

        var RandomArray = Math.floor(Math.random() * Scelta.length);
        var sceltaComputer = Scelta[RandomArray];
    
    
        if (sceltaUtente == "Papier") {
            console.log("L'ordinateur a choisi " + sceltaComputer);
            alert("L'ordinateur a choisi " + sceltaComputer);
        } else if (sceltaUtente == "Ciseaux") {
            console.log("L'ordinateur a choisi " + sceltaComputer);
            alert("L'ordinateur a choisi " + sceltaComputer);
        } else if (sceltaUtente == "Pierre") {
            console.log("L'ordinateur a choisi " + sceltaComputer);
            alert("L'ordinateur a choisi " + sceltaComputer);
        } else {
            console.log("Devi prima fare una scelta!");
        }
    };





