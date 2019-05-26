var socket = io();
socket.on("send matrix",drawMatrix);
var side = 20;

function setup() {
    createCanvas(25 * side, 25 * side);
    background('#acacac');
}

function drawMatrix(tvyal){
    matrix = tvyal.matrix;
    eghanak = tvyal.eghanak
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                if(eghanak == "winter")
                {
                    fill("white");
                }
                else{
                    fill("green");
                }
            }
            else if(matrix[y][x] == 2){
                fill("yellow");
            }
            else if(matrix[y][x] == 3){
                fill("purple");
            }
            else if(matrix[y][x] == 4){
                fill("red");
            }
            else if(matrix[y][x] == 5){
                fill("blue");
            }
            else if(matrix[y][x] == 0){
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);
        }
    }
}
function kill(){
    socket.emit("spani")
}
