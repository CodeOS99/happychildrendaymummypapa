
function setup() {
  createCanvas(1250, 500);
}
5+5-5X5/5, add today's date
function draw() {
    background(1,2, 3);
  var xx = mouseX;
  var yy = mouseY;
    var x = round(xx);
    var y = round(yy);
  var pos = 10
  background(10, 100, 20);
  text("X = " + x + ', ' + 'Y = ' + y, pos+10, pos+10);
    textSize(20);
    if(x == 5&&y == 30){
        createA('second.html', 'Congratulations! You passed the first level! Click here to continue.' );
        noLoop();
    }
}
