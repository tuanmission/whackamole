//Tuan Luong-Original work
//Purpose of this project is to implement a simple whack a mole game. 
var game_var;

function dropmole() { //Loops through the current moles and if a mole appears, drops it 
    for (var i = 1; i < 10; i++) {
        var ele = i.toString();
        var currentmole = document.getElementById(ele);
        if (currentmole.className === "mole") { //Drops the mole by changing the class
            currentmole.className = "mole_hidden";
        }
    }
}

function rungame() {
    var random = Math.floor(Math.random() * 8) + 1;
    random = random.toString(); //Selects a random number to select a random mole to pop
    dropmole(); //Drops existing moles

    var nextmole = document.getElementById(random); //Selects next mole and makes it appear
    nextmole.className = "mole";
}






function startgame() {
    game_var = setInterval(rungame, 700); //Starts the game and sets an interval to pop up moles
}

function stopgame() { //Stops the game, clears interval and resets the score. 
    document.getElementById("game_score").innerHTML = 0;
    clearInterval(game_var);
    dropmole();
}

function addscore() {

}


function checkismole(mole_div) { //Method to check if the player clicked a mole to increase score
    var mole = mole_div.children[0];
    var gamescore = document.getElementById("game_score").innerHTML; //Gets current score
    gamescore = parseInt(gamescore);
    if (mole.className === "mole") { //If a mole is clicked increases the score
        gamescore = gamescore + 1;
    }
    document.getElementById("game_score").innerHTML = gamescore; //Sets game score in the html
}