const ball = {

    x: 0,
    y: 0,
    size: 0.25,
    sx: 10,
    sy: -220,
    move: false
};

function updateBall(dt) {

    if ( !ball.move ) {

        ball.x = paddle.x + paddle.width/2;
        ball.y = paddle.y - ball.size - ball.size/2;
        return;
    }

    // BALL MOVE
    ball.x += ball.sx * dt;
    ball.y += ball.sy * dt;

    // BALL COLLISION
    if ( ball.x < 0 || ball.x + ball.size > canvas.width ) {

        ball.sx *= -1;

        // BALL HIT WALL SOUND EFFECT
        ballSound();
    }
    else if ( ball.y < 0 ) {

        ball.sy *= -1;

        // BALL HIT WALL SOUND EFFECT
        ballSound();
    }

    // BALL FALL DOWN
    if ( ball.y > canvas.height ) loseLive();
}

function drawBall() {

    // DRAW BALL
    g.fillStyle = "white";
    g.beginPath();
    g.arc(
        ball.x,
        ball.y,
        ball.size,
        0,
        Math.PI * 2
    );
    g.fill();
}