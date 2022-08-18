
class SunnyStatus{

    constructor(){

        this.sunnyElements = {
            healthOne1: document.querySelector("#healthbar1-img"),
            healthOne2: document.querySelector("#healthbar2-img"),
            healthOne3: document.querySelector("#healthbar3-img"),    
            healthOne4: document.querySelector("#healthbar4-img"),
            healthTwo1: document.querySelector("#healthbar2-1-img"),
            healthTwo2: document.querySelector("#healthbar2-2-img"),
            healthTwo3: document.querySelector("#healthbar2-3-img"),
            healthTwo4: document.querySelector("#healthbar2-4-img"),
            healthThree1: document.querySelector("#healthbar3-1-img"),
            healthThree2: document.querySelector("#healthbar3-2-img"),
            healthThree3: document.querySelector("#healthbar3-3-img"),
            healthThree4: document.querySelector("#healthbar3-4-img")
        }

        this.sunnyHearts = {
            fullHeart1: document.querySelector("#heartOne"),
            fullHeart2: document.querySelector("#heartTwo"),
            fullHeart3: document.querySelector("#heartThree"),
            fullHeart4: document.querySelector("#heartFour"),
            fullHeart5: document.querySelector("#heartFive"),
            emptyHeart1: document.querySelector("#emptyHeartOne"),
            emptyHeart2: document.querySelector("#emptyHeartTwo"),
            emptyHeart3: document.querySelector("#emptyHeartThree"),
            emptyHeart4: document.querySelector("#emptyHeartFour"),
            emptyHeart5: document.querySelector("#emptyHeartFive")
        }

        this.happyStuff = {
            kibbles: document.getElementById("food-img"),
            aqua: document.getElementById("water-img"),
            bodysoap: document.getElementById("shampoo-img")
        }

        this.playAgain = document.getElementById("play-again");
        this.mainMenu = document.getElementById("main-menu");

        this.canvas =  document.getElementById("game-canvas");
        this.canvas3 = document.getElementById("adventureCanvas");

        this.hunger = 4;
        this.thirst = 4;
        this.cleanliness = 4;
        this.heart = 5;

        this.startHungerInterval();
        this.startThirstInterval();
        this.startCleanlinessInterval();

        this.happyStuff.kibbles.addEventListener("click", ()=>{
            this.feed();
        })
        this.happyStuff.aqua.addEventListener("click", ()=>{
            this.quench();
        })
        this.happyStuff.bodysoap.addEventListener("click", ()=>{
            this.clean();
        })

    }

    decrementFoodHealthBar(){
        if (this.hunger === 3){
            this.sunnyElements.healthOne1.classList.add("hidden");
        } 
        if (this.hunger === 2){
            this.sunnyElements.healthOne2.classList.add("hidden");
        } 
        if (this.hunger === 1){
            this.sunnyElements.healthOne3.classList.add("hidden");
        } 
        if (this.hunger <= 0){
            this.sunnyElements.healthOne4.classList.add("hidden");
            setTimeout(() => {
                this.decrementHearts();
            }, 5000);
        }
    }

    decrementWaterHealthBar(){
        if (this.thirst === 3){
            this.sunnyElements.healthTwo1.classList.add("hidden");
        } 
        if (this.thirst === 2){
            this.sunnyElements.healthTwo2.classList.add("hidden");
        } 
        if (this.thirst === 1){
            this.sunnyElements.healthTwo3.classList.add("hidden");
        } 
        if (this.thirst <= 0){
            this.sunnyElements.healthTwo4.classList.add("hidden");
            setTimeout(() => {
                this.decrementHearts();
            }, 5000);
        }
    }


    decrementCleanlinessHealthBar(){
        if (this.cleanliness === 3){
            this.sunnyElements.healthThree1.classList.add("hidden");
        } 
        if (this.cleanliness === 2){
            this.sunnyElements.healthThree2.classList.add("hidden");
        } 
        if (this.cleanliness === 1){
            this.sunnyElements.healthThree3.classList.add("hidden");
        } 
        if (this.cleanliness <= 0){
            this.sunnyElements.healthThree4.classList.add("hidden");
            setTimeout(() => {
                this.decrementHearts();
            }, 5000);
        }
    }

    incrementFoodHealthBar(){
        if (this.hunger === 4){
            this.sunnyElements.healthOne1.classList.remove("hidden");
        }
        if (this.hunger === 3){
            this.sunnyElements.healthOne2.classList.remove("hidden");
        } 
        if (this.hunger === 2){
            this.sunnyElements.healthOne3.classList.remove("hidden");
        } 
        if (this.hunger === 1){
            this.sunnyElements.healthOne4.classList.remove("hidden");
        } 
    }

