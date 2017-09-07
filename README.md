Frontend-nanodegree-arcade-game
===============================

## Introduction
In this game, Player and Enemies. The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.
## Implementation
Class is extensively used in app.js. 

- For class `Enemy`, a random speed and position is initialized upon spawed. An array (`allEnemies`) with sudo Gaussign distribution length is used to store the class `new enemy`. The x value of each Enemy instance is incremented with  value`dt * this.speed`. If enemy get out of the canvas, its position and speed will be reset and it will show up again at the left of the canvas. 
- For class `Player`, the position and image is set during the initialization. An EventListener is implemented to recorded the user's input. Any key input other than 'up', 'left', 'down' and 'right' is ignored. The key input corresponding to certain value change. Boundaries are implemented(line 63-82 in [app.js](js/app.js)) to prevent `player` from going out of canvas. `Player.prototype.update` is checking the distance between the player and each enemy. When the distance is too small(smaller than 30) means collidion and the player's position will be reset. If the player reaches the water, the game is won and the player's position will be reset.