//declaration of variables

var red,green,blue,yellow
var white_red, white_blue
var white_green, white_yellow
var homesquare
var bluesmall1, bluesmall2, bluesmall3, bluesmall4
var yellowsmall1, yellowsmall2, yellowsmall3, yellowsmall4
var redsmall1, redsmall2, redsmall3, redsmall4
var greensmall1,greensmall2,greensmall3,greensmall4
var bluepawns = [],greenpawns = [], yellowpawns = [], redpawns =[];
var diceimg1, diceimg2, diceimg3, diceimg4, diceimg5, diceimg6, diceinitial;
var dice, r1, r2, g1, g2, y1, y2, b1, b2;
var num , currclr = "", currpawn = ""; 
var gameState = "red";

//create arrays
var grid = {
  red:[],
  green:[],
  blue:[],
  yellow:[]
}
var onboard={red:0, green:0, blue:0, yellow:0}
var home={red:0, green:0, blue:0, yellow:0 }

//to know whether a certain pawn of a certain colour is inside or on board ( o= inside, 1=onboard)
//use JSON objects
var pawnout= {
  red:{pawn1:0, pawn2:0, pawn3:0, pawn4:0},
  green:{pawn1:0, pawn2:0, pawn3:0, pawn4:0},
  yellow:{pawn1:0, pawn2:0, pawn3:0, pawn4:0},
  blue:{pawn1:0, pawn2:0, pawn3:0, pawn4:0}
}

var positions= {
  red:{pawn1:0, pawn2:0, pawn3:0, pawn4:0},
  green:{pawn1:0, pawn2:0, pawn3:0, pawn4:0},
  yellow:{pawn1:0, pawn2:0, pawn3:0, pawn4:0},
  blue:{pawn1:0, pawn2:0, pawn3:0, pawn4:0}
}

function preload()
{
diceimg1=loadImage("tile000.png")
diceimg2=loadImage("tile001.png")
diceimg3=loadImage("tile002.png")
diceimg4=loadImage("tile003.png")
diceimg5=loadImage("tile004.png")
diceimg6=loadImage("tile005.png")
diceinitial=loadImage("dicepaint.png")
}


