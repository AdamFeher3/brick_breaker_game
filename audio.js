const paddleAudio = new Audio("./audio/paddle.mp3");
const ballAudio = new Audio("./audio/ball.mp3");
const brickAudio = new Audio("./audio/brick.mp3");
const buttonAudio = new Audio("./audio/button.mp3");
const gameoverAudio = new Audio("./audio/gameover.mp3");
const healthAudio = new Audio("./audio/health.mp3");

/**
 * PLAY SOUND EFFECTS
 */

for ( let btn of btns ) {

    btn.addEventListener("mouseover", () => {

        buttonAudio.pause();
        buttonAudio.currentTime = 0;
        buttonAudio.play();
    });
}

function paddleSound() {

    paddleAudio.pause();
    paddleAudio.volume = 0.4;
    paddleAudio.currentTime = 0.1;
    paddleAudio.play();
}

function ballSound() {
    
    ballAudio.pause();
    ballAudio.volume = 0.3;
    ballAudio.currentTime = 0.1;
    ballAudio.play();
}

function brickSound() {
    
    brickAudio.pause();
    brickAudio.volume = 0.2;
    brickAudio.currentTime = 0.2;
    brickAudio.play();
}

function healthSound() {
    
    healthAudio.pause();
    healthAudio.volume = 0.3;
    healthAudio.currentTime = 0.1;
    healthAudio.play();
}

function gameoverSound() {
    
    gameoverAudio.pause();
    gameoverAudio.currentTime = 0;
    gameoverAudio.play();
}