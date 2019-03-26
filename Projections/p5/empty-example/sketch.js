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


let myShapeCoords = [
  [-200, 0, 0],
  [200, 0, 0],
  [-200, 0, 200],
  [200, 0, 200],
  [0, -200, 0]
]

let myShapeLinePairs = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4]
]



function drawShape3d(shape, lines) {
  for (let i = 0; i < lines.length; i++) {
    let x = lines[i];
    let a, b;
    a = x[0];
    b = x[1];
    line(shape[a][0], shape[a][1], shape[b][0], shape[b][1]);
  }
}


function drawPerspective(points, lines, o_view = false) {

  let d = 400;

  let perspMat = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1 / d, 1]
  ];

  let isoMat = [
    [sin(45), -cos(45), 0, 0],
    [1 / sqrt(6), 1 / sqrt(6), -sqrt(6) / 3, 0],
    [1 / sqrt(3), 1 / sqrt(3), 1 / sqrt(3), 0],
    [0, 0, 0, 1]
  ];

  let perspectiveShape = new Array();

  for (let i = 0; i < points.length; i++) {
    let temp = [
      [points[i][0]],
      [points[i][1]],
      [points[i][2]],
      [1]
    ];
    let newPoints = multiply(perspMat, temp);
    // let newPoints = multiply(isoMat, temp);
    // if (o_view == true) {
    //   console.log(newPoints);
    // newPoints = multiply(isoMat, newPoints);
    //   console.log(newPoints);
    // }
    let x = [newPoints[0] / newPoints[3], newPoints[1] / newPoints[3]];
    perspectiveShape.push(x);
  }

  drawShape3d(perspectiveShape, lines);
}



function setup() {

  createCanvas(600, 600);
  background(51);

  translate(width / 2, height / 2);
  angleMode(DEGREES);



  strokeWeight(2);
  stroke(255);
  drawPerspective(myShapeCoords, myShapeLinePairs);

  // strokeWeight(1);
  // stroke(255, 0, 0);
  // drawShape3d(myShapeCoords, myShapeLinePairs);
}

function draw() {


}