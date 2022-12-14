
import { cloneUniformsGroups, CubeTexture } from "three";
import GameView from "./game_view";

class SunnyStatus {
  constructor(ctx) {

    var sunnyImg1 = new Image();
    sunnyImg1.src = "./src/models/sunny_1.png";
    document.body.appendChild(sunnyImg1);
    sunnyImg1.setAttribute("id", "sunnyImg1");

    var sunnyImg2 = new Image();
    sunnyImg2.src = "./src/models/sunny_2.png";
    document.body.appendChild(sunnyImg2);
    sunnyImg2.setAttribute("id", "sunnyImg2");
    sunnyImg2.classList.add("hidden");
    let imgToDraw = "two";

    this.mainSunny = setInterval(() => {
      if (imgToDraw === "one") {
        sunnyImg2.classList.add("hidden");
        sunnyImg1.classList.remove("hidden");
      } else {
        sunnyImg1.classList.add("hidden");
        sunnyImg2.classList.remove("hidden");
      }
      imgToDraw = imgToDraw === "one" ? "two" : "one";
    }, 300);

   

    this.sunnyElements = {
      healthOne1: document.querySelector("#healthbar1-img"),
      healthOne2: document.querySelector("#healthbar2-img"),
      healthOne3: document.querySelector("#healthbar3-img"),
      healthOne4: document.querySelector("#healthbar4-img"),
      healthOne5: document.querySelector("#healthbar5-img"),
      healthTwo1: document.querySelector("#healthbar2-1-img"),
      healthTwo2: document.querySelector("#healthbar2-2-img"),
      healthTwo3: document.querySelector("#healthbar2-3-img"),
      healthTwo4: document.querySelector("#healthbar2-4-img"),
      healthTwo5: document.querySelector("#healthbar2-5-img"),
      healthThree1: document.querySelector("#healthbar3-1-img"),
      healthThree2: document.querySelector("#healthbar3-2-img"),
      healthThree3: document.querySelector("#healthbar3-3-img"),
      healthThree4: document.querySelector("#healthbar3-4-img"),
      healthThree5: document.querySelector("#healthbar3-5-img"),
    };

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
      emptyHeart5: document.querySelector("#emptyHeartFive"),
    };

    this.happyStuff = {
      kibbles: document.getElementById("food-img"),
      aqua: document.getElementById("water-img"),
      bodysoap: document.getElementById("shampoo-img"),
    };

    this.waterImg = document.getElementById("water-img");
    this.foodImg = document.getElementById("food-img");
    this.thirstImg = document.getElementById("thirst-img");
    this.hungerImg = document.getElementById("hunger-img");
    this.hygieneImg = document.getElementById("hygiene-img");
    this.shampooImg = document.getElementById("shampoo-img");

    this.hungerLevel = document.getElementById("hunger-level");
    this.thirstLevel = document.getElementById("thirst-level");
    this.hygieneLevel = document.getElementById("hygiene-level");

    this.textPlayButton = document.getElementById("textplay-btn")
    this.canvas = document.getElementById("game-canvas");
    this.canvas3 = document.getElementById("adventureCanvas");

    this.hunger = 4;
    this.thirst = 4;
    this.cleanliness = 4;
    this.heart = 5;

    this.text = document.getElementById("textplay-btn");

    this.startHungerInterval();
    this.startThirstInterval();
    this.startCleanlinessInterval();
    this.scoreTracker();
    

