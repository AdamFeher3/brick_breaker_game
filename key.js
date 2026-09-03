// CONTROLS
document.addEventListener("keydown", (e) => {

    if ( game.state !== PLAY ) return;

    const key = e.code;

    // MOVE PADDLE
    if ( key === "KeyA" || key === "ArrowLeft" ) paddle.left = true;
    if ( key === "KeyD" || key === "ArrowRight" ) paddle.right = true;

    // START BALL
    if ( key === "Space" ) if ( !ball.move ) {

        ball.move = true;
        paddleSound();
    }
});

document.addEventListener("keyup", (e) => {

    if ( game.state !== PLAY ) return;

    const key = e.code;

    if ( key === "KeyA" || key === "ArrowLeft" ) paddle.left = false;
    if ( key === "KeyD" || key === "ArrowRight" ) paddle.right = false;
});