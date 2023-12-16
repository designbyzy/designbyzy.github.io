function setup() {
	//setting the canvas dimensions
  createCanvas(500, 500);
}

function draw(x, y) {
  background(0);
  stroke(255);
  strokeWeight(2);
  
  // draw the stars at the given coordinates (##,##)
  if (random() > 0.3) {
    drawStar(100, 100);
  }
  if (random() > 0.5) {
    drawStar(200, 200);
  }
  if (random() > 0.3) {
    drawStar(300, 300);
  }
  if (random() > 0.4) {
    drawStar(350, 50);
  }
  if (random() > 0.3) {
    drawStar(250, 400);
  }
  if (random() > 0.2) {
    drawStar(400, 150);
  }
    if (random() > 0.2) {
    drawStar(400, 150);
  }
    if (random() > 0.3) {
    drawBiggerStar(50, 400);
  }
     if (random() > 0.3) {
    drawBiggerStar(250, 100);
  }
     if (random() > 0.3) {
    drawBiggerStar(450, 400);
  }
       if (random() > 0.3) {
    drawBiggerStar(100, 250);
  }
    if (random() > 0.2) {
    drawBiggerStar(370, 230);
  }

}
// this function is repsonsible for what you see at the x and y coordinates indicated above
//it draws the vertices and desired effects you see on screen
function drawStar(x, y) {
  // draw a star at the given coordinates
   push();
  translate(x, y);
  if (frameCount % 30 < 15) {
    // blinking effect
    fill(255);
  } else {
    fill(0);
  }
  //rotating effect
  rotate(frameCount * 0.01);
  beginShape();
  vertex(0, -20);
  vertex(5, -5);
  vertex(20, 0);
  vertex(5, 5);
  vertex(0, 20);
  vertex(-5, 5);
  vertex(-20, 0);
  vertex(-5, -5);
  endShape(CLOSE);
  pop();
}

function drawBiggerStar(x, y) {
  // draw a bigger star at the given coordinates
 push();
  translate(x, y);
  if (frameCount % 40 < 15) {
    // Blinking effect
    fill(255);
  } else {
    fill(255, 255, 0);
  }
  //rotating effect
    rotate(frameCount * -0.02);
  beginShape();
  vertex(0, -40);
  vertex(10, -10);
  vertex(40, 0);
  vertex(10, 10);
  vertex(0, 40);
  vertex(-10, 10);
  vertex(-40, 0);
  vertex(-10, -10);
  endShape(CLOSE);
  pop();
}