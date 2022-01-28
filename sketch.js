let astoidfield;

let ship;

let starfield;

function setup() {
  createCanvas(windowWidth, windowHeight);

  astoidfield = new AstroidField();

  ship = new Ship();

  starfield = new StarField();
}

function update() {
  astoidfield.update();

  ship.move();
}

function draw() {
  background(15);

  update();

  starfield.display();

  astoidfield.display();

  ship.display();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

  astoidfield.reposition();

  starfield.reposition();

  ship.reposition();
}
