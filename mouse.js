/**
 * MOUSE
 * AND
 * MOBILE
 * CONTROLS
 */
let hold = false;

document.body.addEventListener("pointerdown", () => { 
    
    if ( game.state !== PLAY ) return;

    if ( !ball.move ) {
        
        ball.move = true;
        paddleSound();
    }

    hold = true;
});

document.body.addEventListener("pointermove", (e) => {

    if ( game.state !== PLAY || !hold ) return;

    const rect = canvas.getBoundingClientRect();
    const s = canvas.width / rect.width;
    const mx = (e.clientX - rect.left) * s;

    paddle.x = mx - paddle.width/2;
});

document.body.addEventListener("pointerup", () => { hold = false; });
document.body.addEventListener("pointercancel", () => { hold = false; });

document.body.addEventListener("contextmenu", (e) => { e.preventDefault(); });