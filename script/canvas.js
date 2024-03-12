// Get the canvas element
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Set the line color and width for the black lines
ctx.strokeStyle = 'white'; // Set the lines color to black
ctx.lineWidth = 1; // Set the lines width

// Calculate the spacing between the black lines
var numLines = 20; // Set the number of lines
var spacing = canvas.width / numLines; // Calculate the spacing between the lines

// Draw the black lines on the ruler spanning the canvas width
for (var i = 0; i <= canvas.width; i += spacing) {
  ctx.beginPath();
  ctx.moveTo(i, 20); // Start point of the line (x, y)

  // Set different line heights based on the iteration
  var lineHeight = (i % (spacing * 2) === 0) ? 90 : // Taller line every 4 lines
                   (i % (spacing * 1) === 0) ? 60 : // Shorter line every 2 lines
                   40; // Default line height
  ctx.lineTo(i, lineHeight); // End point of the line (x, y)
  ctx.stroke();
}


