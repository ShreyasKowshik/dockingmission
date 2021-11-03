var iss, spacecraft, hasDocked;
var issImage, spacecraft1, spacecraft2,spacecraft3, spacecraft4, bg;

function preload() {
  issImage = loadImage("iss.png");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  bg = loadImage("spacebg.jpg");
}

function setup() {
 canvas = createCanvas(1500,700);
  hasDocked = false;
  iss = createSprite(1000,200,0,0);
  iss.addImage("iss",issImage);
  iss.scale = 0.75;
  spacecraft = createSprite(400,400,0,0);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.20;
}

function draw() {
  background(bg);

  if(!hasDocked) {
    spacecraft.x += random(1,-1);


    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft2);
      spacecraft.y = spacecraft.y -5;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x - 5;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x + 5;
    }

    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft1);
      spacecraft.y = spacecraft.y + 5;
    }  
  }
  
  if(spacecraft.y <= (iss.y+95) && spacecraft.x >= (iss.x-55)){
    hasDocked = true;

    textSize(25);
    fill("red")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}