// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Rescue Mission
 	/*
		Move Down x2
		Move Right
		Move Up x2
		Move Right x2
		Move Down
		Attack Enemy
 	*/

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the Mushroom

	/*
		Move Up
		Move Right
		Move Left
		Move Up
		Attack Enemy
	*/

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Drink Me

	/*
		Move Right
		Attack Enemy
		Move Right
		Move Down
		Move Up
		Move Right
		Attack Enemy
	*/

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt the Guards

	/*
		Move Right
		Bust down door
		Move Right
		Taunt
		Move Left x2
		Order Attack

		Move Right
		Order Follow
		Move Right x2
		Move Up
		Move Right
		Taunt
		Move Down
		Move Right
		Move Up
		Move Right
	*/

this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's A Trap!

	/*
		Move Down x2
		Taunt
		Move Up x2
	*/

this.moveDown();
this.moveDown();
this.say("Hey there");
this.moveUp();
this.moveUp();

//Break The Prison

	/*
		Return True for allied units
		Return False of enemy units
	*/

if(name === "William")
    return true;
if(name === "Krogg")
    return false;
if(name === "Marcus")
    return true;
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "Lucas")
    return true;  
if(name === "Robert")
    return true;
if(name === "Grul'thock")
    return false;
if(name === "Gordon")
    return true;

// Taunt

	/*
		Taunt x4
	*/

this.say("Hey!");
this.say("Come and get me!");
this.say("Over here ugly!");
this.say("Fight me!"); 

// Cowardly Taunt

	/*
		Move out to field
		Taunt
		Run back behind towers
	*/

this.moveXY(56, 37);
this.say("Hey");
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

// Commanding Followers

	/*
		Move to army
		Order Follow
		Move to near enemy
		Order Attack
	*/

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow me!");
this.moveXY(60,45);
this.say("Attack!");

// Mobile Artillery
	
	/*
		Move into range
		Fire
		Move into range
		Fire x2
		Fire x2
	*/

this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(48, 38);
this.attackXY(67, 53);
this.attackXY(65, 50);
this.attackXY(50, 64);
this.attackXY(50, 50);

/* Release 3 Questions:
- "this" refers to the object that is receiving the commands
- the "()"" encloses any parameters that may be passed to the command
- the semicolons mark the end of a command
 
 
// Reflection:
/*
This challenge was fun in that we can use commands to actually control an object and we could see it visually.  The pseudocode was a bit tedious for challenges of this level, but I can see the value when the challenges get tougher and require more planning to complete.
*/