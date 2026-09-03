// GAME LOOP
let last = null;

function gameLoop(time) {

    if ( last === null ) last = time;

    const dt = (time - last) / 1000;
    last = time;

    if ( game.state === PLAY ) {

        update(dt);
        draw();
    }

    game.GL = requestAnimationFrame(gameLoop);
}