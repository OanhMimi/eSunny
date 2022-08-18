# E-Sunny 

### Background/intro:

- E-Sunny is an interactive platforming game, where the player can get to experience the joy of owning a virtual dog. The player will get to interact with the puppy and watch it grow through the process of feeding it, giving it love, etc. 

### Functionality & MVP:
In E-Sunny, players will be able to:
- give the puppy a name & choose the puppy's color
- rotate the camera around the puppy 
- use the mouse to interact with the puppy 
- view the dog's mood status
- select from a list of actions (give food, water, walks, etc)

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

### Timeline: 
- Friday/Weekend
    - rendering background and puppy on screen
    - create splash page image 
    - social links
    - background music
- Monday
    - rendering the health/accessories/on screen
    - hover instructions
    - create sprite images of Sunny and backgrounds
- Tuesday
    - hover/click effects and healthbars
    - interactive elements like clicking food/water/shampoo
- Wednesday
    - fixing the game logic and debug
- Thursday Morning 
    - final edits/changes