function setup() {
  createCanvas(800,800);
  
  //dice

  dice=createSprite(600,100,100,100);
  dice.addImage(diceinitial);
  dice.scale=0.5;

  //big red square
  red =createSprite(90,360, 180,180);
  red.shapeColor="red"
  
  //big green square
  green =createSprite(360,360,180,180);
  green.shapeColor="green"

  //big blue square
  blue =createSprite(90,90,180,180);
  blue.shapeColor="blue"

  // big yellow square
  yellow =createSprite(360,90,180,180);
  yellow.shapeColor="yellow"

  //white within red
  white_red=createSprite(90,360,150,150);
  white_red.shapeColor="white";

  // white within green
  white_green=createSprite(360,360,150,150);
  white_green.shapeColor="white";

//white within yellow
  white_yellow=createSprite(360,90,150,150);
  white_yellow.shapeColor="white";

//white within blue
  white_blue=createSprite(90,90,150,150);
  white_blue.shapeColor="white";

//create home square
  homesquare=createSprite(225,225,90,90);
  homesquare.shapeColor="black";

  //four blue squares in big blue box
  bluesmall1=createSprite(50,50,40,40);
  bluesmall12=createSprite(50,50,30,30);
  bluesmall12.shapeColor="white";
  bluesmall2=createSprite(50,120,40,40);
  
  bluesmall22=createSprite(50,120,30,30);
  bluesmall22.shapeColor="white";
  
  bluesmall3=createSprite(120,50,40,40);
  bluesmall32=createSprite(120,50,30,30);
  bluesmall32.shapeColor="white";
  
  bluesmall4=createSprite(120,120,40,40);
  bluesmall42=createSprite(120,120,30,30);
  bluesmall42.shapeColor="white";
  bluesmall1.shapeColor="blue";
  bluesmall2.shapeColor="blue";
  bluesmall3.shapeColor="blue";
  bluesmall4.shapeColor="blue";
  
  //four yellow squares in yellow big box
  
  yellowsmall1=createSprite(390,50,40,40);
  yellowsmall12=createSprite(390,50,30,30);
  yellowsmall2=createSprite(320,50,40,40);
  yellowsmall12.shapeColor="white"
  
  yellowsmall22=createSprite(320,50,30,30);
  yellowsmall3=createSprite(320,110,40,40);
  yellowsmall22.shapeColor="white"
  
  yellowsmall32=createSprite(320,110,30,30);
  yellowsmall32.shapeColor="white"
  yellowsmall4=createSprite(390,110,40,40);
 
  yellowsmall42=createSprite(390,110,30,30);
  yellowsmall42.shapeColor="white"
  
  yellowsmall1.shapeColor="yellow";
  yellowsmall2.shapeColor="yellow";
  yellowsmall3.shapeColor="yellow";
  yellowsmall4.shapeColor="yellow";
  
  
  // small red squares in big red square
  redsmall1=createSprite(50,320,40,40);
  redsmall12=createSprite(50,320,30,30);
  redsmall12.shapeColor="white";
  
  redsmall2=createSprite(120,320,40,40);
  redsmall22=createSprite(120,320,30,30);
  redsmall22.shapeColor="white";
  
  redsmall3=createSprite(50,400,40,40);
  redsmall32=createSprite(50,400,30,30);
  redsmall32.shapeColor="white";
  
  redsmall4=createSprite(120,400,40,40);
  redsmall42=createSprite(120,400,30,30);
  redsmall42.shapeColor="white";
  
  redsmall1.shapeColor="red";
  redsmall2.shapeColor="red";
  redsmall3.shapeColor="red";
  redsmall4.shapeColor="red";
  
  //small green squares in big green square
  greensmall1=createSprite(390,320,40,40);
  greensmall12=createSprite(390,320,30,30);
  greensmall1.shapeColor="green"; 
  greensmall12.shapeColor="white"; 
  
  greensmall2=createSprite(320,320,40,40);
  greensmall22=createSprite(320,320,30,30);
  greensmall2.shapeColor="green";
  greensmall22.shapeColor="white";
  
  greensmall3=createSprite(320,400,40,40);
  greensmall3.shapeColor="green";
  greensmall32=createSprite(320,400,30,30);
  greensmall32.shapeColor="white";
  
  
  greensmall4=createSprite(390,400,40,40);
  greensmall42=createSprite(390,400,30,30);
  greensmall4.shapeColor="green";
  greensmall42.shapeColor="white";
  
  
  //blue pawns
  bluepawn1=createSprite(50,50,15,15)
  bluepawn1.shapeColor="blue"
  bluepawn2=createSprite(50,120,15,15)
  bluepawn2.shapeColor="lightblue"
  bluepawn3=createSprite(120,120,15,15)
  bluepawn3.shapeColor="blue"
  bluepawn4=createSprite(120,50,15,15)
  bluepawn4.shapeColor="blue"
  bluepawns = [bluepawn1,bluepawn2,bluepawn3,bluepawn4];
  
  //red pawns

  redpawn1=createSprite(50,320,15,15)
  redpawn1.shapeColor="red"
  redpawn2=createSprite(120,320,15,15)
  redpawn2.shapeColor="red"
  redpawn3=createSprite(120,400,15,15)
  redpawn4=createSprite(50,400,15,15)
  redpawn3.shapeColor="red" 
  redpawn4.shapeColor="red"
  redpawns=[redpawn1,redpawn2,redpawn3,redpawn4];
  
  //yellow pawns
  yellowpawn1=createSprite(390,50,15,15)
  yellowpawn1.shapeColor="yellow";
  yellowpawn2=createSprite(320,50,15,15)
  yellowpawn2.shapeColor="yellow";
  yellowpawn3=createSprite(390,110,15,15)
  yellowpawn3.shapeColor="yellow"
  yellowpawn4=createSprite(320,110,15,15)
  yellowpawn4.shapeColor="yellow";
  yellowpawns=[yellowpawn1,yellowpawn2,yellowpawn3,yellowpawn4];

  //green pawns
  greenpawn1=createSprite(390,320,15,15);
  greenpawn1.shapeColor="green";
  greenpawn2=createSprite(320,320,15,15);
  greenpawn2.shapeColor="green";
  greenpawn3=createSprite(390,400,15,15);
  greenpawn3.shapeColor="green";
  greenpawn4=createSprite(320,400,15,15);
  greenpawn4.shapeColor="green"
  greenpawns=[greenpawn1,greenpawn2,greenpawn3,greenpawn4];

  stroke("black")
  strokeWeight(3)
  //CREATE PATHS FOR PAWNS
  //redpawnspath
  pushsteps(grid["red"],5,0,-30,195,400);
  pushsteps(grid["red"],6,-30,0,165,255);
  pushsteps(grid["red"],2,0,-30,15,225);
  pushsteps(grid["red"],5,30,0,45,195);
  pushsteps(grid["red"],6,0,-30,195,165);
  pushsteps(grid["red"],2,30,0,225,15);
  pushsteps(grid["red"],5,0,30,255,45);
  pushsteps(grid["red"],6,30,0,285,195);
  pushsteps(grid["red"],2,0,+30,435,225);
  pushsteps(grid["red"],5,-30,0,405,255);
  pushsteps(grid["red"],6,0,+30,255,285);
  pushsteps(grid["red"],1,-30,0,225,435);
  pushsteps(grid["red"],5,0,-30,225,405);
  pushsteps(grid["red"],1,0,30,homesquare.x,homesquare.y);
  
  //greenpawnspath

  pushsteps(grid["green"],5,-30,0,405,255);
  pushsteps(grid["green"],6,0,30,255,285);
  pushsteps(grid["green"],2,-30,0,225,435);
  pushsteps(grid["green"],5,0,-30,195,405);
  pushsteps(grid["green"],6,-30,0,165,255)
  pushsteps(grid["green"],2,0,-30,15,225);
  pushsteps(grid["green"],5,30,0,45,195);
  pushsteps(grid["green"],6,0,-30,195,165);
  pushsteps(grid["green"],2,30,0,225,15);
  pushsteps(grid["green"],5,0,30,255,45);
  pushsteps(grid["green"],6,30,0,285,195);
  pushsteps(grid["green"],1,-30,0,435,225);
  pushsteps(grid["green"],5,-30,0,405,225);
  pushsteps(grid["green"],1,0,30,homesquare.x,homesquare.y);

  //bluepawnspath
  pushsteps(grid["blue"],5,30,0,45,195);
  pushsteps(grid["blue"],6,0,-30,195,165);
  pushsteps(grid["blue"],2,30,0,225,15);
  pushsteps(grid["blue"],5,0,30,255,45);
  pushsteps(grid["blue"],6,30,0,285,195);
  pushsteps(grid["blue"],2,0,+30,435,225);
  pushsteps(grid["blue"],5,-30,0,405,255);
  pushsteps(grid["blue"],6,0,+30,255,285);
  pushsteps(grid["blue"],2,-30,0,225,435);
  pushsteps(grid["blue"],5,0,-30,195,405);
  pushsteps(grid["blue"],6,-30,0,165,255);
  pushsteps(grid["blue"],1,-30,0,15,225);
  pushsteps(grid["blue"],5,30,0,45,225);
  pushsteps(grid["blue"],1,0,30,homesquare.x,homesquare.y);

  //yellowpawnspath
  pushsteps(grid["yellow"],5,0,30,255,45);
  pushsteps(grid["yellow"],6,30,0,285,195);
  pushsteps(grid["yellow"],2,0,+30,435,225);
  pushsteps(grid["yellow"],5,-30,0,405,255);
  pushsteps(grid["yellow"],6,0,+30,255,285);
  pushsteps(grid["yellow"],2,-30,0,225,435);
  pushsteps(grid["yellow"],5,0,-30,195,405);
  pushsteps(grid["yellow"],6,-30,0,165,255);
  pushsteps(grid["yellow"],2,0,-30,15,225);
  pushsteps(grid["yellow"],5,30,0,45,195);
  pushsteps(grid["yellow"],6,0,-30,195,165);
  pushsteps(grid["yellow"],1,0,-30,225,15);
  pushsteps(grid["yellow"],5,0,30,225,45);
  pushsteps(grid["yellow"],1,0,30,homesquare.x,homesquare.y);
  
  console.log(grid)
  //console.log(grid["red"])
  //console.log(grid["red"][0])
 console.log(gameState)
  
}


