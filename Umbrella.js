class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image1 = loadImage("images/walking_1.png");
        this.image2 = loadImage("images/walking_2.png");

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        if(sprite1.x % 20 === 0) {
            state = 2;
        }
        if(sprite2.x % 20 === 0) {
            state = 1;
        }

        if(state === 1) {
            image(this.image1,pos.x,pos.y+70,300,300);
        }
        else if(state === 2) {
            image(this.image2,pos.x,pos.y+70,300,300);
        }
    }
}