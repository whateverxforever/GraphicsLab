int max_size = 200;

int xIntersect(int x1, int y1, int x2, int y2, int x3, int y3, int x4, int y4) 
{ 
  int num = (x1*y2 - y1*x2) * (x3-x4) - (x1-x2) * (x3*y4 - y3*x4); 
  int den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4); 
  return num/den;
} 
int yIntersect(int x1, int y1, int x2, int y2, int x3, int y3, int x4, int y4) 
{ 
  int num = (x1*y2 - y1*x2) * (y3-y4) - (y1-y2) * (x3*y4 - y3*x4); 
  int den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4); 
  return num/den;
} 

void edgeClip(int poly[][], int poly_size, int x1, int y1, int x2, int y2) {

  int[][] new_poly = new int[max_size][2];
  int new_poly_size = 0;

  for (int i=0; i<poly_size; i++) {
    int k = (i+1) % poly_size; 
    int ix = poly[i][0], iy = poly[i][1]; 
    int kx = poly[k][0], ky = poly[k][1]; 

    int i_pos = (x2-x1) * (iy-y1) - (y2-y1) * (ix-x1); 
    int k_pos = (x2-x1) * (ky-y1) - (y2-y1) * (kx-x1);

    if (i_pos < 0  && k_pos < 0) 
    { 
      new_poly[new_poly_size][0] = kx; 
      new_poly[new_poly_size][1] = ky; 
      ++new_poly_size;
    } else if (i_pos >= 0  && k_pos < 0) 
    { 
      new_poly[new_poly_size][0] = xIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 
      new_poly[new_poly_size][1] = yIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 
      ++new_poly_size; 

      new_poly[new_poly_size][0] = kx; 
      new_poly[new_poly_size][1] = ky; 
      ++new_poly_size;
    } else if (i_pos < 0  && k_pos >= 0) 
    {  
      new_poly[new_poly_size][0] = xIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 
      new_poly[new_poly_size][1] = yIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 
      ++new_poly_size;
    }
  }
  poly_size = new_poly_size; 
  for (int i = 0; i < poly_size; i++) 
  { 
    poly[i][0] = new_poly[i][0]; 
    poly[i][1] = new_poly[i][1];
  }
}

void polygonClipping(int poly[][], int poly_size, int clip[][], int clip_size) {
  for (int i = 0; i < clip_size; i++) 
  { 
    int k = (i+1) % clip_size; 

    edgeClip(poly, poly_size, clip[i][0], clip[i][1], clip[k][0], clip[k][1]);
  }
  
  noFill();
  beginShape();
  for(int i=0; i<poly_size; i++){
    vertex(poly[i][0], poly[i][1]);
  }
  endShape(CLOSE);
}

void setup() {
  size(600, 600);

  int poly_size = 3; 
  int poly_points[][] = {{100, 150}, {200, 250},{300, 200}}; 
  triangle(100, 150, 200, 250,300, 200);
  
 
  int clipper_size = 4; 
  int clipper_points[][] = {{150, 150}, {150, 200}, {200, 200}, {200, 150} };
  //beginShape();
  //vertex(150, 150);
  //vertex(150, 200);
  //vertex(200, 200);
  //vertex(200, 150);
  //vertex(150, 150);
  //endShape();
  
  polygonClipping(poly_points, poly_size, clipper_points, clipper_size);
}
