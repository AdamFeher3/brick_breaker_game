function gameOver() {
    
    game.state = GO;
    cancelAnimationFrame(game.GL);
    game.GL = null;

    setTimeout(() => {
        if ( game.state === GO )
            gameoverScreen.style.display = "grid";
    }, 500);
}

// RESTART GAME
restartBtn.addEventListener("click", () => {
    if ( game.state === GO ) restartGame();
});