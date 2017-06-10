// Functionality to dynamically generate health scores, base attack scores and counter attack scores based on the specifications of this game. 
// Generating these values dynamically will ensure that every game is slightly different. 

// This loop runs until the if statement gets the conditions it needs and breaks the loop.
while ( true ) {
	// This section generates a lot of random numbers as possible values for the various characters. Organizationally the idea is lower characters are traditionally less powerful Star Wars characters. IE-- Jar Jar shouldn't be stroger than Yoda. 
	OneHealth = Math.floor((Math.random() * 100) + 1);
	OneBaseAt = Math.floor((Math.random() * 10) + 1);
	OneCountAt = Math.floor((Math.random() * 30) + 1);

	TwoHealth = Math.floor((Math.random() * 100) + 1);
	TwoBaseAt = Math.floor((Math.random() * 10) + 1);
	TwoCountAt = Math.floor((Math.random() * 30) + 1);

	ThreeHealth = Math.floor((Math.random() * 125) + 1);
	ThreeBaseAt = Math.floor((Math.random() * 10) + 1);
	ThreeCountAt = Math.floor((Math.random() * 30) + 1);

	FourHealth = Math.floor((Math.random() * 125) + 1);
	FourBaseAt = Math.floor((Math.random() * 10) + 1);
	FourCountAt = Math.floor((Math.random() * 30) + 1);

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
			FourTestHealth = FourTestHealth - OneTestStrength;
			OneTestStrength = OneTestStrength * 2;
			OneTestHealth = OneTestHealth - FourCountAt;
		}

		if ( OneTestHealth > FourTestHealth) {
			oneDefeatTwo = true;
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
			console.log();
			break;
	}
	var counterNumber = 0;
	counterNumber++;
	console.log(counterNumber);
	//if ( counterNumber = 9 ) {
	//	break;
	//}
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