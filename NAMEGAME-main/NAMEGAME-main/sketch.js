var sprites=[];
var gen=false;
var posx=0;
var posy=0;
function preload(){
  pot= loadImage("pot2.png");
  pot2= loadImage("pot3.png");
  pot3= loadImage("pot4.png");
  pot4= loadImage("pot5.png");
  

}
function setup(){
  
createCanvas(windowWidth,windowHeight)

sp1= createSprite(width/2,height-50,50,50);
sp2= createSprite(width/2,height-50,50,50);
sp2.visible=false;
//sp1.addImage("Pot",Pot);
//sp2.addImage("Pot",Pot);
//sp2.scale = 2
}

function draw(){
  background(62, 63, 71)
  drawSprites()
  stroke(66,67,75)
    for(var i=0;i<width;i+=100){
      for(var j=0;j<height;j+=100){
      
        line(i,0,i,height);
        line(0,i,width,i);
      }

  }
  if(mousePressedOver(sp2)){
    gen=true;
  }
  if(gen==true){
    generation();
    posX=mouseX;
    posY=mouseY;
  }
}

function generation(){
  sp2.x= mouseX;
  sp2.y= mouseY;

  sp2.visible=true;
}
function mouseClicked(){

  gen=false;
  var spritenew= createSprite(Math.ceil(posX/100)*100-50,Math.ceil(posY/100)*100-50,50,50);
  spritenew.addImage("Pot",pot);
  sp2.x=width/2
  sprites.push(spritenew);
  
  sp2.y=height-50;
  spritenew.addImage("pot2",pot2);
  spritenew.addImage("pot3",pot3);
  spritenew.addImage("pot4",pot4);
  changeImg(spritenew);
  changeImg2(spritenew);
  changeImg3(spritenew);
  
  
}

function changeImg(obj){
  setTimeout(() => {
    obj.changeImage("pot2")
  }, 3000);
  
}

function changeImg2(obj){
  setTimeout(() => {
    obj.changeImage("pot3")
  }, 6500);
  
}

function changeImg3(obj){
  setTimeout(() => {
    obj.changeImage("pot4")
  }, 10000);
  
}