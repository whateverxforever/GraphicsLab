var angle;
var axiom = "F";
var sentence = axiom;
var len = 40;

var rules = [];
rules[0] = {
  a: "F",
  b: "[-F-F-F][+F+F+F]"
}

function generate() {
  len *= 1.1;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();

}

function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height / 2);
  stroke(255);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);

    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle)
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(400, 400);
  angle = radians(30);
  background(51);
  turtle();
  var button = createButton("Next Generation");
  button.mousePressed(generate);
}