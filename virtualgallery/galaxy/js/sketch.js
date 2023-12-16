//setting up global variables
//stores stars in array
let stars = [];
//size of star feild
let factor = 100;

//speed of stars
let speedSlider;
//color changer slider
let colorSlider;

function setup() {
  createCanvas(500, 500);
//creating the slides and setting their values 
  speedSlider = createSlider(0, 20, 2, 0.1);
  colorSlider = createSlider(0, 255, 150, 1);
//initialising the stars
  for (let i = 0; i < 500; i++) {
    stars[i] = createVector(
      random(-width * factor, width * factor),
      random(-height * factor, height * factor),
      random(width)
    );

    stars[i].pz = stars[i].z;
  }
}

function draw() {
  background(0);
  //translate the height to the center of the canvas
  translate(width / 2, height / 2);
//responsible for moving the stars
  for (let star of stars) {
    let x = star.x / star.z;
    let y = star.y / star.z;
    //this is responsible for changing the size of the stars relatively using the map function
    let d = map(star.z, 0, 400, 10, 1);
    let px = star.x / star.pz;
    let py = star.y / star.pz;
//using map() to change the colour of the stars based on their distance from the user
    let colorValue = map(star.z, 0, 400, 0, 255);
    //the dimensions of the inital circle
    fill(color(colorValue, colorSlider.value(), 255 - colorValue));
    noStroke();
    ellipse(x, y, d);
    stroke(255);
    line(x, y, px, py);
//speed of stars
    star.pz = star.z;
    star.z -= speedSlider.value();

//restarting the loop of stars again
    if (star.z < 1) {
      star.x = random(-width * factor, width * factor);
      star.y = random(-height * factor, height * factor);
      star.z = 400;
      star.pz = 400;
    }
  }
}
