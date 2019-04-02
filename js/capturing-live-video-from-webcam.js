let capture;

const WIDTH = 320;
const HEIGHT = 240;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    capture = createCapture(VIDEO);
    capture.size(WIDTH, HEIGHT);
    capture.hide();
}

function draw() {
    image(capture, 0, 0, WIDTH, HEIGHT);
    filter(`gray`);
    filter(`blur`, 2);
    filter(`posterize`, 3);
}
