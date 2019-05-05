var bardzutyun = 30
var laynutyun = 100
var grassCont = 120
var eatGrassCount = 10
var matrix = [];
for (var i = 0; i < bardzutyun; i++) {
    matrix.push([]);
    for (var j = 0; j < laynutyun; j++) {
        matrix[i].push(0);
    }
}

function setup() {
    var n = 0;
    while (n < grassCont) {
        var x = Math.floor(random(0, laynutyun));
        var y = Math.floor(random(0, bardzutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            n++;
        }
    }

}