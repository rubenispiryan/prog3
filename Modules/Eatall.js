let Animal = require("./Animal.js")


module.exports = class Eatall extends Animal {
    constructor(x, y) {
    super(x,y)
        this.energy = 20;
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        return super.getDirections(t);
    }



    move() {

        var fundCords = this.getDirections(0);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }


    eat(a) {
        this.move();
        // this.energy--;
        var fundCords = this.getDirections(2);
        var fundCords1 = this.getDirections(3);  
        fundCords1 = fundCords1.concat(fundCords)
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;


            for (var i in eatarr) {
                if (x == eatarr[i].x && y == eatarr[i].y) {
                    eatarr.splice(i, 1);
                }
            }
            for (var i in GishArr) {
                if (x == GishArr[i].x && y == GishArr[i].y) {
                    GishArr.splice(i, 1);
                }
            }

            if (this.multiply == a) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            this.energy--

            if (this.energy <= 0) {
                this.die();
            }
        }
    }


    

    die() {
        matrix[this.y][this.x] = 0;

        for (var i in eatallArr) {
            if (this.x == eatallArr[i].x && this.y == eatallArr[i].y) {
                eatallArr.splice(i, 1);
            }
        }
    }

}