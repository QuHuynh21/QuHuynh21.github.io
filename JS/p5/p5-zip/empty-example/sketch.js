var img;
function preload() { 
    img = loadImage("./album_cover.1.png");
}
function setup() {
    createCanvas(400,400);
    image(img, 0, 0);
}