class Box {
  constructor(x,y,width,height) {
      
  this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("wood1.png");
  }
  display(){
    if(this.body.speed<3){
    push();
    var pos =this.body.position;
    strokeWeight(0);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
  else{
  World.remove(world, this.body);
  push();
    this.Visiblity = this.Visiblity - 7;
    tint(255, this.Visiblity);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }
  }
};