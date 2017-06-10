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
	if (
		//This part checks to see if the numbers generated will work for the game. 

		//Characters one and two must be weaker than characters three and four. 
		OneHealth < ThreeHealth &&
		OneHealth < FourHealth &&
		OneBaseAt < ThreeBaseAt &&
		OneBaseAt < FourBaseAt &&
		OneCountAt < ThreeCountAt &&
		OneCountAt < FourCountAt &&

		TwoHealth < ThreeHealth &&
		TwoHealth < FourHealth &&
		TwoBaseAt < ThreeBaseAt &&
		TwoBaseAt < FourBaseAt &&
		TwoCountAt < ThreeCountAt &&
		TwoCountAt < FourCountAt &&

		//Weaker character must be able to win. 

		//Strongest character must be able to lose.
		) {
		//Functionality that runs if above conditions are met.
		alert("Conditions met.");
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