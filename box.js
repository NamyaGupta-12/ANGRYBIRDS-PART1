class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.2,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 70, 70, options);
    this.width = 70;
    this.height = 70;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    fill('yellow');
    strokeWeight(4);
    stroke("orange");
    rect(0,0, this.width, this.height);
  pop()
  }
};
