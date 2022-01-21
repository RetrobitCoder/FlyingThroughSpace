let ship;

let starfield;

function setup() {
  createCanvas(windowWidth, windowHeight);


  ship = new Ship();

  starfield = new StarField();
}

function update() {
  ship.move();
}

function draw() {
  background(15);

  update();

  starfield.display();

  ship.display();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

  starfield.reposition();

  ship.reposition();
}