    incrementWaterHealthBar(){
        if (this.thirst === 4){
            this.sunnyElements.healthTwo1.classList.remove("hidden");
        }
        if (this.thirst === 3){
            this.sunnyElements.healthTwo2.classList.remove("hidden");
        } 
        if (this.thirst === 2){
            this.sunnyElements.healthTwo3.classList.remove("hidden");
        } 
        if (this.thirst === 1){
            this.sunnyElements.healthTwo4.classList.remove("hidden");
        } 
    }


    incrementCleanlinessHealthBar(){
        if (this.cleanliness === 4){
            this.sunnyElements.healthThree1.classList.remove("hidden");
        }
        if (this.cleanliness === 3){
            this.sunnyElements.healthThree2.classList.remove("hidden");
        } 
        if (this.cleanliness === 2){
            this.sunnyElements.healthThree3.classList.remove("hidden");
        } 
        if (this.cleanliness === 1){
            this.sunnyElements.healthThree4.classList.remove("hidden");
        } 
    }


    decrementHearts(){
        if (this.heart >= 1){
            this.heart -= 1
            this.displayEmptyHearts();
        }

    }

    incrementHearts(){
        if (this.heart < 5){
            this.heart += 1
            this.displayFullHearts();
        }
    }

    displayFullHearts(){
        if (this.heart === 5){
            this.sunnyHearts.fullHeart1.classList.remove("hidden");
        } 
        if (this.heart === 4){
            this.sunnyHearts.fullHeart2.classList.remove("hidden");
        } 
        if (this.heart === 3){
            this.sunnyHearts.fullHeart3.classList.remove("hidden");
        } 
        if (this.heart === 2){
            this.sunnyHearts.fullHeart4.classList.remove("hidden");
        } 
        if (this.heart === 1){
            this.sunnyHearts.fullHeart5.classList.remove("hidden");
        }
       
    }

    displayEmptyHearts(){
        if (this.heart === 4){
            this.sunnyHearts.fullHeart1.classList.add("hidden");
        } 
        if (this.heart === 3){
            this.sunnyHearts.fullHeart2.classList.add("hidden");
        } 
        if (this.heart === 2){
            this.sunnyHearts.fullHeart3.classList.add("hidden");
        } 
        if (this.heart === 1){
            this.sunnyHearts.fullHeart4.classList.add("hidden");
        }
        if (this.heart === 0){
            this.sunnyHearts.fullHeart5.classList.add("hidden");
                setTimeout(() => {
                    this.gameOver();
                }, 5000);
        }
        
    }

    feed(){
        if (this.hunger < 4 ) {
            this.hunger += 1;
            if (this.hunger === 4){
                this.incrementHearts();
            }
            clearInterval(this.hungerInterval);
            this.startHungerInterval();
            this.incrementFoodHealthBar()
        }
      
    }

    quench(){
        if (this.thirst < 4){
            this.thirst += 1;
            if (this.thirst === 4){
                this.incrementHearts();
            }
            clearInterval(this.thirstInterval);
            this.startThirstInterval();
            this.incrementWaterHealthBar();
        }
      
    }

    clean(){
        if(this.cleanliness < 4){
            this.cleanliness += 1;
            if (this.cleanliness === 4){
                this.incrementHearts();
            }
            clearInterval(this.cleanlinessInterval);
            this.startCleanlinessInterval();
            this.incrementCleanlinessHealthBar();
        }
       
    }

    startHungerInterval(){
        this.hungerInterval = setInterval(() => {
            this.hunger -= 1;
            this.decrementFoodHealthBar();
        },5000);
    }

    startThirstInterval(){
        this.thirstInterval = setInterval(() => {
            this.thirst -= 1;
            this.decrementWaterHealthBar();
        },5000);
    }

    startCleanlinessInterval(){
        this.cleanlinessInterval = setInterval(() => {
            this.cleanliness -= 1;
            this.decrementCleanlinessHealthBar();
        },5000);
    }

    gameOver(){
        let gameOverImg = new Image();
        gameOverImg.src = "./src/models/sunny_gameOver.png";
        document.body.appendChild(gameOverImg);
        gameOverImg.setAttribute("id","gameOver")
        this.playAgain.classList.remove("hidden")
        this.mainMenu.classList.remove("hidden")
        let losingImg = new Image();
        losingImg.src = ("./src/assets/background/losing_bg_img.png") 
        document.body.appendChild(losingImg);
        losingImg.setAttribute("id","losingImg")
        let deadSunnyImg = new Image();
        deadSunnyImg.src = ".src/models/sunny_dead.png";
        document.body.appendChild(deadSunnyImg);
        deadSunnyImg.setAttribute("id","deadSunny");

        this.mainMenu.addEventListener("click",()=>{
            this.canvas.classList.remove("hidden");
            this.canvas3.classList.add("hidden");
        });



    


    }



}

export default SunnyStatus;

//fix padding
//sunny animation
//game over stop game and play end game sound and stop bg
//play again