
import GameView from "./scripts/game_view.js";

window.addEventListener('DOMContentLoaded', () =>{
    window.GameView = GameView;

    const gameOptions = {
        dim: [1100,680]
    }

    const g = new GameView(gameOptions);

  
    
})
