const menuScreen = document.getElementById("menu");
const gameplayScreen = document.getElementById("gameplay");
const startBtn = document.getElementById("start");
const leveltext = document.getElementById("level");
const scoretext = document.getElementById("score");
const lives = document.getElementsByClassName("lv");
const gameoverScreen = document.getElementById("gameover");
const restartBtn = document.getElementById("restart");

const btns = [
    startBtn, restartBtn
];

// CANVAS
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

document.body.onload = () => { menuScreen.style.display = "grid"; }

// START GAME
startBtn.addEventListener("click", () => {

    menuScreen.style.display = "none";
    gameplayScreen.style.display = "grid";

    // SET CANVAS SIZE
    canvas.width = game.width * game.size;
    canvas.height = game.height * game.size;

    // SET PADDLE
    paddle.width = paddle.width * game.size;
    paddle.height = paddle.height * game.size;
    paddle.x = canvas.width/2 - paddle.width/2;
    paddle.y = canvas.height - paddle.height * 2;

    // SET BALL
    ball.size = ball.size * game.size;
    ball.x = paddle.x + paddle.width/2;
    ball.y = paddle.y - ball.size - ball.size/2;

    // SET LEVEL
    setBrick();

    g.imageSmoothingEnabled = false;

    game.state = PLAY;

    // START GAME LOOP
    game.GL = requestAnimationFrame(gameLoop);
});

// GAME STATES
const MENU = "menu";
const PLAY = "play";
const GO = "gameover";

const game = {

    width: 16,
    height: 16,
    size: 20,
    state: MENU,
    GL: null
};

// UPDATE GAME
function update(dt) {

    updateBall(dt);
    updateBrick(dt);
    updatePaddle(dt);
}

// DRAW GAME
function draw() {

    g.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawBrick();
    drawPaddle();
}

// RESTART GAME
function restartGame() {

    cancelAnimationFrame(game.GL);
    game.GL = null;

    // RESET PADDLE
    paddle.x = canvas.width/2 - paddle.width/2;
    paddle.left = false;
    paddle.right = false;

    // RESET BALL
    ball.x = paddle.x + paddle.width/2;
    ball.y = paddle.y - ball.size - ball.size/2;
    ball.sx = 10;
    ball.sy = -220;
    ball.move = false;

    // RESET HEALTH
    health = 3;
    for ( let l of lives )
        l.style.backgroundColor = "white";

    // RESET LEVEL
    remain = 0;
    brick.length = 0;

    // RESET SCORE
    scoreNum = 0;
    levelNum = 1;
    scoretext.textContent = `SCORE: ${scoreNum}`;
    leveltext.textContent = `LEVEL: ${levelNum}`;

    // SET LEVEL
    setBrick();

    game.state = PLAY;

    // START GAME LOOP
    game.GL = requestAnimationFrame(gameLoop);

    setTimeout(() => {
        gameoverScreen.style.display = "none";
    }, 150);
}