
const sunnyElements = {
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

const sunnyHearts = {
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

class SunnyStatus{

    constructor(){
        this.hunger = 4;
        this.thirst = 4;
        this.cleanliness = 4;
        this.heart = 5;

        this.startHungerInterval();
        this.startThirstInterval();
        this.startCleanlinessInterval();

    }

    decrementFoodHealthBar(){
        if (this.hunger === 3){
            sunnyElements.healthOne1.classList.add("hidden");
        } 
        if (this.hunger === 2){
            sunnyElements.healthOne2.classList.add("hidden");
        } 
        if (this.hunger === 1){
            sunnyElements.healthOne3.classList.add("hidden");
        } 
        if (this.hunger === 0){
            sunnyElements.healthOne4.classList.add("hidden");
            this.decrementHearts();
        }
    }

    decrementWaterHealthBar(){
        if (this.thirst === 3){
            sunnyElements.healthTwo1.classList.add("hidden");
        } 
        if (this.thirst === 2){
            sunnyElements.healthTwo2.classList.add("hidden");
        } 
        if (this.thirst === 1){
            sunnyElements.healthTwo3.classList.add("hidden");
        } 
        if (this.thirst === 0){
            sunnyElements.healthTwo4.classList.add("hidden");
            this.decrementHearts();
        }
    }


    decrementCleanlinessHealthBar(){
        if (this.cleanliness === 3){
            sunnyElements.healthThree1.classList.add("hidden");
        } 
        if (this.cleanliness === 2){
            sunnyElements.healthThree2.classList.add("hidden");
        } 
        if (this.cleanliness === 1){
            sunnyElements.healthThree3.classList.add("hidden");
        } 
        if (this.cleanliness === 0){
            sunnyElements.healthThree4.classList.add("hidden");
            setTimeout(() => {
                this.decrementHearts();
            }, 5000);
        }
    }

    decrementHearts(){
        if (this.heart >= 1){
            this.heart -= 1
            this.displayEmptyHearts();
        }
        if (this.heart === 0) {
            setTimeout(() => {
                this.gameOver();
            }, 5000);
        }
    }

    incrementHearts(){
        if (this,heart < 5){
            this.heart += 1
        }
    }

    displayEmptyHearts(){
        if (this.heart === 4){
            sunnyHearts.fullHeart1.classList.add("hidden");
        } 
        if (this.hunger === 3){
            sunnyHearts.fullHeart2.classList.add("hidden");
        } 
        if (this.hunger === 2){
            sunnyHearts.fullHeart3.classList.add("hidden");
        } 
        if (this.hunger === 1){
            sunnyHearts.fullHeart4.classList.add("hidden");
        }
        if (this.hunger === 0){
            sunnyHearts.fullHeart5.classList.add("hidden");
        }

        
    }


    feed(){
        //when we drag food into sunny's mouth

        if (this.hunger < 4) {
            this.hunger += 1;
            clearInterval(this.hungerInterval);
            this.startHungerInterval();
        }
        if (this,hunger === 4){
            this.incrementHearts();
        }
    }

    quench(){
        if (this.thirst <= 4){
            this.thirst += 1;
            clearInterval(this.thirstInterval);
        }
    }

    clean(){
        if(this.cleanliness <= 4){
            this.cleanliness += 1;
            clearInterval(this.cleanlinessInterval);
        }
    }

    startHungerInterval(){
        this.hungerInterval = setInterval(() => {
            this.hunger -= 1;
        },25000);
        this.decrementFoodHealthBar();
    }

    startThirstInterval(){
        this.thirstInterval = setInterval(() => {
            this.thirst -= 1;
        },25000);
    }

    startCleanlinessInterval(){
        this.cleanlinessInterval = setInterval(() => {
            this.cleanliness -= 1;
        },25000);
        this.decrementCleanlinessHealthBar();
    }

    gameOver(){
        console.log("game is over")
    }





}