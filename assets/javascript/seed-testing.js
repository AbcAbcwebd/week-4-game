// This document is not currently being linked to in the html. 
// This is work-in-progress expeirimental code designed to dynamically generate health, base attack and counter attack. 
// Dynamically generating these numbers would make the game more interesting by making it slightly different every time. 
// Unforunately, in it's current form, it overloads the computer. 
// My laptop begins to overheat before proper numbers are generated and the loop breaks. 

// Main expeirimental functionality
// Functionality to dynamically generate health scores, base attack scores and counter attack scores based on the specifications of this game. 
// Generating these values dynamically will ensure that every game is slightly different. 

// This loop runs until the if statement gets the conditions it needs and breaks the loop.
while ( true ) {
	// This section generates a lot of random numbers as possible values for the various characters. Organizationally the idea is lower characters are traditionally less powerful Star Wars characters. IE-- Jar Jar shouldn't be stroger than Yoda. 
//	OneHealth = Math.floor((Math.random() * 100) + 1);
//	OneBaseAt = Math.floor((Math.random() * 20) + 1);
//	OneCountAt = Math.floor((Math.random() * 30) + 1);

//	TwoHealth = Math.floor((Math.random() * 100) + 1);
//	TwoBaseAt = Math.floor((Math.random() * 10) + 1);
//	TwoCountAt = Math.floor((Math.random() * 30) + 1);

//	ThreeHealth = Math.floor((Math.random() * 125) + 1);
//	ThreeBaseAt = Math.floor((Math.random() * 10) + 1);
//	ThreeCountAt = Math.floor((Math.random() * 30) + 1);

//	FourHealth = Math.floor((Math.random() * 125) + 1);
//	FourBaseAt = Math.floor((Math.random() * 20) + 1);
//	FourCountAt = Math.floor((Math.random() * 30) + 1);


	OneHealth = 100 //prompt("Jar Jar's health.");
	OneBaseAt = 8 //prompt("Jar Jar's base attack.");
	OneCountAt = 5 //prompt("Jar Jar's counter attack.");

	TwoHealth = 120 //prompt("Boba Fett's health.");
	TwoBaseAt = 8 //prompt("Boba Fett's base attack.");
	TwoCountAt = 5 //prompt("Boba Fett's counter attack.");

	ThreeHealth = 150 //prompt("Anakin's health.");
	ThreeBaseAt = 8 //prompt("Anakin's base attack.");
	ThreeCountAt = 20 //prompt("Anakin's counter attack.");

	FourHealth = 180 //prompt("Yoda's health.");
	FourBaseAt = 8 //prompt("Yoda's base attack.");
	FourCountAt = 25 //prompt("Yoda's count attack.");


	// This simulates game plays in order to test if the above values will work in the context of the game.
		var OneTestHealth = OneHealth;
		var OneTestStrength = OneBaseAt;
		var TwoTestHealth = TwoHealth;
		var ThreeTestHealth = ThreeHealth;
		var FourTestHealth = FourHealth;
		var oneDefeatTwo = false;
		var oneDefeatThree = false;
		var oneDefeatFour = false;
		var fourLoseThree = false;

		// This checks if character one can initially defeat character two.
		while ( OneTestHealth > 0 && TwoTestHealth > 0) {
			TwoTestHealth = TwoTestHealth - OneTestStrength;
			OneTestStrength = OneTestStrength + OneBaseAt;
			OneTestHealth = OneTestHealth - TwoCountAt;
		}

		if ( OneTestHealth > TwoTestHealth) {
			oneDefeatTwo = true;
		}

		// This checks if character one can go on to defeat character three.
		while ( OneTestHealth > 0 && ThreeTestHealth > 0) {
			ThreeTestHealth = ThreeTestHealth - OneTestStrength;
			OneTestStrength = OneTestStrength + OneBaseAt;
			OneTestHealth = OneTestHealth - ThreeCountAt;
		}

		if ( OneTestHealth > ThreeTestHealth) {
			oneDefeatThree = true;
		}

		// This checks if character one can go on to defeat character four.
		while ( OneTestHealth > 0 && FourTestHealth > 0) {
			FourTestHealth = FourTestHealth - OneTestStrength;
			OneTestStrength = OneTestStrength + OneBaseAt;
			OneTestHealth = OneTestHealth - FourCountAt;
		}

		if ( OneTestHealth > FourTestHealth) {
			oneDefeatFour = true;
		}

		// This checks if character four can initially lose to character three.
		ThreeTestHealth = ThreeHealth;
		FourTestHealth = FourHealth;
		FourTestStrength = FourBaseAt;

		while ( FourTestHealth > 0 && ThreeTestHealth > 0) {
			console.log("Four's strength: " + FourTestStrength);
			console.log("Four health: " + FourTestHealth);
			console.log("Three health: " + ThreeTestHealth);
			ThreeTestHealth = ThreeTestHealth - FourTestStrength;
			FourTestStrength = FourTestStrength + FourBaseAt;
			FourTestHealth = FourTestHealth - ThreeCountAt;
		}

		if ( FourTestHealth < ThreeTestHealth) {
			fourLoseThree = true;
			console.log("Four health: " + FourTestHealth);
			console.log("Three health: " + ThreeTestHealth);
		} else {
			console.log("Four health: " + FourTestHealth);
			console.log("Three health: " + ThreeTestHealth);
		}

	if (
		//This part checks to see if the numbers generated will work for the game. 

			//Characters one, two, three and four must be in order from weakest to strongest. 
			(
				OneHealth < TwoHealth &&
				OneBaseAt < TwoBaseAt &&
				OneCountAt < TwoCountAt &&

				TwoHealth < ThreeHealth &&
				TwoBaseAt < ThreeBaseAt &&
				TwoCountAt < ThreeCountAt &&

				ThreeHealth < FourHealth &&
				ThreeBaseAt < FourBaseAt &&
				ThreeCountAt < FourCountAt
			) && (

				//Weakest character must be able to win. 
				oneDefeatTwo === true &&
				oneDefeatThree === true &&
				oneDefeatFour === true &&
				fourLoseThree === true
			)
			

			//Strongest character must be able to lose.
		) {
		//Functionality that runs if above conditions are met.
			alert("Game conditions met.");
			var seedValues = [OneHealth, OneBaseAt, OneCountAt, TwoHealth, TwoBaseAt, TwoCountAt, ThreeHealth, ThreeBaseAt, ThreeCountAt, FourHealth, FourBaseAt, FourCountAt];
			console.log(seedValues);
			break;
	} else {
		alert("Those values don't work.");
		console.log(oneDefeatTwo);
		console.log(oneDefeatThree);
		console.log(oneDefeatFour);
		console.log(fourLoseThree);
		break;
	}
}