    this.happyStuff.kibbles.addEventListener("click", () => {
      this.feed();
    });
    this.happyStuff.aqua.addEventListener("click", () => {
      this.quench();
    });
    this.happyStuff.bodysoap.addEventListener("click", () => {
      this.clean();
    });
  }

  scoreTracker() {
    console.log("hello from score")
    var score = 0;

    var scoreInterval = setInterval(function () {
        score +=1
      
        if (this.gameOver()) {
            clearInterval(scoreInterval); 
        }
    }, 1000); // Run for each second
};

  decrementFoodHealthBar() {
    if (this.hunger === 3) {
      this.sunnyElements.healthOne1.classList.add("hidden");
    }
    if (this.hunger === 2) {
      this.sunnyElements.healthOne2.classList.add("hidden");
    }
    if (this.hunger === 1) {
      this.sunnyElements.healthOne3.classList.add("hidden");
    }
    if (this.hunger <= 0) {
      this.sunnyElements.healthOne4.classList.add("hidden");
      setTimeout(() => {
        this.decrementHearts();
      }, 1000);
    }
  }

  decrementWaterHealthBar() {
    if (this.thirst === 3) {
      this.sunnyElements.healthTwo1.classList.add("hidden");
    }
    if (this.thirst === 2) {
      this.sunnyElements.healthTwo2.classList.add("hidden");
    }
    if (this.thirst === 1) {
      this.sunnyElements.healthTwo3.classList.add("hidden");
    }
    if (this.thirst <= 0) {
      this.sunnyElements.healthTwo4.classList.add("hidden");
      setTimeout(() => {
        this.decrementHearts();
      }, 1000);
    }
  }

  decrementCleanlinessHealthBar() {
    if (this.cleanliness === 3) {
      this.sunnyElements.healthThree1.classList.add("hidden");
    }
    if (this.cleanliness === 2) {
      this.sunnyElements.healthThree2.classList.add("hidden");
    }
    if (this.cleanliness === 1) {
      this.sunnyElements.healthThree3.classList.add("hidden");
    }
    if (this.cleanliness <= 0) {
      this.sunnyElements.healthThree4.classList.add("hidden");
      setTimeout(() => {
        this.decrementHearts();
      }, 1000);
    }
  }

  incrementFoodHealthBar() {
    if (this.hunger === 4) {
      this.sunnyElements.healthOne1.classList.remove("hidden");
    }
    if (this.hunger === 3) {
      this.sunnyElements.healthOne2.classList.remove("hidden");
    }
    if (this.hunger === 2) {
      this.sunnyElements.healthOne3.classList.remove("hidden");
    }
    if (this.hunger === 1) {
      this.sunnyElements.healthOne4.classList.remove("hidden");
    }
  }

  incrementWaterHealthBar() {
    if (this.thirst === 4) {
      this.sunnyElements.healthTwo1.classList.remove("hidden");
    }
    if (this.thirst === 3) {
      this.sunnyElements.healthTwo2.classList.remove("hidden");
    }
    if (this.thirst === 2) {
      this.sunnyElements.healthTwo3.classList.remove("hidden");
    }
    if (this.thirst === 1) {
      this.sunnyElements.healthTwo4.classList.remove("hidden");
    }
  }

  incrementCleanlinessHealthBar() {
    if (this.cleanliness === 4) {
      this.sunnyElements.healthThree1.classList.remove("hidden");
    }
    if (this.cleanliness === 3) {
      this.sunnyElements.healthThree2.classList.remove("hidden");
    }
    if (this.cleanliness === 2) {
      this.sunnyElements.healthThree3.classList.remove("hidden");
    }
    if (this.cleanliness === 1) {
      this.sunnyElements.healthThree4.classList.remove("hidden");
    }
  }

  decrementHearts() {
    if (this.heart >= 1) {
      this.heart -= 1;
      this.displayEmptyHearts();
    }
  }

  incrementHearts() {
    if (this.heart < 5) {
      this.heart += 1;
      this.displayFullHearts();
    }
  }

  displayFullHearts() {
    if (this.heart === 5) {
      this.sunnyHearts.fullHeart1.classList.remove("hidden");
    }
    if (this.heart === 4) {
      this.sunnyHearts.fullHeart2.classList.remove("hidden");
    }
    if (this.heart === 3) {
      this.sunnyHearts.fullHeart3.classList.remove("hidden");
      let cryImg = new Image();
      cryImg.src = "./src/models/sunny_crying.png";
      document.body.appendChild(cryImg);
      cryImg.setAttribute("id", "sunnyCry");
      setTimeout(() => {
        cryImg.remove();
      }, 2000);
    }
    if (this.heart === 2) {
      this.sunnyHearts.fullHeart4.classList.remove("hidden");
    }
    if (this.heart === 1) {
      this.sunnyHearts.fullHeart5.classList.remove("hidden");
    }
  }

  displayEmptyHearts() {
    if (this.heart === 4) {
      this.sunnyHearts.fullHeart1.classList.add("hidden");
    }
    if (this.heart === 3) {
      this.sunnyHearts.fullHeart2.classList.add("hidden");
    }
    if (this.heart === 2) {
      this.sunnyHearts.fullHeart3.classList.add("hidden");
    }
    if (this.heart === 1) {
      this.sunnyHearts.fullHeart4.classList.add("hidden");
    }
    if (this.heart === 0) {
      this.sunnyHearts.fullHeart5.classList.add("hidden");
      setTimeout(() => {
        this.gameOver();
      }, 1000);
    }
  }

  feed() {
    if (this.hunger < 4) {
      this.hunger += 1;
      if (this.hunger === 4) {
        this.incrementHearts();
      }
      clearInterval(this.hungerInterval);
      this.startHungerInterval();
      this.incrementFoodHealthBar();
    }
  }

  quench() {
    if (this.thirst < 4) {
      this.thirst += 1;
      if (this.thirst === 4) {
        this.incrementHearts();
      }
      clearInterval(this.thirstInterval);
      this.startThirstInterval();
      this.incrementWaterHealthBar();
    }
  }

  clean() {
    if (this.cleanliness < 4) {
      this.cleanliness += 1;
      if (this.cleanliness === 4) {
        this.incrementHearts();
      }
      clearInterval(this.cleanlinessInterval);
      this.startCleanlinessInterval();
      this.incrementCleanlinessHealthBar();
    }
  }

  startHungerInterval() {
    this.hungerInterval = setInterval(() => {
      this.hunger -= 1;
      this.decrementFoodHealthBar();
    }, 4500);
  }

  startThirstInterval() {
    this.thirstInterval = setInterval(() => {
      this.thirst -= 1;
      this.decrementWaterHealthBar();
    }, 3500);
  }

  startCleanlinessInterval() {
    this.cleanlinessInterval = setInterval(() => {
      this.cleanliness -= 1;
      this.decrementCleanlinessHealthBar();
    }, 4500);
  }

  gameOver() {
    let gameOverImg = new Image();
    gameOverImg.src = "./src/models/sunny_gameOver.png";
    document.body.appendChild(gameOverImg);
    gameOverImg.setAttribute("id", "gameOver");
    this.textPlayButton.classList.add("hidden");

    let losingImg = new Image();
    losingImg.src = "./src/assets/background/losing_bg_img.png";
    document.body.appendChild(losingImg);
    losingImg.setAttribute("id", "losingImg");
    let deadSunnyImg = new Image();
    deadSunnyImg.src = "./src/models/sunny_sleeping.png";
    document.body.appendChild(deadSunnyImg);
    deadSunnyImg.setAttribute("id", "deadSunny");
    document.querySelector("#water").classList.add("hidden");
    document.querySelector("#food").classList.add("hidden");
    document.querySelector("#soap").classList.add("hidden");


    this.sunnyHearts.fullHeart1.classList.add("hidden");
    this.sunnyHearts.fullHeart2.classList.add("hidden");
    this.sunnyHearts.fullHeart3.classList.add("hidden");
    this.sunnyHearts.fullHeart4.classList.add("hidden");
    this.sunnyHearts.fullHeart5.classList.add("hidden");
    this.sunnyHearts.emptyHeart1.classList.add("hidden");
    this.sunnyHearts.emptyHeart2.classList.add("hidden");
    this.sunnyHearts.emptyHeart3.classList.add("hidden");
    this.sunnyHearts.emptyHeart4.classList.add("hidden");
    this.sunnyHearts.emptyHeart5.classList.add("hidden");
    this.sunnyElements.healthOne1.classList.add("hidden");
    this.sunnyElements.healthOne2.classList.add("hidden");
    this.sunnyElements.healthOne3.classList.add("hidden");
    this.sunnyElements.healthOne4.classList.add("hidden");
    this.sunnyElements.healthOne5.classList.add("hidden");
    this.sunnyElements.healthTwo1.classList.add("hidden");
    this.sunnyElements.healthTwo2.classList.add("hidden");
    this.sunnyElements.healthTwo3.classList.add("hidden");
    this.sunnyElements.healthTwo4.classList.add("hidden");
    this.sunnyElements.healthTwo5.classList.add("hidden");
    this.sunnyElements.healthThree1.classList.add("hidden");
    this.sunnyElements.healthThree2.classList.add("hidden");
    this.sunnyElements.healthThree3.classList.add("hidden");
    this.sunnyElements.healthThree4.classList.add("hidden");
    this.sunnyElements.healthThree5.classList.add("hidden");
    this.waterImg.classList.add("hidden");
    this.foodImg.classList.add("hidden");
    this.thirstImg.classList.add("hidden");
    this.hungerImg.classList.add("hidden");
    this.hygieneImg.classList.add("hidden");
    this.shampooImg.classList.add("hidden");
    this.hungerLevel.classList.add("hidden");
    this.thirstLevel.classList.add("hidden");
    this.hygieneLevel.classList.add("hidden");
    clearInterval(this.mainSunny);
    if (document.querySelector("#sunnyImg1")){
      document.querySelector("#sunnyImg1").remove();
    }
    if (document.querySelector("#sunnyImg2")){
      document.querySelector("#sunnyImg2").remove();
    }


    document.querySelector("#returnToMenu-btn").classList.remove("hidden");
   

  }
}

export default SunnyStatus;
