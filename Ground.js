class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("grass.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      strokeWeight(0);
      imageMode(CENTER);
      fill(112, 255, 109);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop ();
    }
  };
