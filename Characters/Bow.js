class Bow  {
    constructor(x,y,width,height) {
      var options = {

          isStatic: true

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/bow.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      image(this.image,pos.x,pos.y,this.width,this.height)
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
