import Menu from "./menu.js";

class GameView{
    constructor(params){
        this.params = params;
        this.dimX = params["dim"][0];
        this.dimY= params["dim"][1];
        this.menu = new Menu(params);
        this.ctx = ctx;
        this.animateBool = true;
        this.clearScreen = false;

        
        const playButton = document.getElementById("play-btn");
        const instructionButton = document.getElementById("instructions-btn");
        // const volumeButton = document.getElementById("volume-btn");
        const menuButton = document.getElementById("menu-btn");
        const returnMenuButton = document.getElementById("return-to-menu")
    
        // const sunnyVolumeButton = document.getElementById("sunny-volume-btn");
        const that = this;
        const instructionBox = document.getElementById("instructions-text");
        instructionBox.style["background-image"] = "url(./src/assets/menu/sunny_instructions.png"

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
            let canvas = document.getElementById("game-canvas");
            this.ctx = canvas.getContext("2d");
            this.ctx.clearRect(0,0,this.dimX,this.dimY);
        }

        titleMenu(){
            document.getElementById("game-canvas").style.backgroundImage="url(./src/assets/menu/sunny_title_screen_bg.png)";

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
