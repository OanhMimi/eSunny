
import sunnyDrawImages from "./sunnyDrawImages.js"
import sunnyStatus from "./sunnyStatus.js"

class GameView{
    constructor(params){ //[1100,680]
        
        const canvas = document.getElementById("game-canvas"); //splash canvas
        const canvas3 = document.getElementById("adventureCanvas"); //play canvas
        const ctx = canvas.getContext("2d");
        
        this.ctx = ctx; 
        this.params = params;
        this.dimX = params["dim"][0]; //[1100]
        this.dimY= params["dim"][1]; //[680]
   
        const titleImg = new Image();
        titleImg.src = "./src/assets/menu/sunny_title_bg.png";
        document.body.appendChild(titleImg);
        titleImg.setAttribute("id","titleImg");

        var adventureBg = new Image();
        adventureBg.src = "./src/assets/background/playInteractive_bg.png";
        document.body.appendChild(adventureBg);
        adventureBg.setAttribute("id","adventureBg");
        adventureBg.classList.add("hidden");

        const instructionButton = document.getElementById("instructions-btn");
        const volumeButton = document.getElementById("volume-btn");
        const returnMenuButton = document.getElementById("return-to-menu");
        const textPlayButton = document.getElementById("textplay-btn");
        const hungerLevel = document.getElementById("hunger-level");
        const thirstLevel = document.getElementById("thirst-level");
        const hygieneLevel = document.getElementById("hygiene-level");

        const that = this;
        const instructionBox = document.getElementById("instructions-text");

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


        const mainPageSunny1 = new Image();
        mainPageSunny1.src = ('./src/models/mainPage-sunny1.png');
        document.body.appendChild(mainPageSunny1);
        mainPageSunny1.setAttribute("id","mainPageSunny1");
        const mainPageSunny2 = new Image();
        mainPageSunny2.src = ('./src/models/mainPage-sunny2.png');
        document.body.appendChild(mainPageSunny2);
        mainPageSunny2.setAttribute("id","mainPageSunny2");
        let switchMainSunnyImg = "two"
        const mainPageSunnyInterval = setInterval(() => {
            if (switchMainSunnyImg === "one"){
                mainPageSunny2.classList.add("hidden")
                mainPageSunny1.classList.remove("hidden")
            }else{
                mainPageSunny1.classList.add("hidden")
                mainPageSunny2.classList.remove("hidden")
            }
            switchMainSunnyImg = switchMainSunnyImg === "one" ? "two" : "one";
        }, 300);
    

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
            instructionButton.classList.add("hidden");
            canvas.classList.add("hidden");
            canvas3.classList.remove("hidden");
            clearInterval(sunnyBestFriendInterval);
            clearInterval(mainPageSunnyInterval);
            sunnyBestFriend1.classList.add("hidden");
            sunnyBestFriend2.classList.add("hidden")
            mainPageSunny1.classList.add("hidden");
            mainPageSunny2.classList.add("hidden");
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

        instructionButton.addEventListener("click",function() {
            textPlayButton.hidden = true;
            instructionButton.hidden = true;
            instructionBox.hidden = false;
            returnMenuButton.classList.remove("hidden");
            canvas.classList.remove("hidden")
        })

        returnMenuButton.addEventListener("click",function(){
            textPlayButton.hidden = false;
            instructionButton.hidden = false;
            instructionBox.hidden = true;
            returnMenuButton.classList.add("hidden");
            canvas.classList.remove("hidden");
        })

    }

    
}


export default GameView;
