side = 20;
grassArr = [];
eatarr = [];
GishArr = [];
eatallArr = [];
jurArr = [];
matrix = [];



//  matrix = [
//     [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 2, 0, 1, 2, 1, 1, 1, 1],
//     [0, 3, 1, 0, 0, 2, 0, 0, 2, 0, 0, 1, 1, 5, 1, 1, 1, 0, 0, 0, 0, 0, 1, 3, 0, 1, 0, 0, 1, 1, 1, 2, 1, 1],
//     [2, 1, 0, 2, 0, 1, 0, 2, 1, 0, 1, 1, 0, 3, 2, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 1, 2, 0, 3, 0, 1, 1],
//     [0, 3, 0, 0, 2, 5, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 3, 0, 1, 0, 1, 0, 1, 2],
//     [0, 1, 2, 3, 0, 1, 0, 0, 1, 0, 2, 3, 1, 0, 1, 1, 1, 0, 2, 1, 3, 1, 2, 5, 0, 2, 1, 3, 1, 0, 1, 2, 3, 1],
//     [0, 3, 0, 2, 0, 1, 0, 0, 1, 0, 1, 1, 0, 2, 0, 3, 0, 0, 0, 0, 1, 0, 1, 5, 0, 1, 0, 5, 5, 1, 1, 1, 1, 2],
//     [2, 0, 3, 0, 0, 3, 4, 0, 2, 0, 0, 1, 1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 2],
//     [0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 4, 4, 1, 1, 5, 2, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
//     [0, 3, 5, 2, 0, 1, 0, 3, 3, 0, 0, 1, 1, 1, 0, 2, 5, 0, 0, 2, 0, 1, 1, 0, 0, 1, 0, 3, 1, 1, 3, 1, 3, 1],
//     [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
//     [2, 0, 4, 0, 2, 1, 0, 0, 2, 1, 1, 1, 1, 0, 1, 0, 2, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 4, 2, 1, 1, 1, 1, 1],
//     [2, 0, 0, 0, 0, 1, 0, 1, 4, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 2, 0, 1, 1],
//     [1, 3, 1, 5, 0, 1, 0, 1, 5, 2, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 2, 1, 1, 2, 1],
//     [1, 1, 4, 4, 0, 1, 4, 1, 2, 3, 2, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 3, 1, 1, 2, 1],
//     [1, 3, 1, 1, 0, 1, 0, 1, 2, 1, 2, 1, 1, 0, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 1, 1, 0, 1, 2, 2, 1],
//  ]


Grass = require("./Modules/Grass.js");
EatGrass = require("./Modules/Eatgrass.js");
Gishatich = require("./Modules/Gishatich.js");
Eatall = require("./Modules/Eatall.js");
Jur = require("./modules/Jur.js");
let orer = 0
obj = {
    matrix: matrix,
    eghanak: "winter"
}

function matrixGenerate() {
    for (y = 0; y <= 25; y++) {
        matrix[y] = [];
        for (x = 0; x <= 25; x++) {
            var randMatrix = Math.floor(Math.random() * 100);
            if (randMatrix <= 10) {
                matrix[y][x] = 5;
            }
            else if (10 < randMatrix && randMatrix <= 15) {
                matrix[y][x] = 4;
            }
            else if (15 < randMatrix && randMatrix <= 25) {
                matrix[y][x] = 3;
            }
            else if (25 < randMatrix && randMatrix <= 50) {
                matrix[y][x] = 2;
            }
            else if (50 < randMatrix && randMatrix <= 70) {
                matrix[y][x] = 1;
            }
            else if (70 < randMatrix && randMatrix <= 100) {
                matrix[y][x] = 0;
            }
        }
    }
}
var fs = require('fs');

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function createObj() {
    matrixGenerate();
    let i = 0
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var grassobj = new Grass(x, y);
                grassArr.push(grassobj);

            }
            else if (matrix[y][x] == 2) {
                var grassEaterobj = new EatGrass(x, y);
                eatarr.push(grassEaterobj);

            }
            else if (matrix[y][x] == 3) {
                var gishobj = new Gishatich(x, y);
                GishArr.push(gishobj)
            }
            else if (matrix[y][x] == 4) {
                var eatallobj = new Eatall(x, y);
                eatallArr.push(eatallobj);
            }
            else if (matrix[y][x] == 5) {
                var jurobj = new Jur(x, y);
                jurArr.push(jurobj);
            }
        }
    }
}
createObj();

function game() {
    orer++
    if (orer <= 30) {
        obj.eghanak = "winter"
    }
    else if (orer <= 60) {
        obj.eghanak = "summer"
    }
    else {
        orer = 0
    }
    for (var i in grassArr) {
        if (obj.eghanak == "winter") {
            grassArr[i].mul(7);
        }
        else if (obj.eghanak == "summer") {
            grassArr[i].mul(3);
        }
    }
    for (var i in eatarr) {
        
        if (obj.eghanak == "winter") {
            eatarr[i].eat(15);
        }
        else if (obj.eghanak == "summer") {
            eatarr[i].eat(10);
        }
    }
    for (var i in GishArr) {
        if (obj.eghanak == "winter") {
            GishArr[i].eat(20);
        }
        else if (obj.eghanak == "summer") {
            GishArr[i].eat(12);
        }
    }
    for (var i in eatallArr) {
        if (obj.eghanak == "winter") {
            eatallArr[i].eat(24);
        }
        else if (obj.eghanak == "summer") {
            eatallArr[i].eat(15);
        }
    }
    for (var i in jurArr) {
        if (obj.eghanak == "winter") {
            jurArr[i].mul(30);
        }
        else if (obj.eghanak == "summer") {
            jurArr[i].mul(3);
        }
    }
    io.sockets.emit("send matrix", obj);
    grassQanak = grassArr.length;
}
function statistics() {
    fs.writeFileSync("Statistics.txt", grassQanak);
    console.log(grassQanak)
}


setInterval(game, 500)
setInterval(statistics, 500)

function killAll() {
    grassArr.splice(0, grassArr.length);
    eatarr.splice(0, eatarr.length);
    eatallArr.splice(0, eatallArr.length);
    GishArr.splice(0, GishArr.length);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            if (matrix[y][x] != 5) {
                matrix[y][x] = 0
            }
        }
    }

}

io.on('connection', function (socket) {

    socket.on("spani", killAll)
    // socket.on("spani", killAll()) 
    // socket.on("spani", killAll()) 
    // socket.on("spani", killAll()) 
    // socket.on("spani", killAll()) 
    // socket.on("spani", killAll()) 


});
