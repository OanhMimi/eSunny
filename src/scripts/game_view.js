// import Menu from "./menu.js";

import sunnyDrawImages from "./sunnyDrawImages.js"
import sunnyStatus from "./sunnyStatus.js"

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

        const titleImg = new Image();
        titleImg.src = "./src/assets/menu/sunny_title_bg.png";
        document.body.appendChild(titleImg);
        titleImg.setAttribute("id","titleImg");

        var adventureBg = new Image();
        adventureBg.src = "./src/assets/background/playInteractive_bg.png";
        document.body.appendChild(adventureBg);
        adventureBg.setAttribute("id","adventureBg");
        adventureBg.classList.add("hidden");

        const playButton = document.getElementById("play-btn");
        const instructionButton = document.getElementById("instructions-btn");
        const volumeButton = document.getElementById("volume-btn");
        const menuButton = document.getElementById("menu-btn");
        const returnMenuButton = document.getElementById("return-to-menu");
        const textPlayButton = document.getElementById("textplay-btn");
        const hungerLevel = document.getElementById("hunger-level");
        const thirstLevel = document.getElementById("thirst-level");
        const hygieneLevel = document.getElementById("hygiene-level");


    
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

        
        const sunnyBestFriend1 = new Image();
        sunnyBestFriend1.src = ('./src/models/sunnytitle_1.png');
        document.body.appendChild(sunnyBestFriend1);
        sunnyBestFriend1.setAttribute("id","sunnyBestFriend1");
        const sunnyBestFriend2 = new Image();
        sunnyBestFriend2.src = ('./src/models/sunnytitle_2.png');
        document.body.appendChild(sunnyBestFriend2);
        sunnyBestFriend2.setAttribute("id","sunnyBestFriend2");
        let switchImg = "two"
        const sunnyBestFriendInterval = setInterval(() => {
            if (switchImg === "one"){
                sunnyBestFriend2.classList.add("hidden")
                sunnyBestFriend1.classList.remove("hidden")
            }else{
                sunnyBestFriend1.classList.add("hidden")
                sunnyBestFriend2.classList.remove("hidden")
            }
            switchImg = switchImg === "one" ? "two" : "one";
        }, 300);

        var layout = canvas3.getContext('2d');
        sunnyDrawImages(layout);
        const waterImg = document.getElementById("water-img");
        const foodImg = document.getElementById("food-img");
        const thirstImg = document.getElementById("thirst-img");
        const hungerImg = document.getElementById("hunger-img");
        const hygeineImg = document.getElementById("hygiene-img");
        const shampooImg = document.getElementById("shampoo-img");
        const sunnyHealthBarImg1 = document.getElementById("healthbar1-img");
        const sunnyHealthBarImg2 = document.getElementById("healthbar2-img");
        const sunnyHealthBarImg3 = document.getElementById("healthbar3-img");
        const sunnyHealthBarImg4 = document.getElementById("healthbar4-img");
        const sunnyHealthBarImg5 = document.getElementById("healthbar5-img");
        const sunnyHealthBar2Img1 = document.getElementById("healthbar2-1-img");
        const sunnyHealthBar2Img2 = document.getElementById("healthbar2-2-img");
        const sunnyHealthBar2Img3 = document.getElementById("healthbar2-3-img");
        const sunnyHealthBar2Img4 = document.getElementById("healthbar2-4-img");
        const sunnyHealthBar2Img5 = document.getElementById("healthbar2-5-img");
        const sunnyHealthBar3Img1 = document.getElementById("healthbar3-1-img");
        const sunnyHealthBar3Img2 = document.getElementById("healthbar3-2-img");
        const sunnyHealthBar3Img3 = document.getElementById("healthbar3-3-img");
        const sunnyHealthBar3Img4 = document.getElementById("healthbar3-4-img");
        const sunnyHealthBar3Img5 = document.getElementById("healthbar3-5-img");
        
        const sunnyHeart = document.getElementById("heartOne");
        const sunnyHeart2 = document.getElementById("heartTwo");
        const sunnyHeart3 = document.getElementById("heartThree");
        const sunnyHeart4 = document.getElementById("heartFour");
        const sunnyHeart5 = document.getElementById("heartFive");
        const sunnyHeartEmpty1 = document.getElementById("emptyHeartOne");
        const sunnyHeartEmpty2 = document.getElementById("emptyHeartTwo");
        const sunnyHeartEmpty3 = document.getElementById("emptyHeartThree");
        const sunnyHeartEmpty4 = document.getElementById("emptyHeartFour");
        const sunnyHeartEmpty5 = document.getElementById("emptyHeartFive");


        textPlayButton.addEventListener("click",function(){
            returnMenuButton.classList.add("hidden");
            adventureBg.classList.remove("hidden");
            titleImg.classList.add("hidden");
            hungerLevel.classList.remove("hidden");
            thirstLevel.classList.remove("hidden");
            hygieneLevel.classList.remove("hidden");
            textPlayButton.classList.add("hidden")
            playButton.classList.add("hidden")
            instructionButton.classList.add("hidden");
            menuButton.classList.remove("hidden");
            canvas.classList.add("hidden");
            canvas3.classList.remove("hidden");
            clearInterval(sunnyBestFriendInterval);
            sunnyBestFriend1.classList.add("hidden");
            sunnyBestFriend2.classList.add("hidden")
            waterImg.classList.remove("hidden");

            //
             waterImg.classList.remove("hidden");
             foodImg.classList.remove("hidden");
             thirstImg.classList.remove("hidden");
             hungerImg.classList.remove("hidden");
             hygeineImg.classList.remove("hidden"); 
             shampooImg.classList.remove("hidden");
             sunnyHealthBarImg1.classList.remove("hidden"); 
             sunnyHealthBarImg2.classList.remove("hidden");
             sunnyHealthBarImg3.classList.remove("hidden"); 
             sunnyHealthBarImg4.classList.remove("hidden"); 
             sunnyHealthBarImg5.classList.remove("hidden"); 
             sunnyHealthBar2Img1.classList.remove("hidden"); 
             sunnyHealthBar2Img2.classList.remove("hidden"); 
             sunnyHealthBar2Img3.classList.remove("hidden"); 
             sunnyHealthBar2Img4.classList.remove("hidden"); 
             sunnyHealthBar2Img5.classList.remove("hidden"); 
             sunnyHealthBar3Img1.classList.remove("hidden"); 
             sunnyHealthBar3Img2.classList.remove("hidden"); 
             sunnyHealthBar3Img3.classList.remove("hidden"); 
             sunnyHealthBar3Img4.classList.remove("hidden");
             sunnyHealthBar3Img5.classList.remove("hidden"); 
            sunnyHeart.classList.remove("hidden"); 
            sunnyHeart2.classList.remove("hidden");  
            sunnyHeart3.classList.remove("hidden"); 
            sunnyHeart4.classList.remove("hidden"); 
            sunnyHeart5.classList.remove("hidden"); 
            sunnyHeartEmpty1.classList.remove("hidden"); 
            sunnyHeartEmpty2.classList.remove("hidden"); 
            sunnyHeartEmpty3.classList.remove("hidden"); 
            sunnyHeartEmpty4.classList.remove("hidden"); 
            sunnyHeartEmpty5.classList.remove("hidden"); 

            if(canvas3.getContext){
               
                let startGame = new sunnyStatus();

               


            }
        
        })

        playButton.addEventListener("click",function(){
            returnMenuButton.classList.remove("hidden");
            textPlayButton.hidden = true;
            playButton.hidden = true;
            instructionButton.hidden = true;
            menuButton.hidden = false;
            canvas.classList.add("hidden");
            canvas2.classList.remove("hidden");
            returnMenuButton.hidden = false;
            clearInterval(sunnyBestFriendInterval);
            sunnyBestFriend1.classList.add("hidden");
            sunnyBestFriend2.classList.add("hidden")
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

    }

    
}


export default GameView;


//1. my images are always underneath my canvas, how to fix that
//2. set intervals? 
//    - how to flash the sunny image
//    - how to get the heart disappears and reappears
//3. neater code? how can i use other classes
//4. how do i get the menu button to return to menu?
//5. make it draggable
