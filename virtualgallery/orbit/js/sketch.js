// Declare variables for the sun, an array to store planets, the number of planets, and an angle variable.
let sun;
let planets = [];
let numPlanets = 8;
let angle = 0;


function setup() {
  createCanvas(500, 500);

  // Initialize the sun as a Planet object at the center of the canvas.
  sun = new Planet(0, 0, 50, 0);
  
  // Create an array of random planets and add them to the planets array.
  for (let i = 0; i < numPlanets; i++) {
    // Randomly set the radius, distance, speed, and initial angle of each planet.
    let radius = random(50, 150);
    let distance = random(100, 300);
    let speed = random(0.005, 0.02);
    let planet = new Planet(radius, distance, speed, random(360));
    planets.push(planet);
  }
}

function draw() {
  background(0);
  
  // Translate the origin to the center of the canvas.
  translate(width / 2, height / 2);
  
  // Display the sun at the center of the canvas.
  sun.display();
  
  // Loop through the planets array, update their positions, and display them.
  for (let i = 0; i < numPlanets; i++) {
    planets[i].orbit();
    planets[i].display();
  }
}

// define a Planet class to represent each celestial body.
class Planet {
  // constructor initializes the properties of the planet.
  constructor(radius, distance, speed, angle) {
    this.radius = radius;   // radius of the planet.
    this.distance = distance;   // distance from the center (sun) along the orbit.
    this.speed = speed;   // orbital speed.
    this.angle = angle;   // initial angle of the planet.
  }
  
  // ppdate the angle of the planet based on its orbital speed.
  orbit() {
    this.angle += this.speed;
  }
  
  // display the planet at its current position.
  display() {
    // calculate the Cartesian coordinates based on polar coordinates.
    let x = this.distance * cos(this.angle);
    let y = this.distance * sin(this.angle);
    
    // fill the planet with a random color and draw it as an ellipse.
    fill(random(255), random(255), random(255));
    ellipse(x, y, this.radius, this.radius);
  }
}