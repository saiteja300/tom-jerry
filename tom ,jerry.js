var garden, gardenImg;
var cat,catImg;

function preload() {
    //load the images here

}

function setup(){
garden=createSprite(500,200,500,450)
cat=createSprite(300,200,20,20)  
cat.shapeColor="green" ;
mouse=createSprite(700,200,20,20)
mouse.shapeColor="yellow"
    //create tom and jerry sprites here

}

function draw() {  
createCanvas(1000,800);
    background(255);
    //Write condition here to evalute if tom and jerry collide
 
 if(cat.isTouching(mouse)){
     mouse.shapeColor="blue"
     
 }
 if(keyDown("left_arrow")){
cat.velocityX=2;
cat.velocityY=0;
 }

 if(keyDown("right_arrow")){
    cat.velocityX=2;
    cat.velocityY=0;
     }







 

 drawSprites();
}


function keyPressed(){


  //For moving and changing animation write code here

 
    
    





}


