class playGame{
    constructor(params){
        this.DIM_X = params["dim"][0]; //set dimension of x & y
        this.DIM_Y = params["dim"][1];
      

    }

    displayPlayGameImg(){
        document.getElementById("adventureCanvas").style.backgroundImage="url(./src/assets/background/playInteractive_bg.png)";
    }

}

    


export default playGame;