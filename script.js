let matrix = []; // Մատրիցի ստեղծում
let rows = 50; // Տողերի քանակ
let columns = 50; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random()*100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
} 
if (a >= 20 && a < 35) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
} 
else if (a >= 35 && a < 90) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
} 
else if (a >= 90 && a < 97) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
} 
else if(a >= 97 && a < 98) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
} 
else if(a >= 98 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
} 
}
}


var side = 10;   
var xotArr = [];
var eatArr = [];
var GishArr = [];
var eatallArr = [];
var jurArr =[];

function setup() {
    frameRate(100);
   noStroke();
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y); 
                eatArr.push(eatgrass);
            } 
          else  if (matrix[y][x] == 1) {
                var norXot = new Grass(x, y);
                xotArr.push(norXot);
            }
            else if (matrix[y][x] == 3) {
                var norGishatich = new Gishatich(x, y);
                GishArr.push(norGishatich);
            }
            else if (matrix[y][x] == 4) {
                var neweatallArr = new Eatall(x, y)
            eatallArr.push(neweatallArr);
          
            }
            else if (matrix[y][x] == 5) {
                var norJur = new Jur(x, y)
            jurArr.push(norJur);
          
            }
}
}
}

function draw() {
    console.log(eatallArr.length)
    for (var i = 0; i < matrix.length; i++) {
        for (var u = 0; u < matrix[i].length; u++) {
            if (matrix[i][u] == 1) {
                fill("green")
                rect(u * side, i * side, side, side);
            } else if (matrix[i][u] == 2) {
                fill("orange");
                rect(u * side, i * side, side, side);
            } else if (matrix[i][u] == 3) {
                fill("purple")
                rect(u * side, i * side, side, side);
            }
            else if (matrix[i][u] == 4) {
                    fill("red")
                    rect(u * side, i * side, side, side);
                }
            else if (matrix[i][u] == 0) {
                fill('#acacac')
                rect(u * side, i * side, side, side);
                
            }
            else if (matrix[i][u] == 5) {
                fill("blue")
                rect(u * side, i * side, side, side);
                
            }
           
        }
       
        
    }
    
    
    for (var p in xotArr) {
        xotArr[p].mul();
    }
    for (var p in eatArr) {
        eatArr[p].eat()
    }
    for (var p in GishArr) {
        GishArr[p].eat()
    }
     for (var p in eatallArr) {
        eatallArr[p].eat();
        }
        for (var p in jurArr) {
            jurArr[p].mul();
            }
}