// This was a seperate, more limited seed testing attempt. 
var PossibleFourTestHealth = [140, 145, 150, 155, 160, 165, 170, 175, 180];
var PossibleThreeTestHealth = [130, 135, 140, 145, 150, 155, 160];
var PossibleFourBaseAt = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var FourTestStrength = FourBaseAt
var PossibleThreeCountAt = [3, 8, 13, 18, 23, 28];
var fourLoseThree = false;

for ( var i = 0; i < PossibleFourBaseAt.length; i++){

	var FourBaseAt = PossibleFourBaseAt[i];

	for ( var x = 0; x < PossibleFourTestHealth.length; x++){

		var FourTestHealth = PossibleFourTestHealth[x];

		for ( var y = 0; y < PossibleThreeTestHealth.length; y++){

			var ThreeTestHealth = PossibleThreeTestHealth[y];

				for ( var z = 0; z < PossibleThreeCountAt.length; z++){

				var ThreeCountAt = PossibleThreeCountAt[z];

				while ( FourTestHealth > 0 && ThreeTestHealth > 0) {
							ThreeTestHealth = ThreeTestHealth - FourTestStrength;
							FourTestStrength = FourTestStrength + FourBaseAt;
							FourTestHealth = FourTestHealth - ThreeCountAt;
				}

				if ( FourTestHealth < ThreeTestHealth) {
							fourLoseThree = true;
							console.log("Four test health: " + PossibleFourTestHealth[x] + " Four base attack: " + PossibleFourBaseAt[i] + " Three health: " + PossibleThreeTestHealth[y] + " Three Counter Attack: " + PossibleThreeCountAt[z]);
							break;
				} else {
					console.log("Combination doesn't work.")
				}

			} 

		}

	}

}