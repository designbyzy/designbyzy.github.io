let sunRadius = 50;
let planetRadius1 = 20;
let planetRadius2 = 15;
let planetRadius3 = 25;
let angle1 = 0;
let angle2 = 45; // Initial angle for the second planet
let angle3 = 90; // Initial angle for the third planet
let orbitRadius1 = 150;
let orbitRadius2 = 200; // Orbit radius for the second planet
let orbitRadius3 = 250; // Orbit radius for the third planet

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Draw the sun in the center
  fill(255, 255, 0);
  ellipse(width / 2, height / 2, sunRadius * 2, sunRadius * 2);

  // Calculate and draw the first planet
  let planetX1 = width / 2 + orbitRadius1 * cos(angle1);
  let planetY1 = height / 2 + orbitRadius1 * sin(angle1);
  fill(0, 0, 255);
  ellipse(planetX1, planetY1, planetRadius1 * 2, planetRadius1 * 2);

  // Calculate and draw the second planet
  let planetX2 = width / 2 + orbitRadius2 * cos(angle2);
  let planetY2 = height / 2 + orbitRadius2 * sin(angle2);
  fill(255, 0, 0);
  ellipse(planetX2, planetY2, planetRadius2 * 2, planetRadius2 * 2);

  // Calculate and draw the third planet
  let planetX3 = width / 2 + orbitRadius3 * cos(angle3);
  let planetY3 = height / 2 + orbitRadius3 * sin(angle3);
  fill(0, 255, 0);
  ellipse(planetX3, planetY3, planetRadius3 * 2, planetRadius3 * 2);

  // Update the angles for the planets' orbits
  angle1 += radians(1);
  angle2 += radians(2); // Adjust the speed of the second planet's orbit
  angle3 += radians(0.5); // Adjust the speed of the third planet's orbit
}
