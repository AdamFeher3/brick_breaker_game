// LEVELS
const level = [

    [
        [0,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,0]
    ],
    [
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,0]
    ],
    [
        [1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0,0]
    ],
    [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0]
    ],
    [
        [1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1]
    ]
];

const brick = [];

let remain = 0;

// SET LEVEL
function setBrick() {

    const r = Math.floor(Math.random() * level.length);

    const l = level[r];

    for ( let j = 0; j < l.length; j++ ) {
        brick[j] = [];

        for ( let i = 0; i < l[j].length; i++ ) {

            if ( l[j][i] === 1 ) remain++;

            let color = "";

            if      ( j === 0 ) color = "red";
            else if ( j === 1 ) color = "green";
            else if ( j === 2 ) color = "cyan";
            else if ( j === 3 ) color = "yellow";
            else if ( j === 4 ) color = "royalblue";

            brick[j][i] = l[j][i] === 0 ?
            0 : { b: 1, c: color, a: 1, broken: false };
        }
    }
}

function updateBrick(dt) {

    // FADE AWAY BROKEN BRICK
    for ( let j = 0; j < brick.length; j++ ) {
        for ( let i = 0; i < brick[j].length; i++ ) {

            if ( brick[j][i] === 0 ) continue;

            if ( brick[j][i].broken ) {

                brick[j][i].a -= dt * 6;
                brick[j][i].c = `rgba(255,255,255,${brick[j][i].a})`;
                if ( brick[j][i].a <= 0 ) brick[j][i] = 0;
            }
        }
    }

    if ( !ball.move ) return;

    const lastx = ball.x - ball.sx * dt;
    const lasty = ball.y - ball.sy * dt;

    // BALL COLLISION WITH BRICKS
    for ( let j = 0; j < brick.length; j++ ) {
        for ( let i = 0; i < brick[j].length; i++ ) {

            if ( brick[j][i] === 0 || brick[j][i].broken ) continue;

            const x = i * game.size * 2;
            const y = j * game.size;
            const w = game.size * 2;
            const h = game.size;

            if (
                ball.x + ball.size > x &&
                ball.x < x + w &&
                ball.y + ball.size > y &&
                ball.y < y + h
            ) {
                // BOUNCE HORIZONTALLY
                if ( lastx + ball.size <= x || lastx >= x + w ) ball.sx *= -1;

                // BOUNCE VERTICALLY
                else if ( lasty + ball.size <= y || lasty >= y + h ) ball.sy *= -1;
                else {
                    const minx = Math.min(
                        ball.x + ball.size - x,
                        x + w - ball.x
                    );

                    const miny = Math.min(
                        ball.y + ball.size - y,
                        y + h - ball.y
                    );

                    if ( minx < miny ) ball.sx *= -1;
                    else ball.sy *= -1;
                }

                // REMOVE BRICK
                brick[j][i].c = "rgba(255,255,255,1)";
                brick[j][i].broken = true;
                remain--;

                // BREAK BRICK SOUND EFFECT
                brickSound();

                // ADD SCORE
                addScore();

                break;
            }
        }
    }

    if ( remain <= 0 ) {

        remain = 0;
        ball.move = false;
        brick.length = 0;

        setTimeout(() => {

            if ( game.state !== PLAY ) return;
            setBrick();
        }, 150);

        // INCREASE LEVEL SCORE
        addLevel();
    }
}

function drawBrick() {

    // DRAW BRICKS
    for ( let j = 0; j < brick.length; j++ ) {
        for ( let i = 0; i < brick[j].length; i++ ) {

            if ( brick[j][i] === 0 ) continue;

            const x = i * game.size * 2 + 2;
            const y = j * game.size + 4;
            const w = game.size * 2 - 4;
            const h = game.size - 4;

            g.fillStyle = brick[j][i].c;
            g.fillRect(
                x, y, w, h
            );
        }
    }
}