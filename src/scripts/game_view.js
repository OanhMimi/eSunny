// import Menu from "./menu.js";
import Game from "./game.js";
import playGame from "./playGame.js"

class GameView{
    constructor(params){ //[1100,680]
        
        // this.menu = new Menu(params);
        const canvas = document.getElementById("game-canvas");
        const canvas2 = document.getElementById("housecanvas");
        const canvas3 = document.getElementById("adventureCanvas");
        const ctx = canvas.getContext("2d");
        
        this.ctx = ctx; ///???
        this.params = params;
        this.dimX = params["dim"][0]; //[1100]
        this.dimY= params["dim"][1]; //[680]
        // this.animateBool = true;
        // this.clearScreen = false;
    

        const playButton = document.getElementById("play-btn");
        const instructionButton = document.getElementById("instructions-btn");
        const volumeButton = document.getElementById("volume-btn");
        const menuButton = document.getElementById("menu-btn");
        const returnMenuButton = document.getElementById("return-to-menu");
        const textPlayButton = document.getElementById("textplay-btn");
        const hungerLevel = document.getElementById("hunger-level")
        const thirstLevel = document.getElementById("thirst-level")


    
        // const sunnyVolumeButton = document.getElementById("sunny-volume-btn");
        const that = this;
        const instructionBox = document.getElementById("instructions-text");
        // instructionBox.style["background-image"] = "url(./src/assets/menu/sunny_instructions.png"

        const backgroundMusic = new Audio();
        backgroundMusic.src = './src/assets/audio/sunnyDay_audio.mp3'

        let backgroundON = false;
        volumeButton.addEventListener("click",function (){
            console.log(backgroundON);
            if (backgroundON === false) {
                backgroundON = true;
                backgroundMusic.play();
            }else{
                backgroundMusic.pause();
                backgroundON = false;
            }
        });

        const sunnyMenuImage = document.getElementById('sunny-sprite-image')
        // sunnyMenuImage.src = './src/assets/menu/shadow_dog.png';
        const spriteWidth = 575;
        const spriteHeight = 523; 
        let frameX = 0;
        let frameY = 0;
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


        
        textPlayButton.addEventListener("click",function(){
            hungerLevel.classList.remove("hidden");
            thirstLevel.classList.remove("hidden");
            textPlayButton.hidden = true;
            playButton.hidden = true;
            instructionButton.hidden = true;
            menuButton.hidden = false;
            canvas.classList.add("hidden");
            canvas3.classList.remove("hidden");
            if(canvas3.getContext){
                var layout = canvas3.getContext('2d');
                var sunnyImg = new Image();
                sunnyImg.src = "./src/models/sunny_1.png";
                //need to figure out how to use setTimeout to switch between two images
                //until a click is trigger, then it stops
              
                var sunnyImg2 = new Image();
                sunnyImg2 = "./src/models/sunny_2.png"
                let imgToDraw = "one";
                if (imgToDraw === "one"){
                    sunnyImg.onload = function(){
                        layout.drawImage(sunnyImg,500,360,170,170)
                    }
                    imgToDraw = "two";
                }else{
                    sunnyImg2.onload = function(){
                        layout.drawImage(sunnyImg2,500,360,170,170)
                    }
                    imgToDraw = "one";
                }


                var waterImg = new Image();
                waterImg.src = "./src/models/sunny_water.png";
                document.body.appendChild(waterImg)
                waterImg.style.borderRadius = "10px"
                waterImg.setAttribute("id", "water-img");  
                waterImg.onload = function(){
                    layout.drawImage(waterImg,215,310,100,100)
                }
                waterImg.addEventListener("click",function(){
                    console.log("clicked")
                })
                var FoodImg = new Image();
                FoodImg.src = "./src/models/sunny_food.png";
                FoodImg.onload = function(){
                    layout.drawImage(FoodImg,100,310,100,100)
                }
                var thirstImg = new Image();
                thirstImg.src = "./src/models/sunny_thirst1.png";
                thirstImg.onload = function(){
                    layout.drawImage(thirstImg,15,100,100,100)
                }
                var hungerImg = new Image();
                hungerImg.src = "./src/models/sunny_hunger1.png";
                hungerImg.onload = function(){
                    layout.drawImage(hungerImg,15,50,100,100)
                }

                var hygeineImg = new Image();
                hygeineImg.src = "./src/models/sunny_hygeine.png";
                hygeineImg.onload = function(){
                    layout.drawImage(hygeineImg,15,150,100,100)
                }

                var shampooImg = new Image();
                shampooImg.src = "./src/models/sunny_soap.png";
                shampooImg.onload = function(){
                    layout.drawImage(shampooImg,750,370,200,200)
                }
                //**because i created the image in js, how do i refer to it in css if i want to edit? */

                //need to figure out how to make heart empty
                // idea is to have heart empty hidden and when either
                //the thirst or hunger level is below a certain point,
                // one of the hidden heart appears and the full hearts disappears
                var sunnyHeart = new Image();
                sunnyHeart.src = "./src/models/sunnyheart_full.png";
                sunnyHeart.onload = function(){
                    layout.drawImage(sunnyHeart,1000,100,100,100)
                }
                var sunnyHeart = new Image();
                sunnyHeart.src = "./src/models/sunnyheart_full.png";
                sunnyHeart.onload = function(){
                    layout.drawImage(sunnyHeart,1000,160,100,100)
                }
                var sunnyHeart = new Image();
                sunnyHeart.src = "./src/models/sunnyheart_full.png";
                sunnyHeart.onload = function(){
                    layout.drawImage(sunnyHeart,1000,220,100,100)
                }
                var sunnyHeart = new Image();
                sunnyHeart.src = "./src/models/sunnyheart_full.png";
                sunnyHeart.onload = function(){
                    layout.drawImage(sunnyHeart,1000,280,100,100)
                }
                var sunnyHeart = new Image();
                sunnyHeart.src = "./src/models/sunnyheart_full.png";
                sunnyHeart.onload = function(){
                    layout.drawImage(sunnyHeart,1000,340,100,100)
                }
                //sunny heart empty

                var sunnyHeartEmpty = new Image();
                sunnyHeartEmpty.src = "./src/models/sunnyheart_empty.png";
                sunnyHeartEmpty.onload = function(){
                    layout.drawImage(sunnyHeartEmpty,1000,100,100,100)
                }

                var sunnyHeartEmpty = new Image();
                sunnyHeartEmpty.src = "./src/models/sunnyheart_empty.png";
                sunnyHeartEmpty.onload = function(){
                    layout.drawImage(sunnyHeartEmpty,1000,160,100,100)
                }

                var sunnyHeartEmpty = new Image();
                sunnyHeartEmpty.src = "./src/models/sunnyheart_empty.png";
                sunnyHeartEmpty.onload = function(){
                    layout.drawImage(sunnyHeartEmpty,1000,220,100,100)
                }

                var sunnyHeartEmpty = new Image();
                sunnyHeartEmpty.src = "./src/models/sunnyheart_empty.png";
                sunnyHeartEmpty.onload = function(){
                    layout.drawImage(sunnyHeartEmpty,1000,280,100,100)
                }

                var sunnyHeartEmpty = new Image();
                sunnyHeartEmpty.src = "./src/models/sunnyheart_empty.png";
                sunnyHeartEmpty.onload = function(){
                    layout.drawImage(sunnyHeartEmpty,1000,340,100,100)
                }




                


            }
            that.playGame();
        })

        playButton.addEventListener("click",function(){
            textPlayButton.hidden = true;
            playButton.hidden = true;
            instructionButton.hidden = true;
            menuButton.hidden = false;
            canvas.classList.add("hidden");
            canvas2.classList.remove("hidden");
            returnMenuButton.hidden = false;
            that.start();

        });


        instructionButton.addEventListener("click",function() {
            textPlayButton.hidden = true;
            playButton.hidden = true;
            instructionButton.hidden = true;
            instructionBox.hidden = false;
            returnMenuButton.hidden = false;
            canvas.classList.remove("hidden")
        })

        returnMenuButton.addEventListener("click",function(){
            textPlayButton.hidden = false;
            playButton.hidden = false;
            instructionButton.hidden = false;
            instructionBox.hidden = true;
            returnMenuButton.hidden = true; 
            canvas.classList.remove("hidden");
            canvas2.classList.add("hidden");

        })

        // menuButton.addEventListener("click",function(){
        //     // that.animateBool = false;
        //     // that.clearScreen = true;
        //     that.titleMenu();
        //     that.clearCanvas();
        //     setTimeout(()=> {
        //         that.clearCanvas();
        //     }, 1001);
        //     menuButton.hidde = true;
        //     playButton.hidden = false;
        //     instructionButton.hidden = false;
        // });

        // volumeButton.addEventListener("click", function(){
        //     //need to find autio
        // })
    }
    // clearCanvas() {
    //     let canvas = document.getElementById("game-canvas"); //hold a reference to the actual html game-cavs element
    //     this.ctx = canvas.getContext("2d"); //access to canvas 2d methods //all custom 2d canvas methods are stored in ctx
    //     this.ctx.clearRect(0,0,this.dimX,this.dimY); 
    // }

    

    titleMenu(){
        document.getElementById("game-canvas").style.backgroundImage="url(./src/assets/menu/sunny_title_bg.png)";
    }

    start(){
        this.game = new Game(this.params)
        // this.game = new Game(this.params);
        // this.animateBool = true;
        // this.toggleScreen('play-btn',false);
        // this.toggleScreen('canvas',true);
        // this.animate();
    }

    playGame(){
        this.playGame = new playGame(this.params)
    }

    // animate(){
    //     // if(!this.animateBool) {
    //         // if (this.clearScreen) {
    //     ctx.clearRect(0, 0, 1100, 680);
    //         // }
    //         // this.ctx = null; 
    //         // return;
    //     //   }
    //         // requestAnimationFrame(this.animate);
    //     console.log("enter home button working");
    // }

    // toggleScreen(id,toggle){
    //     let element = document.getElementById(id);
    //     let display = (toggle) ? 'block' : 'none';
    //     element.style.display = display;
    // }


    

}


export default GameView;


//1. my images are always underneath my canvas, how to fix that
//2. set intervals? 
//    - how to flash the sunny image
//    - how to get the heart disappears and reappears
//3. neater code? how can i use other classes
//4. how do i get the menu button to return to menu?
