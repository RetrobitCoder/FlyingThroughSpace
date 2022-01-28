class Star {
    constructor(x, y, image) {
        this.width = 25;
        this.height = 24;

        this.x = x;
        this.y = y;

        this.image = image;
    }

    updatePos(x, y) {
        this.x = x;
        this.y =y;
    }

    display() {
        image(this.image, this.x, this.y);
    }
}

class StarField {
    constructor() {
        var star1 = loadImage('resources/images/star1.png');
        var star2 = loadImage('resources/images/star2.png');
        var star3 = loadImage('resources/images/star3.png');

        this.star_images = [star1, star2, star3];

        this.starfield = [];

        for (var i = 0; i < 70; i++) {
            var x = random(windowWidth);
            var y = random(windowHeight);

            var image = random(this.star_images);

            this.starfield.push(new Star(x, y, image));
        }
    }

    repositionStar(star) {
        var x = random(windowWidth);
        var y = random(windowHeight);

        star.updatePos(x, y);
    }

    reposition() {
        this.starfield.forEach(s => this.repositionStar(s));
    }

    display() {
        this.starfield.forEach(s => s.display());
    }
}