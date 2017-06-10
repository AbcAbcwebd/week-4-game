// Functionality to dynamically generate health scores, base attack scores and counter attack scores based on the specifications of this game. 
// Generating these values dynamically will ensure that every game is slightly different. 
var number = 0;
for (
	var i = 0;
	// This checks to ensure value ratios that must be true in order for the game to work properly.
	number < 101;
	i++
	) {
	number = Math.floor((Math.random() * 150) + 50);
}
alert(number);

// This object constructor defines the format by which character information will be organized.
function character(name, healthPoints, attackPower, counterAttackPower, imageSource) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.imageSource = imageSource;
}

var jarJar = new character("Jar Jar", 50, 5, );
var myMother = new person("Sally", "Rally", 48, "green");