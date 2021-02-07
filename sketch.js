var cat, catRunning, catSitting, catSitting1
var mouse, mouse1, mouse2, mouse3, mouse4, mouseSittingImage1, mouseSittingImage2, mouseSittingImage3, mouseSittingImage4
var background1,backgroundImage;
//var mouse;mouseImage;
function preload() {
    //load the images here
  catRunning = loadAnimation("images/tomTwo.png","images/tomThree.png");
  catSitting = loadImage("images/tomOne.png")
  catSitting1 = loadImage("images/tomFour.png")
  mouseSittingImage1 = loadImage("images/jerryOne.png")
  mouseSittingImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
  mouseSittingImage4 = loadImage("images/jerryFour.png")
  backgroundImage = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(900,390,50,50);
    cat.addAnimation("Running",catSitting);
    cat.scale = 0.1

    mouse = createSprite(180,390,50,50);
    mouse.addAnimation("Sitting",mouseSittingImage1);
    //mouse.velocityX=-0.1;
    mouse.scale = 0.1;

    background1 = createSprite(200,0,1000,800);
    background1.addImage("Background",backgroundImage);
    background1.scale = 2
    //background1.velocityX = 5
    cat.depth=background1.depth
    cat.depth+=1

    mouse.depth=background1.depth
    mouse.depth+=1

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if (cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
      cat.addAnimation("Sitting",catSitting1)
      cat.changeAnimation("Sitting")
      cat.velocityX=0;
      cat.x = 240
      mouse.addAnimation("LastImage",mouseSittingImage4)
      mouse.changeAnimation("LastImage")
    }

    drawSprites()
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW)
     cat.velocityX = -5;
     cat.addAnimation("Running",catRunning);
     cat.changeAnimation("catRunning")
     mouse.addAnimation("moving",mouseSittingImage2);
     mouse.changeAnimation("moving")
}
