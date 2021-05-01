class Snowfall {
  constructor(x, y) {
    var options = {
      restitution: 0.6,
      density: 1.5,
      friction: 0,
      isStatic: false,
    };
    this.r = 100;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("snow4.webp");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    // ellipseMode(RADIUS);
    // ellipse(pos.x, pos.y, this.r, this.r);
  }
}
