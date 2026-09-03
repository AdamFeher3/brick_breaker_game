let scoreNum = 0;
let levelNum = 1;

function updateScore() {

    // UPDATE SCORE AND LEVEL
    scoretext.textContent = `SCORE: ${scoreNum}`;
    leveltext.textContent = `LEVEL: ${levelNum}`;
}

function addScore() {

    scoreNum++;
    scoretext.style.color = "lightgreen";
    scoretext.style.fontSize = "3.1vmin";

    setTimeout(() => {

        scoretext.style.color = "white";
        scoretext.style.fontSize = "3vmin";
    }, 100);

    updateScore();
}

function addLevel() {

    levelNum++;
    leveltext.style.color = "lightgreen";
    leveltext.style.fontSize = "3.1vmin";

    setTimeout(() => {

        leveltext.style.color = "white";
        leveltext.style.fontSize = "3vmin";
    }, 100);

    updateScore();
}