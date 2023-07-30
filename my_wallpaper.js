//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background("#ffb5b5")
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let headX = 100;
  let headY = 100;
  let outlineWidth = 1; //1
  let furColour = "#ffffff"; //#ffffff
  let secondaryColour = "#b8d8ff"; //#b8d8ff
  let lineColour = "#5989ab"; //#5989ab
  drawHead (1,1,1)
  drawEars(1,1,1)
  

function drawHead() {fill(furColour);
  stroke(lineColour);
  strokeWeight(outlineWidth);
  
  triangle(headX-25, headY-10, headX-30, headY-30, headX-12, headY-30); //ears
  triangle(headX+25, headY-10, headX+30, headY-30, headX+12, headY-30);
  
  ellipse(headX, headY, 65, 45); //face
  ellipse(headX, headY-10, 55, 45);
}
  
function drawEars() {
  fill(furColour); //earfill
  stroke(furColour);
  ellipse(headX, headY-5, 57, 41);
  triangle(headX-23, headY-10, headX-27, headY-25, headX-12, headY-28); 
  triangle(headX+23, headY-10, headX+27, headY-25, headX+12, headY-28);
  
  fill(secondaryColour); //ear insides
  strokeWeight(0);
  triangle(headX-25, headY-18, headX-29, headY-29, headX-22, headY-24); 
  triangle(headX+25, headY-18, headX+29, headY-29, headX+22, headY-24); 
}

  fill(secondaryColour) //cheeks
  strokeWeight(0);
  ellipse(headX-20, headY-2, 20, 12);
  ellipse(headX+20, headY-2, 20, 12);

  noFill(); //eyes
  stroke(lineColour);
  strokeWeight(3);
  line(headX-22, headY-8, headX-8, headY-5 )
  line(headX+22, headY-8, headX+8, headY-5 )

  fill(lineColour); //eyebrows & nose
  stroke(lineColour);
  ellipse(headX-8, headY-13, 3, 2);
  ellipse(headX+8, headY-13, 3, 2);
  ellipse(headX, headY, 3, 0.2);

  noFill(); //mouth
  strokeWeight(2);
  push();
  angleMode(DEGREES)
  translate(headX, headY);  
   rotate(-30);
  arc(12, 0, 25, 25, 90, 180);
  rotate(-30);
  arc(0, -12, 25, 25, 90, 180);
 pop();

  noFill(); //whiskers
  stroke(lineColour);
  strokeWeight(outlineWidth);
  line(headX-28, headY-6, headX-40, headY-10 );
  line(headX+28, headY-6, headX+40, headY-10 );
  line(headX-28, headY, headX-42, headY );
  line(headX+28, headY, headX+42, headY );
  line(headX-28, headY+6, headX-40, headY+10 );
  line(headX+28, headY+6, headX+40, headY+10 );

  //rect(40 ,40, rect_width, rect_height);
}