function pushsteps(grid,steps,xoff, yoff,x,y)
{
  for(i=0;i<steps;i++)
  {
    grid.push({
      x: x, y: y
    })
    x= x+xoff;
    y=y+yoff;
  }
}


function keyPressed(){
if(keyCode===65)
  {dice.rotationSpeed=0;
      num=Math.round(random(1,6))
      switch(num)
      {
        case 1: dice.addImage(diceimg1)
        break
  
        case 2: dice.addImage(diceimg2)
        break
  
        case 3: dice.addImage(diceimg3)
        break
  
        case 4: dice.addImage(diceimg4)
        break
  
        case 5: dice.addImage(diceimg5)
        break
  
        case 6: dice.addImage(diceimg6)
        break
  
        default: break
        
      }
    }
  }

function movePawn(pawn,index)
{
  positions[gameState][index] +=num;
  pawn.x = grid[gameState][positions[gameState][index]-1].x;
  pawn.y = grid[gameState][positions[gameState][index]-1].y;
}
 





function draw() {
  background(0,0,0); 
  rectMode(CENTER)
  dice.rotationSpeed=3;
  console.log(gameState);

  //winning condition
if(redpawns[0].x===homesquare.x && redpawns[0].y===homesquare.y || redpawns[1].x===homesquare.x && redpawns[1].y===homesquare.y || 
  redpawns[2].x===homesquare.x && redpawns[2].y===homesquare.y || redpawns[3].x===homesquare.x && redpawns[3].y===homesquare.y   )
{home.red++

  if(home.red===4)
{
  fill("white")
  text("RED WON!", 185, 565)}
}

if(greenpawns[0].x===homesquare.x && greenpawns[0].y===homesquare.y || greenpawns[1].x===homesquare.x && greenpawns[1].y===homesquare.y || 
  greenpawns[2].x===homesquare.x && greenpawns[2].y===homesquare.y || greenpawns[3].x===homesquare.x && greenpawns[3].y===homesquare.y   )
{home.green++

  if(home.green===4)
{
  fill("white")
  text("GREEN WON!", 185, 565)}
}

if(yellowpawns[0].x===homesquare.x && yellowpawns[0].y===homesquare.y || yellowpawns[1].x===homesquare.x && yellowpawns[1].y===homesquare.y || 
  yellowpawns[2].x===homesquare.x && yellowpawns[2].y===homesquare.y || yellowpawns[3].x===homesquare.x && yellowpawns[3].y===homesquare.y   )
{home.yellow++

  if(home.yellow===4)
{
  fill("white")
  text("YELLOW WON!", 185, 565)}
}

if(bluepawns[0].x===homesquare.x && bluepawns[0].y===homesquare.y || bluepawns[1].x===homesquare.x && bluepawns[1].y===homesquare.y || 
  bluepawns[2].x===homesquare.x && bluepawns[2].y===homesquare.y || bluepawns[3].x===homesquare.x && bluepawns[3].y===homesquare.y   )
{home.blue++

  if(home.blue===4)
{
  fill("white")
  text("BLUE WON!", 185, 565)}
}


//make red pawn move
  if(gameState === "red"){
    if(keyPressed && positions[gameState]["pawn1"]>56)
{
  gameState==="green"
  num=0
}
    if(onboard.red === 0)
    {        
      if(keyPressed && num===6)
      {

        onboard.red++;
        pawnout.red.pawn1 = 1;
        positions[gameState]["pawn1"] ++;
        redpawns[0].x = grid[gameState][positions[gameState]["pawn1"]-1].x;
        redpawns[0].y = grid[gameState][positions[gameState]["pawn1"]-1].y;
        num=0;
        gameState="red"
        
      }
      else if(keyPressed && num===1 || num===2 || num===3 || num===4 || num===5){
        gameState="green"
        num=0
      }
    }
    
    if (onboard.red===1 && num===1 || num===2 || num===3 || num===4 || num===5)
    {
      movePawn(redpawns[0], "pawn1")
      num=0;
      gameState="green"
    }

    if(onboard.red===1 && num===6)
    {
      r1=createSprite(redpawns[0].x, redpawns[0].y, 20,20)
      r2=createSprite(redpawns[1].x, redpawns[1].y, 20,20)
      gameState="red"
      
    }

  }


//make green pawn move
if(gameState === "green"){
 
  if(keyPressed && positions[gameState]["pawn1"]>56)
  {
    gameState==="yellow"
    num=0
  }
  if(onboard.green === 0)
  {        
    if(keyPressed && num===6)
    {

      onboard.green++;
      pawnout.green.pawn1 = 1;
      positions[gameState]["pawn1"] ++;
      greenpawns[0].x = grid[gameState][positions[gameState]["pawn1"]-1].x;
      greenpawns[0].y = grid[gameState][positions[gameState]["pawn1"]-1].y;
      num=0;
      gameState="green"
      
    }
    else if(keyPressed && num===1 || num===2 || num===3 || num===4 || num===5){
      gameState="yellow"
      num=0
    }
  }
  
  if (onboard.green===1 && num===1 || num===2 || num===3 || num===4 || num===5)
  {
    movePawn(greenpawns[0], "pawn1")
    num=0;
    gameState="yellow"
  }

  
  if(onboard.green===1 && num===6)
  {
    g1=createSprite(greenpawns[0].x, greenpawns[0].y, 20,20)
    g2=createSprite(greenpawns[1].x, greenpawns[1].y, 20,20)
    gameState="green"
  }

}

//make yellow pawn move
if(gameState === "yellow"){
    
  if(keyPressed && positions[gameState]["pawn1"]>56)
  {
    gameState==="blue"
    num=0
  }
  if(onboard.yellow === 0)
  {        
    if(keyPressed && num===6)
    {

      onboard.yellow++;
      pawnout.yellow.pawn1 = 1;
      positions[gameState]["pawn1"] ++;
      yellowpawns[0].x = grid[gameState][positions[gameState]["pawn1"]-1].x;
      yellowpawns[0].y = grid[gameState][positions[gameState]["pawn1"]-1].y;
      num=0;
      gameState="yellow"
      
    }
    else if(keyPressed && num===1 || num===2 || num===3 || num===4 || num===5){
      gameState="blue"
      num=0
    }
  }
  
  if (onboard.yellow===1 && num===1 || num===2 || num===3 || num===4 || num===5 )
  {
    movePawn(yellowpawns[0], "pawn1")
    num=0;
    gameState="blue"
  }

  
  if(onboard.yellow===1 && num===6)
  {
    y1=createSprite(yellowpawns[0].x, yellowpawns[0].y, 20,20)
    y2=createSprite(yellowpawns[1].x, yellowpawns[1].y, 20,20)
    gameState="yellow"
  }

}

//make blue pawn move
if(gameState === "blue"){
  if(keyPressed && positions[gameState]["pawn1"]>56)
  {
    gameState==="red"
    num=0
  }  

  if(onboard.blue === 0)
  {        
    if(keyPressed && num===6)
    {

      onboard.blue++;
      pawnout.blue.pawn1 = 1;
      positions[gameState]["pawn1"] ++;
      bluepawns[0].x = grid[gameState][positions[gameState]["pawn1"]-1].x;
      bluepawns[0].y = grid[gameState][positions[gameState]["pawn1"]-1].y;
      num=0;
      gameState="blue"
      
    }
    else if(keyPressed && num===1 || num===2 || num===3 || num===4 || num===5){
      gameState="red"
      num=0
    }
  }
  
  if (onboard.blue===1 && num===1 || num===2 || num===3 || num===4 || num===5 )
  {
    movePawn(bluepawns[0], "pawn1")
    num=0;
    gameState="red"
  }

  
  if(onboard.blue===1 && num===6)
  {
    b1=createSprite(bluepawns[0].x, bluepawns[0].y, 20,20)
    b1.depth=bluepawns[0].depth-1
    b2=createSprite(bluepawns[1].x, bluepawns[1].y, 20,20)
    b2.depth=bluepawns[1].depth-1

    if(mousePressedOver(b1))
    {movePawn(bluepawns[0], "pawn1")
    b1.shapeColor="white"
    num=0;
    gameState="blue"
 
    }

    if(mousePressedOver(b2))
    {
      onboard.blue++;
      pawnout.blue.pawn2 = 1;
      positions[gameState]["pawn2"] ++;
      bluepawns[1].x = grid[gameState][positions[gameState]["pawn2"]-1].x;
      bluepawns[1].y = grid[gameState][positions[gameState]["pawn2"]-1].y;
      num=0;
      gameState="waitingblue"
    }

      if (gameState==="waitingblue" && onboard.blue===2 && (num===1 || num===2 || num===3 || num===4 || num===5 ))
  {
    movePawn(bluepawns[1], "pawn2")
    num=0;
    gameState="red"
  }

    
  }

}






//create the path between yellow and green boxes
for(var c=255; c<465;c=c+30)
    
{ rect(c,195,30,30);
 fill("green")
 rect(c,225,30,30);
rect(405,255,30,30);
 fill("white")
 rect(435,225,30,30);
 rect(c,255,30,30);
 }


//create the path between red and green boxes
for(var b=280;b<455 ; b=b+30)
{ rect(195,b,30,30);
 fill("red");
rect(225,b,30,30);
rect(195,400, 30, 30); 
 fill("white")
 rect(225,430,30,30)
 rect(255,b,30,30);

}


//create the path between red and blue boxes
for(var a=15;a< 185; a=a+30)
{rect(a,195,30,30);
 fill("blue");
 rect(a,225,30,30);
 rect(45,195,30,30);
 fill("white")
 rect(a,255,30,30);
 rect(15,225,30,30)
}


// create the path between blue and yellow boxes 
for(var i=15; i<181 ;i=i+30)
{rect(195,i,30,30) 
fill("yellow")
rect(255,45,30,30)
rect(225,i,30,30) 
fill("white");
rect(225,15,30,30)
rect(255,i,30,30) 
}



drawSprites();

fill("white")
text("x:" + mouseX + "," + "y:" + mouseY, 700, 400)


//display text "Home"
textSize(25);
fill("white")
text("HOME", 190, 230)


}
