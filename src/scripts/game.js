
class Game{
    constructor(params){
        this.DIM_X = params["dim"][0]; //set dimension of x & y
        this.DIM_Y = params["dim"][1];
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      }

    gameDisplay(){
        document.getElementById("housecanvas").style.backgroundImage="url(./src/assets/menu/testing_bg.webp)";
    }



}

export default Game;