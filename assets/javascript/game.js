// Functionality to dynamically generate health scores, base attack scores and counter attack scores based on the specifications of this game. 
// Generating these values dynamically will ensure that every game is slightly different. 

// This loop runs until the if statement gets the conditions it needs and breaks the loop.
while ( true ) {
	// This section generates a lot of random numbers as possible values for the various characters. Organizationally the idea is lower characters are traditionally less powerful Star Wars characters. IE-- Jar Jar shouldn't be stroger than Yoda. 
//	OneHealth = Math.floor((Math.random() * 100) + 1);
//	OneBaseAt = Math.floor((Math.random() * 10) + 1);
//	OneCountAt = Math.floor((Math.random() * 30) + 1);

//	TwoHealth = Math.floor((Math.random() * 100) + 1);
//	TwoBaseAt = Math.floor((Math.random() * 10) + 1);
//	TwoCountAt = Math.floor((Math.random() * 30) + 1);

//	ThreeHealth = Math.floor((Math.random() * 125) + 1);
//	ThreeBaseAt = Math.floor((Math.random() * 10) + 1);
//	ThreeCountAt = Math.floor((Math.random() * 30) + 1);

//	FourHealth = Math.floor((Math.random() * 125) + 1);
//	FourBaseAt = Math.floor((Math.random() * 10) + 1);
//	FourCountAt = Math.floor((Math.random() * 30) + 1);


	OneHealth = 100 //prompt("Jar Jar's health.");
	OneBaseAt = 7 //prompt("Jar Jar's base attack.");
	OneCountAt = 5 //prompt("Jar Jar's counter attack.");

	TwoHealth = 120 //prompt("Boba Fett's health.");
	TwoBaseAt = 8 //prompt("Boba Fett's base attack.");
	TwoCountAt = 7 //prompt("Boba Fett's counter attack.");

	ThreeHealth = 150 //prompt("Anakin's health.");
	ThreeBaseAt = 9 //prompt("Anakin's base attack.");
	ThreeCountAt = 20 //prompt("Anakin's counter attack.");

	FourHealth = 180 //prompt("Yoda's health.");
	FourBaseAt = 10 //prompt("Yoda's base attack.");
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
			OneTestStrength = OneTestStrength * 2;
			OneTestHealth = OneTestHealth - TwoCountAt;
		}

		if ( OneTestHealth > TwoTestHealth) {
			oneDefeatTwo = true;
		}

		// This checks if character one can go on to defeat character three.
		while ( OneTestHealth > 0 && ThreeTestHealth > 0) {
			ThreeTestHealth = ThreeTestHealth - OneTestStrength;
			OneTestStrength = OneTestStrength * 2;
			OneTestHealth = OneTestHealth - ThreeCountAt;
		}

		if ( OneTestHealth > ThreeTestHealth) {
			oneDefeatThree = true;
		}

		// This checks if character one can go on to defeat character four.
		while ( OneTestHealth > 0 && FourTestHealth > 0) {
			alert(OneTestStrength);
			FourTestHealth = FourTestHealth - OneTestStrength;
			OneTestStrength = OneTestStrength * 2;
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
			ThreeTestHealth = ThreeTestHealth - FourTestStrength;
			FourTestStrength = FourTestStrength * 2;
			FourTestHealth = FourTestHealth - ThreeCountAt;
		}

		if ( FourTestHealth < ThreeTestHealth) {
			fourLoseThree = true;
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
alert("Not in for loop.");

// This object constructor defines the format by which character information will be organized.
function character(name, healthPoints, attackPower, counterAttackPower, imageSource) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.imageSource = imageSource;
}

var jarJar = new character("Jar Jar", 50, 5, );