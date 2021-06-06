var hr, mn, sc;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(250,250);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  noFill();
  strokeWeight(6);
  stroke("blue");
  var a = map(sc,0,60,0,360);
  arc(0,0,300,300,0,a);

  stroke("lime");
  var b = map(mn,0,60,0,360);
  arc(0,0,280,280,0,b);

  stroke("magenta");
  var c = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,c);

  push();
  rotate(a);
  stroke("blue");
  line(0,0,100,0);
  pop();

  push();
  rotate(b);
  stroke("lime");
  line(0,0,75,0);
  pop();

  push();
  rotate(c);
  stroke("magenta");
  line(0,0,50,0);
  pop();

}