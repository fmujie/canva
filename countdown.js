var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
window.onload = function () {
    var myCanvas = document.getElementById("myCanvas");
    var context = myCanvas.getContext("2d"); //2D效果

    myCanvas.width = WINDOW_WIDTH;
    myCanvas.height = WINDOW_HEIGHT;

    render(context);
}

function render() {
    var hours = 12;
    var minutes = 34;
    var seconds = 56;

    renderDigit(0, 0, parseInt(hours / 10), cxt);
}

function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "rgb(0,102,153)";

    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                cxt.beginPath();
                cxt.arc();
                cxt.closePath();

                cxt.fill();
            }
        }
    }



}