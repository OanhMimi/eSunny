class Menu{
    constructor(params){
        this.dimX = params["dim"][0];
        this.dimY = params["dim"][0];
        this.ctx = ctx;
        this.menuBackground = new Image();
        this.menuBackground.src = './src/assets/menu/sunny_title_screen_bg.png';
    }

    displayMenuScreen(ctx){
        ctx.clearRect(0,0,this.dimX,this.dimY); //clearRect erases the pixels in a rectangular area by setting them to transparant black
        ctx.drawImage(this.menuBackground,0,0);
    }
}   

export default Menu;
