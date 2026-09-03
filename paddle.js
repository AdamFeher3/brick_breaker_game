const paddle = {

    x: 0,
    y: 0,
    width: 3,
    height: 0.5,
    speed: 260,
    left: false,
    right: false
};

function updatePaddle(dt) {

    // MOVE PADDLE
    if ( paddle.left ) paddle.x -= paddle.speed * dt;
    if ( paddle.right ) paddle.x += paddle.speed * dt;

    // KEEP PADDLE INSIDE CANVAS
    if ( paddle.x < 0 ) paddle.x = 0;
    if ( paddle.x + paddle.width > canvas.width )
        paddle.x = canvas.width - paddle.width;

    // BALL COLLISION WITH PADDLE
    if (
        paddle.x + paddle.width > ball.x - ball.size &&
        paddle.x < ball.x + ball.size &&
        paddle.y + paddle.height > ball.y - ball.size &&
        paddle.y < ball.y + ball.size &&
        ball.sy > 0
    ) {
        const ballCenter = ball.x;
        const paddleCenter = paddle.x + paddle.width/2;

        const dif = ballCenter - paddleCenter;

        // BOUNCE HORIZONTALLY
        ball.sx = dif * 10;

        // BOUNCE VERTICALLY
        ball.sy = -Math.abs(ball.sy);

        ball.y = paddle.y - ball.size;

        // BALL HIT PADDLE SOUND EFFECT
        paddleSound();
    }
}

function drawPaddle() {

    // DRAW PADDLE
    g.fillStyle = "gray";
    g.fillRect(
        paddle.x,
        paddle.y,
        paddle.width,
        paddle.height
    );
}