function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(139, 69, 19);
  
  fill(254, 228, 181);
  triangle(100, 200, 150, 100, 200, 200);
  fill(210, 180, 140);
  triangle(200, 200, 250, 100, 300, 200);
  fill(254, 228, 181);
  triangle(300, 200, 350, 100, 400, 200);
  
  fill(222, 184, 135);
  rect(100, 200, 300, 80);
  fill(160, 82, 45);
  rect(100, 270, 300, 30);
  
  fill(0, 0, 0);
  ellipse(150, 90, 25, 25);
  fill(255, 250, 250);
  ellipse(250, 90, 25, 25);
  fill(0, 0, 0);
  ellipse(350, 90, 25, 25);

}