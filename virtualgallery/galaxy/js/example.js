//declaring the variables i plan to use to create the bouncing animation of the ball
let x;
let y;
let xspeed;
let yspeed;

let img; //declaring the image variable

//function preload() {
//img = loadImage('https://cdn.freebiesupply.com/logos/large/2x/dvd-logo-png-transparent.png');
//}

//setting up the canvas and creating variables to be used later
function setup() {
  createCanvas(800,600);

  //making the starting position random along the x and y axis everytime and setting the speed of the ball to 8
  x = random(width);
  y = random(height);
  xspeed = 8;
  yspeed = 8;
}

//draw the ball
function draw() {
  background(255, 0, 150);
  ellipse(x, y, 80, 80);
  fill(x, y);  //using the variables to make a connection between the x and y pos and the colour of the ball
  noStroke()

//this code is determining the bounce of the ball and what happens when it hits the edges of the canvas
  x = x + xspeed;
  y = y + yspeed;

//checking the balls position against the canvas making it bounce when it reaches the set boundaries

  if (x + 40 >= width || x - 40 <= 0) {
  xspeed = -xspeed;
}

if (y + 40 >= height || y - 40 <= 0) {
  yspeed = -yspeed;
}
}