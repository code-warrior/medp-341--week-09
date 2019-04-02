const
    WIDTH = 768,
    HEIGHT = 768,
    WIDTH_OF_MOUSE_IMAGE = 79,
    HEIGHT_OF_MOUSE_IMAGE = 96;

let backgroundImage,
    mouseImage;

function setup () {
    createCanvas(WIDTH, HEIGHT);

    backgroundImage = loadImage(`../img/cup-of-hot-chocolate.png`);
    mouseImage = loadImage(`../img/squirrel.png`);
}

function draw() {
    image(backgroundImage, 0, 0, WIDTH, HEIGHT);
    image(mouseImage, (mouseX - (WIDTH_OF_MOUSE_IMAGE / 2)), (mouseY - (HEIGHT_OF_MOUSE_IMAGE / 2)));
}
