
	// This object constructor defines the format by which character information will be organized.
	function character(name, healthPoints, attackPower, counterAttackPower, imageSource, ID) {
	    this.name = name;
	    this.healthPoints = healthPoints;
	    this.attackPower = attackPower;
	    this.counterAttackPower = counterAttackPower;
	    this.imageSource = imageSource;
	    this.ID = ID;
	}

	// The characters 
	// I had difficulty coming up with numbers met the qualifications of the game. IE-- Weakest character could always win, strongest could always lose, etc. After spending many hours trying to develop and automated way to seed numbers to the game, I instead borrowed numbers from a similar game I found online. I figured it was more important to move on to the actual coding. 
	var mace = new character("Mace Windu", 160, 10, 20, "mace.png", "mace");
	var boba = new character("Boba Fett", 130, 15, 30, "boba.jpg", "boba");
	var anakin = new character("Anakin", 180, 7, 15, "anakin.jpg", "anakin");
	var yoda = new character("Yoda", 180, 15, 25, "yoda.jpg", "yoda");
	var R2D2 = new character("R2D2", 110, 12, 20, "r2d2.png", "r2d2");
	var jarJar = new character("Jar Jar", 100, 12, 24, "jar-jar.jpg", "jar-jar");

	// Other global variables

		//This array pair allows the program to link a clicked button with the correct object. 
		var characterHTMLid = ["maceTile", "bobaTile", "anakinTile", "yodaTile", "r2d2Tile", "jar-jarTile"];
		var characterArray = [mace, boba, anakin, yoda, R2D2, jarJar];

		var yourCharacter = null;
		var yourCharacterIndex = -2;
		var defender = null;
		var defenderIndex = -2;




	// This function creates character tiles to add to the various sections. 
	function generateTile(character_name) {
		characterTile = '<div class="character-tile" id="' + character_name.ID + 'Tile"><p>' + character_name.name + '</p><br><img src="assets/images/' + character_name.imageSource + '" class="character-image"><p>' + character_name.healthPoints + '</p></div>';
		return characterTile;
	}

	// This functionality populates a div with tiles of all the characters. Characters are then deleted as necesary. 
	// The skip input allows the function to skip the ID of whatever character the player has selected for him or herself. 
	function initiatePossibleChars(parentElement, skip){
		for (var i = 0; i < characterArray.length; i++){
			if (i !== skip) {
				$(parentElement)
					.append(generateTile(characterArray[i]));
			};
		};
	};

	// This is what runs when a player selects a character to play as.
	function characterSelected(yourCharacter){
	  	$( "#possible-characters" ).empty();
	  	initiatePossibleChars('#attackable', yourCharacterIndex);
	};

	// This is what runs when a player selects a character to fight. 
	// Not used currently

$(document).ready(function() {


	// Click functionality for selecting your player
	//$(".character-tile").click(function(){
	//$('.character-tile').live('click', function(){
	//$('.character-tile').on('click', '.option', function() {
	$(document).delegate('.character-tile', 'click', function(){
		console.log(yourCharacter);
	  if (yourCharacter === null) {
		  	yourCharacter = this.id;
		  	yourCharacterIndex = characterHTMLid.indexOf(yourCharacter);
		  	characterSelected(yourCharacter);

		  	// Places your character's thumbnail in the correct DIV. 
			$("#your-character")
				.append(generateTile(characterArray[yourCharacterIndex]));
				console.log(yourCharacter);

	  // Once your character is selected, this lets you pick who to fight. 
	  } else if ( true ) {
	  		console.log("Defender functionality running.");
		//  	defender = this.id;
		//  	console.log(defender);
		//  	defenderIndex = characterHTMLid.indexOf(defender);
		//  	console.log(defenderIndex);

		  	//$( this ).remove();

		  	// Places your chosen enemies thumbnail in the correct div.
		//  	$("#defender")
		//		.append(generateTile(characterArray[defenderIndex]));
	  };
	});

});