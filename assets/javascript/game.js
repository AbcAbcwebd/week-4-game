// This object constructor defines the format by which character information will be organized.
function character(name, healthPoints, attackPower, counterAttackPower, imageSource) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.imageSource = imageSource;
}

// The characters 
// I had difficulty coming up with numbers met the qualifications of the game. IE-- Weakest character could always win, strongest could always lose, etc. After spending many hours trying to develop and automated way to seed numbers to the game, I instead borrowed numbers from a similar game I found online. I figured it was more important to move on to the actual coding. 
var mace = new character("Mace Windu", 160, 10, 20, "mace.png");
var boba = new character("Boba Fett", 130, 15, 30, "boba.jpg");
var anakin = new character("Anakin", 180, 7, 15, "anakin.jpg");
var yoda = new character("Yoda", 180, 15, 25, "yoda.jpg");
var R2D2 = new character("R2D2", 110, 12, 20, "r2d2.png");
var jarJar = new character("Jar Jar", 100, 12, 24, "jar-jar.jpg");

// Other global variables
var characterArray = [mace, boba, anakin, yoda, R2D2, jarJar];



// This function creates character tiles to add to the various sections. 
function generateTile(character_name) {
	characterTile = '<div class="character-tile"><p>' + this.name + '</p><br><img src="assets/images/' + this.imageSource + '" class="character-image"><p>' + healthPoints + '</p></div>';
	return characterTile;
}

function initiatePossibleChars(){
	for (var i = 0; i < characterArray.length; i++){
		document.getElementById("possible-characters").innerHTML = "<p>Hello</p>"//generateTile(characterArray[i]);
	};
}