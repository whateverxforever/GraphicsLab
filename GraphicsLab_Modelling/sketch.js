function setup() {

  createCanvas(1000, 735);
}

function draw() {

  background(55);
  stroke(255);
  strokeWeight(3);
  noFill();


  //body
  line(215,350,763,352);
  line(215,350,215,439);

  arc(763,409,170,114,PI+HALF_PI,TWO_PI);
  line(847,405,850,439);

  line(860,528,109,528);
  line(373,488,652,488);

  //bumpers
    //front bumper
  line(781,438,850,439);
  line(850,438,873,444);
  line(774,488,850,488);
  line(850,488,873,444);
    //rear bumper
  line(246,442,196,439);
  line(247,485,208,486);
  line(208,486,196,439);

  //lights
    //rear
  rect(215,375,20,15);
    //front
  ellipse(806,377,5,22);

  //upper part
  line(304,350,379,240);
  line(379,240,592,230);
  line(592,230,664,350);

  //window
  line(454,238,457,350);

  //doors
  line(460,488,457,350);
  line(661,412,664,350);
  quad(474,357, 506,360,  505,369, 477,368);

  //tires
    //left tire
    ellipse(314,459,135,135);
    ellipse(314,459,60,60);
    ellipse(314,459,10,10);
      //tire rims
    line(314,429,314,453);
    line(307,461,287,445);
    line(309,465,293,481);
    line(336,479,320,463);
    line(320,456,340,445);


    //right tire
    ellipse(713,459,135,135);
    ellipse(713,459,60,60);
    ellipse(713,459,10,10);
      //tire rims
    line(314+400,429,314+400,453);
    line(307+400,461,287+400,445);
    line(309+400,465,293+400,481);
    line(336+400,479,320+400,463);
    line(320+400,456,340+400,445);

}
