let finalx = new Array();
let finaly = new Array();
let coords = new Array();

function multiply(a, b) {
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumRows = b.length,
    bNumCols = b[0].length,
    m = new Array(aNumRows);
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function brezier(Q, x1, y1, x2, y2, x3, y3, x4, y4) {

  finalx = [];
  finaly = [];
  let z = 1 / Q;
  let y = Q;

  for (let i = 0; i < z - 1; i++) {
    let t = [
      [y * y * y, y * y, y, 1]
    ];

    let M = [
      [-1, 3, -3, 1],
      [3, -6, 3, 0],
      [-3, 3, 0, 0],
      [1, 0, 0, 0]
    ];

    let px = [
      [x1],
      [x2],
      [x3],
      [x4]
    ];

    let py = [
      [y1],
      [y2],
      [y3],
      [y4]
    ];


    let res = multiply(t, M);
    let resx = multiply(res, px);
    let resy = multiply(res, py);

    finalx.push(resx);
    finaly.push(resy);

    y += Q;

  }

  makeShape(finalx, finaly);
}

function makeShape(coordx, coordy) {

  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < coordx.length; i++) {
    vertex(coordx[i], coordy[i]);
  }
  endShape();

}


function setup() {
  createCanvas(600, 600);
  background(51);
  coords = [0, 600, 300, 600, 300, 0, 600, 0];

  for (let i = 0; i < coords.length; i++) {
    ellipse(300, 300, 20, 20);
  }

}


function draw() {

  brezier(0.001, 0, 600, 300, 600, 300, 0, 600, 0);

}