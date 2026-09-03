function gameOver() {
    
    game.state = GO;
    cancelAnimationFrame(game.GL);
    game.GL = null;

    setTimeout(() => {
        if ( game.state === GO ) {

            gameoverScreen.style.display = "grid";

            // PLAY GAME OVER SOUND EFFECT
            gameoverSound();
        }
    }, 500);
}

// RESTART GAME
restartBtn.addEventListener("click", () => {
    if ( game.state === GO ) restartGame();
});