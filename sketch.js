function setup(){
    //put setup code here
    createCanvas(400,400);
    background(0,255,0);

}
function draw() {
    strokeWeight(1)
    line(200,175,200,75)
    ellipse(200,100,75,75)
    strokeWeight(2)
    ellipse(185,100,10,10)
    ellipse(215,100,10,10)
    strokeWeight(2)
    arc(200,120,40,10,0,PI)
    strokeWeight(1)
    line(200,175,260,250)
    line(200,175,200,250)
    line(200,175,125,250)
    fill(203,65,84)
    //rect(275,75,25,50)
    stroke()
  }