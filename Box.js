class Box{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.color = color(random(0,200),random (0,200), random(0,200));
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill (this.color);
      rect(0,0,this.width, this.height);
      pop();
      //console.log(this.body);
    }
  }