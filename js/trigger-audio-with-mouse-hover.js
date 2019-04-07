const
    WIDTH = 600,
    HEIGHT = 600,
    TOP_LEFT = 0,
    TOP_RIGHT = 1,
    BOTTOM_RIGHT = 2,
    BOTTOM_LEFT = 3,
    audioFiles = [
        // From https://freesound.org/people/Zabuhailo/sounds/464989/
        `../audio/464989__zabuhailo__electricguitarstringhiss.flac`,
        // From https://freesound.org/people/Mozfoo/sounds/464521/
        `../audio/464521__mozfoo__dramatic-ticking-clock.wav`,
        // From https://freesound.org/people/EmiP/sounds/464619/
        `../audio/464619__emip__animalcall03.wav`,
        // From https://freesound.org/people/elynch0901/sounds/464631/
        `../audio/464631__elynch0901__beat-box-segment-2.wav`
    ];

let topLeftAudio,
    topRightAudio,
    bottomLeftAudio,
    bottomRightAudio,
    previousMouseLocation = TOP_LEFT,
    currentlyPlaying = TOP_LEFT;

let drawQuadrant = (quadrant) => {
    noStroke();

    switch (quadrant) {
        case `top left`:
            fill(80, 20, 20);
            rect(0, 0, (WIDTH / 2), (HEIGHT / 2));

            break;

        case `top right`:
            fill(20, 80, 20);
            rect((WIDTH / 2), 0, WIDTH, (HEIGHT / 2));

            break;

        case `bottom right`:
            fill(20, 20, 80);
            rect((WIDTH / 2), (HEIGHT / 2), WIDTH, HEIGHT);

            break;

        case `bottom left`:
            fill(80, 20, 80);
            rect(0, (HEIGHT / 2), (WIDTH / 2), HEIGHT);

            break;

        default:
            break;
    }
};

function preload () {
    topLeftAudio = loadSound(audioFiles[0]);
    topRightAudio = loadSound(audioFiles[1]);
    bottomLeftAudio = loadSound(audioFiles[2]);
    bottomRightAudio = loadSound(audioFiles[3]);
}

function setup () {
    createCanvas(WIDTH, HEIGHT);

    drawQuadrant(`top left`);
    drawQuadrant(`top right`);
    drawQuadrant(`bottom left`);
    drawQuadrant(`bottom right`);
}

function draw () {
    if ((mouseX >= 0) && (mouseX < (WIDTH / 2)) &&
        (mouseY >= 0) && (mouseY < (HEIGHT / 2))) {
        if (previousMouseLocation !== TOP_LEFT) {
            topLeftAudio.play();
            currentlyPlaying = TOP_LEFT;
        } else {
            if ((previousMouseLocation === TOP_LEFT) &&
                (currentlyPlaying !== TOP_LEFT)) {
                topLeftAudio.stop();
            }
        }

        previousMouseLocation = TOP_LEFT;
    }

    if ((mouseX >= (WIDTH / 2)) && (mouseX < WIDTH) &&
        (mouseY >= 0) && (mouseY < (HEIGHT / 2))) {
        if (previousMouseLocation !== TOP_RIGHT) {
            topRightAudio.play();

            currentlyPlaying = TOP_RIGHT;
        } else {
            if ((previousMouseLocation === TOP_RIGHT) &&
                (currentlyPlaying !== TOP_RIGHT)) {
                topRightAudio.stop();
            }
        }

        previousMouseLocation = TOP_RIGHT;
    }

    if ((mouseX >= 0) && (mouseX < (WIDTH / 2)) &&
        (mouseY >= (HEIGHT / 2)) && (mouseY < HEIGHT)) {
        if (previousMouseLocation !== BOTTOM_LEFT) {
            bottomLeftAudio.play();

            currentlyPlaying = BOTTOM_LEFT;
        } else {
            if ((previousMouseLocation === BOTTOM_LEFT) &&
                (currentlyPlaying !== BOTTOM_LEFT)) {
                bottomLeftAudio.stop();
            }
        }

        previousMouseLocation = BOTTOM_LEFT;
    }

    if ((mouseX >= (WIDTH / 2)) && (mouseX < WIDTH) &&
        (mouseY >= (HEIGHT / 2)) && (mouseY < HEIGHT)) {
        if (previousMouseLocation !== BOTTOM_RIGHT) {
            bottomRightAudio.play();

            currentlyPlaying = BOTTOM_RIGHT;
        } else {
            if ((previousMouseLocation === BOTTOM_RIGHT) &&
                (currentlyPlaying !== BOTTOM_RIGHT)) {
                bottomRightAudio.stop();
            }
        }

        previousMouseLocation = BOTTOM_RIGHT;
    }
}
