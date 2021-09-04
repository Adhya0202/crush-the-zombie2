class Stone {
    constructor(x, y,w,h) {
      var options = {
        restitution:0.8,
       
      };
      this.w = w;
   this.h = h;
      this.body = Bodies.rectangle(x, y,w,h,options);
      this.image = loadImage("assets/stone.png")
      World.add(world, this.body);
    }

    display(){
        fill("yellow");
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
       }
}