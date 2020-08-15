class Bird extends Box {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("ball.png");
  }

  display() {
    push();
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
}
