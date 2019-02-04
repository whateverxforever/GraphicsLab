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

    let p1 = -(x2 - x1),
        p2 = -p1,
        p3 = -(y2 - y1),
        p4 = -p3;

    let q1 = x1 - xmin,
        q2 = xmax - x1,
        q3 = y1 - ymin,
        q4 = ymax - y1;

    let posarray = new Array();
    let negarray = new Array();

    posarray.push(1);
    negarray.push(0);

    if ((p1 == 0 && q1 < 0) || (p3 == 0 && q3 < 0)) {
        return;
    }

    if (p1 != 0) {
        let r1 = q1 / p1,
            r2 = q2 / p2;
        if (p1 < 0) {
            negarray.push(r1);
            posarray.push(r2);
        } else {
            negarray.push(r2);
            posarray.push(r1);
        }
    }
    if (p3 != 0) {
        let r3 = q3 / p3,
            r4 = q4 / p4;
        if (p3 < 0) {
            negarray.push(r3);
            posarray.push(r4);
        } else {
            negarray.push(r4);
            posarray.push(r3);
        }
    }

    let rn1 = max(negarray),
        rn2 = min(posarray);

    if (rn1 > rn2) {
        return;
    }

    let xn1 = x1 + p2 * rn1,
        yn1 = y1 + p4 * rn1,
        xn2 = x2 + p2 * rn2,
        yn2 = y2 + p4 * rn2;


    console.log("Clipped coords: " +
        xn1 + " " + yn1 + " " + xn2 + " " + yn2);

    stroke(0, 255, 255);
    line(xn1, yn1, xn2, yn2);

    return;
}

function setup() {
    createCanvas(600, 600);
    background(21);

    rectMode(CENTER);
    stroke(255);
    strokeWeight(2);
    noFill();
    rect(300, 300, 400, 200);

    for (let i = 0; i < 1; i++) {
        let x1 = random(0, width),
            y1 = random(0, height),
            x2 = random(0, width),
            y2 = random(0, height);
        stroke(255);
        line(x1, y1, x2, y2);

        liangbarskyClipping(x1, y1, x2, y2);
    }

}

function draw() {
    // put drawing code here
}