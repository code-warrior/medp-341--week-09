const WIDTH = 640,
    HEIGHT = 480,
    DIAMETER = 44,
    ALPHA = 12;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    noStroke();
}

function draw() {
    fill(0, ALPHA);
    rect(0, 0, WIDTH, HEIGHT);

    fill(255);
    ellipse(mouseX, mouseY, DIAMETER);
}
