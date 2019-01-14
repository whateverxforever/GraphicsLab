int line_num = 5;
int inside=0, left=1, right=2, bottom=4, top=8;
int x_max=450, y_max=400, x_min=150, y_min=200;

int findCode(double x, double y) {
  int code = inside;

  if (x < x_min){
    code = code|left;}
  else if (x > x_max){
    code = code|right;}
    
  if (y < y_min){
    code = code|top;}
  else if (y > y_max){
    code = code|bottom;}

  return code;
}

void line_clipping(double x1, double y1, double x2, double y2) {
  
 
  int code1 = findCode(x1, y1);
  int code2 = findCode(x2, y2);

  print(x1 + " " + y1 + " ");
  println(code1);
  print(x2 + " " + y2 + " ");
  println(code1);
  
  boolean isLine = false;

  while (true) {
    if ((code1==0) && (code2==0)) {
      isLine=true;
      break;
    } else if ((code1 & code2)!=0) {
      break;
    } else {
      int result;
      double x=0, y=0;

      if (code1!=0)
        result = code1;
      else
        result = code2;

      if ((result & bottom)!=0) {
        x = x1 + (x2 - x1) * (y_max - y1) / (y2 - y1); 
        y = y_max;
      } else if ((result & top)!=0) 
      {  
        x = x1 + (x2 - x1) * (y_min - y1) / (y2 - y1); 
        y = y_min;
      } else if ((result & right)!=0) 
      {  
        y = y1 + (y2 - y1) * (x_max - x1) / (x2 - x1); 
        x = x_max;
      } else if ((result & left)!=0) 
      {  
        y = y1 + (y2 - y1) * (x_min - x1) / (x2 - x1); 
        x = x_min;
      }

      if (result==code1) {
        x1 = x;
        y1 = y;
        code1 = findCode(x1, y1);
      } else {
        x2 = x;
        y2 = y;
        code2 = findCode(x2, y2);
      }
    }
  }
  if(isLine==true){
    stroke(255, 0, 0);
    strokeWeight(2);
    stroke(255, 0, 0);
    line((float)x1, (float)y1, (float)x2, (float)y2);
  }
}

  void setup() {

    size(600, 600);
  }
  
void draw(){
  
    frameRate(1);
    background(51);
    strokeWeight(2);
    stroke(255);
    rectMode(CENTER);
    noFill();
    rect(width/2, height/2, 300, 200);

    strokeWeight(0.3);
 
    for (int i=0; i<line_num; i++) {
      int x1 = int(random(0, width));
      int y1 = int(random(0, width));
      int x2 = int(random(0, height));
      int y2 = int(random(0, height));

      strokeWeight(0);
      stroke(255);
      line(x1, y1, x2, y2);
      line_clipping(x1, y1, x2, y2);
    }



}  
  
