const WIDTH = 600,
    HEIGHT = 400,
    RED = 255,
    GREEN = 100,
    BLUE = 0,
    MIN = 1,
    MAX = 20;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    fill(RED, GREEN, BLUE);
    noStroke();
}

function mouseMoved () {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(mouseX, mouseY, random(MIN, MAX), random(MIN, MAX));
}

function mouseClicked () {
    save(`random.png`);
}
