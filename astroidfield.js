let yMin = -50000;
let yMax = -20;

let speedMin = 1;
let speedMax = 11;

class Astroid {
    constructor(x, y, speed, image) {
        this.x = x;
        this.y = y;

        this.speed = speed;

        this.image = image;

        this.rotation = random(0, 360);
    }

    updatePos(x, y) {
        this.x = x;
        this.y =y;
    }

    update() {
        this.y += this.speed;

        if (this.y > windowHeight) {
            this.x = random(windowWidth);
            this.y = yMin;

            this.speed = random(speedMin, speedMax);
        }
    }

    display() {
        image(this.image, this.x, this.y);
    }
}

class AstroidField {
    constructor() {
        var astroid1 = loadImage('resources/images/meteorBrown_big1.png');
        var astroid2 = loadImage('resources/images/meteorBrown_med1.png');
        var astroid3 = loadImage('resources/images/meteorGrey_small1.png');
        var astroid4 = loadImage('resources/images/meteorGrey_tiny2.png');

        this.astroid_images = [astroid1, astroid2, astroid3, astroid4];

        this.astroidfield = [];

        for (var i = 0; i < 100; i++) {
            var x = random(windowWidth);
            var y = random(yMin, yMax);

            var speed = random (speedMin, speedMax);

            var image = random(this.astroid_images);

            this.astroidfield.push(new Astroid(x, y, speed, image));
        }
    }

    repositionAstroid(astroid) {
        var x = random(windowWidth);
        var y = random(yMin, yMax);

        astroid.updatePos(x, y);
    }

    reposition() {
        this.astroidfield.forEach(a => this.repositionAstroid(a));
    }

    update() {
        this.astroidfield.forEach(a => a.update());
    }

    display() {
        this.astroidfield.forEach(a => a.display());
    }
}