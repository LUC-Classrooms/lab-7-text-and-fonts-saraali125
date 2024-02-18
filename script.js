/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Papyrus");
}

function draw() {
  background(190, 90, 400);

  if (mouseIsPressed) {
    textSize(56);
    text("Too many cheetahs!", 40, 160);
  } else {
    textSize(22);
    text("Why dont cats play poker in the jungle?", 80, 60);
  }
}
