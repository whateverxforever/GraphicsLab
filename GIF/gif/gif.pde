PImage source0;      // Source image 1
PImage source1;      // Source image 2
int totalFrames = 6;
int counter = 0;

float p = 0;

void setup() {
  size(640, 360);
  source1 = loadImage("D:/Documents/GitHub/GraphicsLab/Morphing/cs/lm0.jpg");
  source0 = loadImage("D:/Documents/GitHub/GraphicsLab/Morphing/cs/lm1.jpg");
}

void draw(){
  float percent = float(counter) / totalFrames;
  myRender(percent);
  saveFrame("output/gif-"+nf(counter,3)+".png");
  counter++;
  if(counter == totalFrames){
    exit();
  }
}
void myRender(float percent) {
  // Percentage goes from 0 to 1 then back to 0
  p = percent;
  if (p > 1.0) noLoop();

  loadPixels();
  source0.loadPixels();
  source1.loadPixels();

  for (int x = 0; x < source0.width; x++ ) {
    for (int y = 0; y < source0.height; y++ ) {
      int loc = x + y*source0.width;
  
      color c0 = source0.pixels[loc];
      color c1 = source1.pixels[loc];

      float r0 = red(c0); 
      float g0 = green(c0); 
      float b0 = blue(c0);
      float r1 = red(c1); 
      float g1 = green(c1); 
      float b1 = blue(c1);

      float r = p*r0+(1.0-p)*r1;
      float g = p*g0+(1.0-p)*g1;
      float b = p*b0+(1.0-p)*b1;

      pixels[loc] = color(r, g, b);
    }
  }

  updatePixels();
}
