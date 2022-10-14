# E-Sunny 

Live Link: https://oanhmimi.github.io/eSunny/

### Background/intro:

- E-Sunny is a single page, interactive JavaScript game designed to showcase the responsibilities of owning a pet that is suitable for all ages. The player will get to interact with Sunny, the puppy, by giving him food, water, and baths. There is a time that decrease his hunger, thirst, and cleanliness level over time. If not fed continuously, Sunny will unfortunately collapse. 

### Functionality & MVP:
In E-Sunny, players will be able to:
- Link to Github, LinkedIn
- select from a list of actions (give food, water, baths)


### features: 
- virtual animation of the puppy and the life stages as it go from puppy stage to adulthood
- interactive - puppy/dog will be able to respond to the mouse as well as clicks 
- The puppy's current status will be display and the status will change according to how the player choose to interact with the puppy
- The puppy is animated so it can show emotions such as crying and wagging its tail

### In addition, this game also includes:
- audio ON/OFF button
- instructions  
- puppy sound effects

### Wireframe: 
![Alt text](./wireframe.png?raw=true "Sunny's wireframe")

### technologies:
- Javascript for the game logic 
- Canvas API for implementing and rendering animation and movement
- Webpack to bundle the source Javascript code 
- HTML & CSS for design 

### Architectures:
- three.js (create scene and camera movement)
- orbitControls.js (part of three.js that allow the camera to orbit around the puppy)
- anime.js (ceating hair movements and directional movements)
- game.js && game_view.js (providing animation details)


