// I worked by myself on this challenge

// Your mission description: Storm the enemy castle and rescue the princess!
// As the hero, you must reach the enemy castle, storm the gates, kill the hostages, and rescue the princess!


// Pseudocode
// Move right to the enemy castle
// Break down the enemy gates
// Check the 4 possible targets in the castle
// Kill enemy guards until princess is found
// Tell the last target (princess) to follow you
// Move left out of the castle

// Initial Code

var Hero = new function() {

	this.moveRight = function() {
		this.position.x += 20;
	}

	this.moveLeft = function() {
		this.position.x -= 20;
	}

	this.breakGate = function() {
		// Not sure how to code the changing of a property of another object here?
		gate.intact = false;
	}

	this.checkEnemy = function() {
		if ( getEnemy() == true)
			return true;
		else
			return false;
	}
	this.attack = function() {
		say("Die!");
		enemy.life = false;
	}
	this.rescue = function() {
		say("Follow me, princess!");
	}

}

mario = new Hero();

mario.moveRight();
mario.breakGate();
while (mario.checkEnemy) {
	mario.attack();
}
mario.rescue();
mario.moveLeft();

// Refactored Code

// Not sure how to refactor the above code, it is about as DRY as I know how to get it.

// Reflection
/* 
	Being an open-ended challenge, it was tricky for me to figure out how much time and effort I wanted to put into this project.  I wanted a bit of a challenge, but I didn't want to set so high a bar that I wouldn't be able to complete it, or if I did, do it completely wrong.  I had to research and check how to write functions in Javascript and figure out how the syntax and conventions differed from Ruby (still a work in progress).  I had some fun in being imaginative.  I would like to have more practice with Javascript to be able to implement more methods in an object.
*/