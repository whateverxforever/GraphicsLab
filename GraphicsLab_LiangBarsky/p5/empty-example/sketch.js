// Defining Boundaries of the clipping window
let xmin = 100,
  xmax = 500,
  ymin = 200,
  ymax = 400;

function liangbarskyClipping(x1, y1, x2, y2) {

  if (x1 > x2) {
    let temp = x2;
    x2 = x1;
    x1 = temp;
    temp = y2;
    y2 = y1;
    y1 = temp;
  }


  console.log("Original coords: " +
    x1 + " " + y1 + " " + x2 + " " + y2);

  let p = new Array(),
    q = new Array(),
    t = new Array();

  let dx = x2 - x1,
    dy = y2 - y1,
    tmin = 0,
    tmax = 1;

  p[0] = -(x2 - x1);
  p[1] = (x2 - x1);
  p[2] = -(y2 - y1);
  p[3] = (y2 - y1);
  q[0] = x1 - xmin;
  q[1] = xmax - x1;
  q[2] = y1 - ymin;
  q[3] = ymax - y1;

  for (let i = 0; i < 4; i++) {
    if (p[i] < 0) {
      tmin = max(tmin, q[i] / p[i]);
    } else if (p[i] > 0) {
      tmax = min(tmax, q[i] / p[i]);
    } else {
      if (q[i] < 0) {
        tmax = 0;
        tmin = 1;
        break;
      }
    }
  }

  //cout<<tmin<<" "<<tmax<<endl;
  if (tmin < tmax) {
    stroke(255, 0, 0);
    console.log("Final Coords: " + x1 + tmin * dx + " " + y1 + tmin * dy + " " + x1 + tmax * dx + " " + y1 + tmax * dy)
    line(x1 + tmin * dx, y1 + tmin * dy, x1 + tmax * dx, y1 + tmax * dy);
  } else {
    console.log("Line is outside the boudary");
  }
}

function setup() {
  createCanvas(600, 600);



}

function draw() {
  // put drawing code here
  background(21);

  rectMode(CENTER);
  stroke(255);
  strokeWeight(2);
  noFill();
  rect(300, 300, 400, 200);
  strokeWeight(0.5);

  for (let i = 0; i < 5; i++) {
    let x1 = random(0, width),
      y1 = random(0, height),
      x2 = random(0, width),
      y2 = random(0, height);
    stroke(255);
    line(x1, y1, x2, y2);

    liangbarskyClipping(x1, y1, x2, y2);
  }

  frameRate(0.5);


}