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


let myCube = [
  [0, 0, 0],
  [100, 0, 0],
  [100, 100, 0],
  [0, 100, 0],
  [0, 100, 100],
  [100, 100, 100],
  [100, 100, 0],
  [0, 0, 100]
]

let perspectiveCube = new Array();

let z = 30,
  d = 100,
  myConst = 1 + (z / d);

let myTransMat = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1 / d, 1]
];

let rotMat = [
  [Math.sqrt(3) / 2, 0, -1 / 2, 0],
  [0, 1, 0, 0],
  [-Math.sqrt(3) / 2, 0, -1 / 2, 0],
  [0, 0, 0, 1],
]

myTransMat = multiply(rotMat, myTransMat);

function transform() {

  for (let i = 0; i < myCube.length; i++) {

    let tempArray = [
      [myCube[i][0]],
      [myCube[i][1]],
      [myCube[i][2]],
      [1]
    ]
    perspectiveCube.push(multiply(myTransMat, tempArray));
  }

}

function setup() {

  createCanvas(600, 600);
  background(51);


  transform();

  translate(width / 2, height / 2);

  fill(255);
  for (let i = 0; i < perspectiveCube.length; i++) {
    circle(perspectiveCube[i][0] / myConst, perspectiveCube[i][1] / myConst, 5, 5);
  }

  console.log(perspectiveCube);


}

function draw() {


}