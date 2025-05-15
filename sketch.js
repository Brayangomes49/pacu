function setup() {
  createCanvas(400, 400);
}

let olhoX
let olhoY

function draw() {
  background('blue')
  
  //rosto
  fill('red')
  stroke('black')
  strokeWeight(9)
  circle(200 , 200 , 300);
  //olhos esquerdo 
  fill('blac')
  circle(150 ,150 , 60 );
  circle(250 , 150 ,60);
  //boca
  fill('black')
  stroke(9)
  strokeWeight(20)
   line(114, 246, 290, 246);
  //popilas
fill('black')
//circle(150, 150, 10)//olho esquerdo
//  circle(250, 150, 10)
  
  olhoX= map(mouseX,0,400,129,148)
  olhoY= map(mouseY,0,400,129,148)
  
  circle(olhoX,olhoY, 10 )
  circle(olhoX+100,olhoY, 10 )
  //nariz
  fill('pink')
triangle(202, 184, 157, 224, 242, 223)
  //cabelo
  stroke('')
   line(154, 86, 186, 5 )
   line(174, 86, 206, 5)
  line(196, 86, 227, 5)
 if(mouseIsPressed){
  console.log(mouseX,mouseY);
 
}
}