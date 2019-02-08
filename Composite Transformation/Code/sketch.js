  let box = [
    [0, 00],
    [0, 50],
    [50, 80],
    [20, 40]
  ];

  function multiply(a, b) {
    var aNumRows = a.length,
      aNumCols = a[0].length,
      bNumCols = b[0].length,
      m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0; // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }




  function transform(mat, x, y) {
    let xnew = mat[0][0] * x + mat[0][1] * y + mat[0][2] * 1;
    let ynew = mat[1][0] * x + mat[1][1] * y + mat[1][2] * 1;

    let arr = [xnew, ynew];

    return arr;
  }

  function pro() {

    //Translation
    let t1 = prompt("Enter t1");
    let t2 = prompt("Enter t2");
    let t = [
      [1, 0, t1],
      [0, 1, t2],
      [0, 0, 1]
    ];

    //scaling
    let s1 = prompt("Enter s1");
    let s2 = prompt("Enter s2");
    let s = [
      [s1, 0, 0],
      [0, s2, 0],
      [0, 0, 1]
    ];

    //rotation
    let a = prompt("Enter angle of rotation");
    let r = [
      [sin(90 - a), -sin(a), 0],
      [sin(a), sin(90 - a), 0],
      [0, 0, 1]
    ];

    let mat = t;
    // let mat = multiply(t, s);
    // mat = multiply(mat, r);

    return mat;
  }


  function setup() {

    createCanvas(600, 600);
    background(51);

    translate(300, 300);
    angleMode(DEGREES);

    stroke(255);
    noFill();
    beginShape();
    for (let i = 0; i < box.length; i++) {
      vertex(box[i][0], box[i][1]);
    }
    endShape(CLOSE);

    let mat = pro();
    console.log(mat);

    let newbox = new Array();
    for (let i = 0; i < box.length; i++) {
      let coords = transform(mat, box[i][0], box[i][1]);
      newbox.push(coords);
    }

    console.log(newbox);

    stroke(255, 0, 0)
    beginShape();
    for (let i = 0; i < newbox.length; i++) {
      vertex(newbox[i][0], newbox[i][1]);
    }
    endShape(CLOSE);

  }

  function draw() {

  }