int rect_l;
int rect_b;

void plotPixel(int x, int y) {
  set(x, y, color(255, 255, 255));
}

void plotLineLow(int x0, int y0, int x1, int y1) {
  int dx = x1-x0;
  int dy = y1-y0;
  int yi = 1;
  if (dy<0) {
    yi = -1;
    dy = -dy;
  }
  int D = 2*dy-dx;
  int y = y0;

  for (int x=x0; x<=x1; x++) {
    plotPixel(x, y);
    if (D>0) {
      y = y+yi;
      D = D-2*dx;
    }
    D = D+2*dy;
  }
}

void plotLineHigh(int x0, int y0, int x1, int y1) {
  int dx = x1-x0;
  int dy = y1-y0;
  int xi = 1;
  if (dx<0) {
    xi = -1;
    dx = -dx;
  }
  int D = 2*dx-dy;
  int x = x0;

  for (int y=y0; y<=y1; y++) {
    plotPixel(x, y);
    if (D>0) {
      x = x+xi;
      D = D-2*dy;
    }
    D = D+2*dx;
  }
}

void plotLine(int x0, int y0, int x1, int y1) {

  int a0=x0, a1=x1, b0=y0, b1=y1;
  if (x0 == x1) {
    if (y0>y1) {
      b0 = y1;
      b1 = y0;
    }
    for (int i=b0; i<b1; i++) {
      plotPixel(x0, i);
    }
    return;
  }

  if (y0 == y1) {
    if (x0>x1) {
      a0 = x1;
      a1 = x0;
    }
    for (int i=a0; i<a1; i++) {
      plotPixel(i, y0);
    }
    return;
  }

  if (abs(y1-y0)<abs(x1-x0)) {
    if (x0>x1) {
      plotLineLow(x1, y1, x0, y0);
    } else {
      plotLineLow(x0, y0, x1, y1);
    }
  } else {
    if (y0>y1) {
      plotLineHigh(x1, y1, x0, y0);
    } else {
      plotLineHigh(x0, y0, x1, y1);
    }
  }
}  

void setup() {
  size(600, 600);
  background(0);

  rect_l = width/4;
  rect_b = height/4;
}

void draw() {
  plotLine(width/2-rect_l, height/2-rect_b, width/2+rect_l, height/2-rect_b);
  plotLine(width/2-rect_l, height/2+rect_b, width/2+rect_l, height/2+rect_b);
  plotLine(width/2+rect_l, height/2-rect_b, width/2+rect_l, height/2+rect_b);
  plotLine(width/2-rect_l, height/2-rect_b, width/2-rect_l, height/2+rect_b);

  plotLine(0, height/2, width/2, 0);
  plotLine(width, height/2, width/2, height);

  plotLine(width/2, 0, width, height/2);
  plotLine(0, height/2, width/2, height);
}
