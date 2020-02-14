var rows = 41;
var cols = 41;
var cell_size = 20;
var grid = [];
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 12; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

function setup() {
  createCanvas(820, 820);
  for (var i = 0; i < rows; i++) {
    grid[i] = [];
    for (var j = 0; j < cols; j++) {
      grid[i][j] = 'white';
    }
  }
}
// |*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*
// function to update the grid
function draw_update()  // Update our display.
{
  background('white');

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var x = i * cell_size;
      var y = j * cell_size;

      fill(grid[i][j]);
      stroke(0);
      rect(x, y, 20, 20);
    }
  }

  grid[20][0] = 'black';    // seeded generation


  // look at the cell to the left, center, and to the right and determine its state (black or white)
  // in the next generation, produce a new generation based on the previous generation's input
  // i.e. if we have black-black-black in the parent generation, the child will be black
  for (var i = 1; i < cols-1; i++) {
    for (var j = 0; j < rows-1; j++) {    // traverse through all the cells
      if (grid[i-1][j] == 'black' && grid[i][j] == 'black' && grid[i+1][j] == 'black') {      // black-black-black = black
        grid[i][j+1] = 'black';
      }
      if (grid[i-1][j] == 'black' && grid[i][j] == 'black' && grid[i+1][j] == 'white') {      // black-black-white = white
        grid[i][j+1] = 'white';
      }
      if (grid[i-1][j] == 'black' && grid[i][j] == 'white' && grid[i+1][j] == 'black') {      // black-white-black = white
        grid[i][j+1] = 'white';
      }
      if (grid[i-1][j] == 'black' && grid[i][j] == 'white' && grid[i+1][j] == 'white') {      // black-white-white = black
        grid[i][j+1] = 'black';
      }
      if (grid[i-1][j] == 'white' && grid[i][j] == 'black' && grid[i+1][j] == 'black') {      // white-black-black = white
        grid[i][j+1] = 'white';
      }
      if (grid[i-1][j] == 'white' && grid[i][j] == 'black' && grid[i+1][j] == 'white') {      // white-black-white = black
        grid[i][j+1] = 'black';
      }
      if (grid[i-1][j] == 'white' && grid[i][j] == 'white' && grid[i+1][j] == 'black') {      // white-white-black = black
        grid[i][j+1] = 'black';
      }
      if (grid[i-1][j] == 'white' && grid[i][j] == 'white' && grid[i+1][j] == 'white') {      // white-white-white = white
        grid[i][j+1] = 'white';
      }
    }
  }

  // grid[i-1][j] == 'black' &&  && grid[i+1][j] == 'black'

    //console.log( "g_frame_cnt = " + g_frame_cnt );
    // move_bot( );
    // draw_bot( );
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        if (!g_stop) draw_update();
    }

    // draw_update();
}
