import Menu from "./menu.js";

class GameView{
    constructor(params){ //[1100,680]
        
        // this.menu = new Menu(params);
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        this.params = params;
        this.dimX = params["dim"][0]; //[1100]
        this.dimY= params["dim"][1]; //[680]
        // this.ctx = ctx;
        this.animateBool = true;
        this.clearScreen = false;

        
        const playButton = document.getElementById("play-btn");
        const instructionButton = document.getElementById("instructions-btn");
        const volumeButton = document.getElementById("volume-btn");
        const menuButton = document.getElementById("menu-btn");
        const returnMenuButton = document.getElementById("return-to-menu")
    
        // const sunnyVolumeButton = document.getElementById("sunny-volume-btn");
        const that = this;
        const instructionBox = document.getElementById("instructions-text");
        // instructionBox.style["background-image"] = "url(./src/assets/menu/sunny_instructions.png"

        const backgroundMusic = new Audio();
        backgroundMusic.src = './src/assets/audio/sunnyDay_audio.mp3'

        volumeButton.addEventListener("click",function (){
            backgroundMusic.play();
            backgroundMusic.addEventListener('playing', function(){
                console.log('background music is currently playing...')
            });
            backgroundMusic.addEventListener('ended', function(){
                console.log('music ended')
            });

        });

        const sunnyMenuImage = document.getElementById('shadow-dog-image')
        // sunnyMenuImage.src = './src/assets/menu/shadow_dog.png';
        const spriteWidth = 575;
        const spriteHeight = 523; 
        let frameX = 0;
        let frameY = 2;
        let gameFrame = 0;
        const staggerFrames = 10;

        function animateSunnyMenu(){
            ctx.clearRect(0,0,1100,680); //clear the entire canvas between every animation frame
            ctx.drawImage(sunnyMenuImage, frameX*spriteWidth,frameY*spriteHeight,spriteWidth,spriteHeight,230,350,150,150); //(imageuwanttodraw,srcx,srcy,srcwidth,srcheight,dx,dy,dw,dh)
            if (gameFrame % staggerFrames === 0){
                if (frameX < 6) frameX++;
                else frameX = 0;
            }

            gameFrame++;
            requestAnimationFrame(animateSunnyMenu); //build in method that runs the function we pass to it 
        };

        animateSunnyMenu();


        playButton.addEventListener("click",function(){
            playButton.hidden = true;
            instructionButton.hidden = true;
            menuButton.hidden = false;
            that.start();

        });

        instructionButton.addEventListener("click",function() {
            playButton.hidden = true;
            instructionButton.hidden = true;
            instructionBox.hidden = false;
            returnMenuButton.hidden = false;
        })

        returnMenuButton.addEventListener("click",function(){
            playButton.hidden = false;
            instructionButton.hidden = false;
            instructionBox.hidden = true;
            returnMenuButton.hidden = true;

        })

        menuButton.addEventListener("click",function(){
            that.animateBool = false;
            that.clearScreen = true;
            that.titleMenu();
            that.clearCanvas();
            setTimeout(()=> {
                that.clearCanvas();
            }, 1001);
            menuButton.hidde = true;
            playButton.hidden = false;
            instructionButton.hidden = false;
        });

        // volumeButton.addEventListener("click", function(){
        //     //need to find autio
        // })
        }
        clearCanvas() {
            // let canvas = document.getElementById("game-canvas"); //hold a reference to the actual html game-cavs element
            // this.ctx = canvas.getContext("2d"); //access to canvas 2d methods //all custom 2d canvas methods are stored in ctx
            ctx.clearRect(0,0,this.dimX,this.dimY); 
        }

        titleMenu(){
            document.getElementById("game-canvas").style.backgroundImage="url(./src/assets/menu/sunny_title_bg.png)";

        }

        start(){
            this.game = new Game(this.params);
            this.animateBool = true;
            this.animate();
        }

        animate(){
            if(!this.animateBool) {
                if (this.clearScreen) {
                  this.ctx.clearRect(0, 0, this.dimX, this.dimY);
                }
                this.ctx = null; 
                return;
              }
        }

        
   
    }


export default GameView;
