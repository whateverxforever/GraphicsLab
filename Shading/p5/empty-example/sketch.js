function putpixel(P) {
  loadPixels();
  let c = color(P.r, P.g, P.b);
  set(P.x, P.y, c);
  updatePixels();
}

let A, B, C, S, P, E;

function setup() {
  createCanvas(600, 600);
  background(51);

  translate(width / 2, height / 2);
  stroke(255, 0, 0);

  A = {
    x: -100,
    y: 0,
    r: 255,
    g: 255,
    b: 0,
  };
  B = {
    x: 100,
    y: 0,
    r: 255,
    g: 0,
    b: 0,
  };
  C = {
    x: 50,
    y: 100,
    r: 0,
    g: 0,
    b: 0,
  };

  let dx1, dx2, dx3;
  let dr1, dr2, dr3, dg1, dg2, dg3, db1, db2, db3;

  if (B.y - A.y > 0) {
    dx1 = (B.x - A.x) / (B.y - A.y);
    dr1 = (B.r - A.r) / (B.y - A.y);
    dg1 = (B.g - A.g) / (B.y - A.y);
    db1 = (B.b - A.b) / (B.y - A.y);
  } else
    dx1 = dr1 = dg1 = db1 = 0;

  if (C.y - A.y > 0) {
    dx2 = (C.x - A.x) / (C.y - A.y);
    dr2 = (C.r - A.r) / (C.y - A.y);
    dg2 = (C.g - A.g) / (C.y - A.y);
    db2 = (C.b - A.b) / (C.y - A.y);
  } else
    dx2 = dr2 = dg2 = db2 = 0;

  if (C.y - B.y > 0) {
    dx3 = (C.x - B.x) / (C.y - B.y);
    dr3 = (C.r - B.r) / (C.y - B.y);
    dg3 = (C.g - B.g) / (C.y - B.y);
    db3 = (C.b - B.b) / (C.y - B.y);
  } else
    dx3 = dr3 = dg3 = db3 = 0;

  S = A;
  E = A;

  console.log(S);

  if (dx1 > dx2) {
    for (; S.y <= B.y; S.y++, E.y++) {
      if (E.x - S.x > 0) {
        dr = (E.r - S.r) / (E.x - S.x);
        dg = (E.g - S.g) / (E.x - S.x);
        db = (E.b - S.b) / (E.x - S.x);
      } else
        dr = dg = db = 0;
      P = S;
      for (; P.x < E.x; P.x++) {
        putpixel(P);
        console.log(P);
        P.r += dr;
        P.g += dg;
        P.b += db;
      }
      S.x += dx2;
      S.r += dr2;
      S.g += dg2;
      S.b += db2;
      E.x += dx1;
      E.r += dr1;
      E.g += dg1;
      E.b += db1;
    }

    console.log('hello');

    E = B;
    for (; S.y <= C.y; S.y++, E.y++) {
      if (E.x - S.x > 0) {
        dr = (E.r - S.r) / (E.x - S.x);
        dg = (E.g - S.g) / (E.x - S.x);
        db = (E.b - S.b) / (E.x - S.x);
      } else
        dr = dg = db = 0;
      P = S;
      for (; P.x < E.x; P.x++) {
        putpixel(P);
        P.r += dr;
        P.g += dg;
        P.b += db;
      }
      S.x += dx2;
      S.r += dr2;
      S.g += dg2;
      S.b += db2;
      E.x += dx3;
      E.r += dr3;
      E.g += dg3;
      E.b += db3;
    }
  } else {
    for (; S.y <= B.y; S.y++, E.y++) {
      if (E.x - S.x > 0) {
        dr = (E.r - S.r) / (E.x - S.x);
        dg = (E.g - S.g) / (E.x - S.x);
        db = (E.b - S.b) / (E.x - S.x);
      } else
        dr = dg = db = 0;

      P = S;
      for (; P.x < E.x; P.x++) {
        putpixel(P);
        P.r += dr;
        P.g += dg;
        P.b += db;
      }
      S.x += dx1;
      S.r += dr1;
      S.g += dg1;
      S.b += db1;
      E.x += dx2;
      E.r += dr2;
      E.g += dg2;
      E.b += db2;
    }

    S = B;
    for (; S.y <= C.y; S.y++, E.y++) {
      if (E.x - S.x > 0) {
        dr = (E.r - S.r) / (E.x - S.x);
        dg = (E.g - S.g) / (E.x - S.x);
        db = (E.b - S.b) / (E.x - S.x);
      } else
        dr = dg = db = 0;

      P = S;
      for (; P.x < E.x; P.x++) {
        putpixel(P);
        P.r += dr;
        P.g += dg;
        P.b += db;
      }
      S.x += dx3;
      S.r += dr3;
      S.g += dg3;
      S.b += db3;
      E.x += dx2;
      E.r += dr2;
      E.g += dg2;
      E.b += db2;
    }
  }

}


function draw() {

}