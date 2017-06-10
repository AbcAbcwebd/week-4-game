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