class Ship {
    constructor() {
        this.ship_image = loadImage('resources/images/ship.png');
        this.thrust_image = loadImage('resources/images/thrust.png');

        this.ship_width = 104;
        this.ship_height = 84;
        this.ship_x;
        this.ship_y = windowHeight / 2 - (this.ship_height / 2);

        this.thrust_x;
        this.thrust_y = windowHeight / 2 + (this.ship_height / 2) - 4;
        this.thrust_width = 16;

        this.angle = 0;

        this.scalar = 20;
    }

    move() {
        this.ship_x = windowWidth/2 + this.scalar * sin(radians(this.angle));

        this.thrust_x = this.ship_x + (this.ship_width/2) - (this.thrust_width/2);

        this.angle += 0.5;
      }

      reposition() {
        this.ship_y = windowHeight / 2 - (this.ship_height / 2);

        this.thrust_y = windowHeight / 2 + (this.ship_height / 2) - 4;
      }

    display() {
        image(this.ship_image, this.ship_x, this.ship_y);
        image(this.thrust_image, this.thrust_x, this.thrust_y);
    }
}