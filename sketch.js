var hr;
var min;
var sec;
var  secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(400,400);
  //to change mode from RADIAN(default) to DEGREES
  angleMode(DEGREES);
}

function draw() {
  background(0); 
    //to get value from computer
    var hr=hour();
    var min=minute();
    var sec= second();
  
    //to map the values to values between 0-360 (for angle)
    secAngle=map(sec,0,60,0,360);
    minAngle=map(min,0,60,0,360);
    hrAngle=map((hr%12),0,12,0,360); 

    //to make all values with respect to this
    translate(200,200);
    rotate(-90)

    //drawing the hours hands of the clock
    push()
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    //drawing the minutes hands of the clock
    push()
    rotate(minAngle);
    stroke("purple");
    strokeWeight(4);
    line(0,0,70,0);
    pop();

    //drawing the seconds hands of the clock
    push()
    rotate(secAngle);
    stroke(255);
    strokeWeight(1);
    line(0,0,90,0);
    pop();


  //to draw the arc around the clock
  noFill();
  stroke(255);
  strokeWeight(5)
  arc(0, 0, 250, 250, PI*2,secAngle)

  stroke("purple");
  strokeWeight(5)
  arc(0, 0, 220, 220, PI*2,minAngle)

  stroke("blue");
  strokeWeight(5)
  arc(0, 0, 190, 190, PI*2,minAngle)

  drawSprites();
}