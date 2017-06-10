// This object constructor defines the format by which character information will be organized.
function character(name, healthPoints, attackPower, counterAttackPower, imageSource) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.imageSource = imageSource;
}

// I had difficulty coming up with numbers met the qualifications of the game. IE-- Weakest character could always win, strongest could always lose, etc. After spending many hours trying to develop and automated way to seed numbers to the game, I instead borrowed numbers from a similar game I found online. I figured it was more important to move on to the actual coding. 
var mace = new character("Mace Windu", 160, 10, 20, "mace.png");
var boba = new character("Boba Fett", 130, 15, 30, "boba.jpg");
var anakin = new character("Anakin", 180, 7, 15, "anakin.jpg");
var yoda = new character("Yoda", 180, 15, 25, "yoda.jpg");
var R2D2 = new character("R2D2", 110, 12, 20, "r2d2.png");
var jarJar = new character("Jar Jar", 100, 12, 24, "jar-jar.jpg");

function generateImagePath(imageName){
	var imagePath =  "assets/images/" + imageName;
	return imagePath;
}

// This is random code I pasted in so my project would look less empty.
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

	//	TwoHealth = Math.floor((Math.random() * 100) + 1);
	//	TwoBaseAt = Math.floor((Math.random() * 10) + 1);
	//	TwoCountAt = Math.floor((Math.random() * 30) + 1);

	//	ThreeHealth = Math.floor((Math.random() * 125) + 1);
	//	ThreeBaseAt = Math.floor((Math.random() * 10) + 1);
	//	ThreeCountAt = Math.floor((Math.random() * 30) + 1);

	//	FourHealth = Math.floor((Math.random() * 125) + 1);
	//	FourBaseAt = Math.floor((Math.random() * 20) + 1);
	//	FourCountAt = Math.floor((Math.random() * 30) + 1);