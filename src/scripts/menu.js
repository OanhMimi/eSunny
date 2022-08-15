class Menu{
    constructor(params){
        this.dimX = params["dim"][0];
        this.dimY = params["dim"][0];
        this.ctx = ctx;
        this.menuBackground = new Image(); //built in constructor that creates html image elements 
        this.menuBackground.src = './src/assets/menu/esunny_bg';

    

    }

    displayMenuScreen(ctx){
        ctx.clearRect(0,0,this.dimX,this.dimY); //clearRect erases the pixels in a rectangular area by setting them to transparant black
        ctx.drawImage(this.menuBackground,0,0);
    }
}   

export default Menu;
