//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background("#c71a5f")
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
drawCat(0,0,0)
drawFish(0,0,0)


function drawCat(){
push();
translate(0,0);
scale(1.5);
  let headX = 35;
  let headY = 40;
  let outlineWidth = 1; //1
  let furColour = "#ffffff"; //#ffffff
  let secondaryColour = "#b8d8ff"; //#b8d8ff
  let lineColour = "#5989ab"; //#5989ab
  drawHead (0,0,0)
  drawEars(0,0,0)
  drawFace(0,0,0)

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

  function drawFace() {
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
  pop();
 }


function drawFish(){
push();
translate(0,0);
scale(1.3);
  let fishX = 120;
  let fishY = 110;
  let fishHeadX = 96;
  let fishHeadY = 30;
  let fillingColour = "#7a4033"; //#bd1340 redbean or jam colour, #7a4033 nutella
  noStroke();
  drawTail (0,0,0)
  drawFishhead(0,0,0)

  function drawTail() {
  fill("#db8b51"); //tailfin
  push();
  angleMode(DEGREES)
  translate(fishX, fishY);  
    rotate(-20);
  ellipse(30, 5, 30, 15);
    rotate(-130);
  ellipse(-28, 10, 30, 15);
  pop();
  ellipse(fishX+30, fishY, 30, 15);

  fill("#e09963");
    push();
  angleMode(DEGREES)
  translate(fishX, fishY);  
    rotate(-11);
  ellipse(34, -2, 12, 2);
  rotate(+11);
  ellipse(34, 0, 12, 2);
  rotate(+11);
  ellipse(34, 2, 12, 2);
  pop();

  fill("#db8b51"); //fin
    push();
  angleMode(DEGREES)
  translate(fishX, fishY);  
    rotate(15);
  ellipse(4, -17, 25, 15);
  fill("#e09963");   
    rotate(-105);
  arc(0, -2, 40, 55, 0, 180);
  pop();

  fill("#e09963"); //insides
  //ellipse(100, 100, 55, 40); 
  fill("#ffc28c"); 
  ellipse(fishX-2, fishY, 10, 40); 
  fill(fillingColour); 
  ellipse(fishX-2, fishY, 5, 30); 

  fill("#db8b51"); //scales
  ellipse(fishX+14, fishY-3, 9, 9);
  ellipse(fishX+14, fishY+3, 9, 9);
  
  fill("#e09963");
  ellipse(fishX+14, fishY-3, 6, 6);
  ellipse(fishX+14, fishY+3, 6, 6);

  fill("#db8b51");
  ellipse(fishX+10, fishY-7, 9, 9);
  ellipse(fishX+10, fishY, 9, 9);
  ellipse(fishX+10, fishY+7, 9, 9);
  
  fill("#e09963");
  ellipse(fishX+9, fishY-7, 8, 8);
  ellipse(fishX+9, fishY, 8, 8);
  ellipse(fishX+9, fishY+7, 8, 8); 
  }

  function drawFishhead() {
  //ellipse(-2, -17, 30, 15);
  fill("#e09963");   
  rect(fishHeadX+2, fishHeadY+60, 10, 40); 

  fill("#ffc28c");  //lips
  ellipse(fishHeadX-16, fishHeadY+84, 8, 6);
  fill("#f7b97e"); 
  ellipse(fishHeadX-17, fishHeadY+80, 8, 6);
  
  fill("#e09963"); //face
  ellipse(fishHeadX+12, fishHeadY+80, 20, 40);
  fill("#edab6d"); 
  ellipse(fishHeadX, fishHeadY+80, 32, 40); 

  noStroke(); //eye
  fill("#db8b51");
  ellipse(fishHeadX-5, fishHeadY+77, 7, 7);
  fill("#edab6d");
  ellipse(fishHeadX-5, fishHeadY+77, 4, 4);
  }
pop();
}

}


