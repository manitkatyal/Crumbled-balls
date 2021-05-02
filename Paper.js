class Paper{
    constructor() {
        var options={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
    
        this.body=Bodies.circle(150,400,20,options);

        World.add(world,this.body);
    }

    display() {
        push();
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,40);
        strokeWeight(4);
        stroke("darkgreen");
        fill("green");
        pop();
    }
}