// Super class to store the render function
var Entity = function() {};
// Draw the enemy on the screen, required method for game
Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.y_psition = [60, 140, 220];
    this.sprite = 'images/enemy-bug.png';
    this.x = -200*Math.random();
    this.y = this.y_psition[Math.floor(Math.random() * this.y_psition.length)];
    this.speed = 100 * Math.random();
};

// delegate to super class Entity for render function
Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.update = function(dt) {

    // If enemy moves out of the canvas, reset it to the starting point
    if (this.x > 504){
        this.x = -200 * Math.random();
        this.y = this.y_psition[Math.floor(Math.random() * this.y_psition.length)];
        this.speed = 100 * Math.random();
    } else {
        this.x += this.speed * dt;
    }
};

// // Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 100;
    this.y = 400;
};
Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function() {

    // console.log("allEnemies: ", allEnemies);
    for (enemy of allEnemies){
        let distance = Math.sqrt((enemy.x-this.x)*(enemy.x-this.x) + (enemy.y-this.y)*(enemy.y-this.y));
        // console.log("distance: ", distance);
        if (distance < 30){
            this.y = 400;
        }
    }

};

// Player.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//     // console.log("player rendered!");
// };

Player.prototype.handleInput = function(e) {
    // console.log("e: ", e);
    if (e != undefined) {
        if  (e == 'left') {
            if (this.x != -1) {
                this.x -= 101;
            }
        } else if (e == 'right') {
            if (this.x != 403) {
                this.x += 101;
            }
        } else if (e == 'up') {
            if (this.y == 52) {
                this.y = 400;
            } else {
                this.y -= 87;
            }
        } else if (e == 'down') {
            if (this.y != 400) {
                this.y += 87;
            }
        }
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
allEnemies = [];
// get normally distributed random numbers of enemy
for (let i =0; i < Math.floor(3*(Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random())); i++){
    // allEnemies = [new Enemy, new Enemy, new Enemy];
    allEnemies.push(new Enemy);
}
// Place the player object in a variable called player
player = new Player;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
