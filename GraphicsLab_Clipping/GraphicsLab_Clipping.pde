int line_num = 5;
int[][] lines;
int rect_l = 300;
int rect_b = 200;
int x_max = 450, x_min = 150;
int y_max = 400, y_min = 200;

//Assigning the codes for the spatial area
int inside = 0, top = 1, left = 2, right = 4, bottom = 8;
int createCode(int x, int y) {

  int code=inside;

  if (x<x_min) {
    code |= left;
  } 
  if (x>x_max) {
    code |= right;
  }
  if (y<y_min) {
    code |= top;
  } 
  if (y>y_max) {
    code |= bottom;
  }

  return code;
}

void line_clipping(int x1, int y1, int x2, int y2) {
  int code1 = createCode(x1, y1);
  int code2 = createCode(x2, y2);

  boolean is_line = false;

  while (true) {  
    if ((code1 | code2)==0) {
      is_line = true;
      break;
    }
      else if ((code1 & code2)!=0) {
      break;
    }
    else {
      int x=0, y=0;

      int codeout;
      if (code1!=0) {
        codeout = code1;
      } else {
        codeout = code2;
      }

      if ((codeout & top)!=0) {
        x = x1 + (x2-x1)*(y_max-y1)/(y2-y1);
        y = y_max;
      }
      else if((codeout & bottom)!=0){
        x = x1 + (x2-x1)*(y_min-y1)/(y2-y1);
        y = y_min;
      }
      else if((codeout & right)!=0){
        y = y1 + (y2-y1)*(x_max-x1)/(x2-x1);
        x = x_max;
      }
      else if((codeout & left)!=0){
        y = y1 + (y2-y1)*(x_min-x1)/(x2-x1);
        x = x_min;
      }
      
       if(codeout==code1){
         x1 =  x;
         y1 =  y;
         code1 = createCode(x1,y1);
       }
       else{
         x2 =  x;
         y2 =  y;
         code1 = createCode(x2,y2);
       }
     }
  }
  
  if(is_line){
    line(x1,y1,x2,y2);
  }
}

void setup() {

  size(600, 600);
  background(51);

  strokeWeight(2);
  stroke(255);
  rectMode(CENTER);
  noFill();
  rect(width/2, height/2, rect_l, rect_b);
  
  lines = new int[line_num][4];
  strokeWeight(0.3);
  for (int i=0; i<line_num; i++) {
    int x1 = int(random(0, width));
    int y1 = int(random(0, width));
    int x2 = int(random(0, height));
    int y2 = int(random(0, height));

  //  line(x1, y1, x2, y2);

    lines[i][0] = x1;
    lines[i][1] = y1;
    lines[i][2] = x2;
    lines[i][3] = y2;
  }

  stroke(255, 0, 0);
  strokeWeight(2);

  line_clipping(0, y_min, width, y_min );
  line_clipping(0, y_max, width, y_max );
  line_clipping(x_min, 0, x_min, height);
  line_clipping(x_max, 0, x_max, height);
}

void draw() {
}
