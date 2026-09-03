let health = 3;

function loseLive() {

    health--;

    if ( health >= 0 ) {

        lives[health].style.background = "red";
    
        setTimeout(() => {
            lives[health].style.background = "none";
        }, 100);
    }

    ball.move = false;
    
    // GAME OVER
    if ( health <= 0 ) gameOver();
}