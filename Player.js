class Player {

    constructor(){
        this.fx = new Fx();
        this.img = null;
        this.laserSound = null;
        this.turnSpeed = 5;
        this.acceleration = 5;
        this.friction = 0.99;
        this.x = 0;
        this.y = 0;
        this.thrust = { x:0 , y:0 };
        this.angle = 0;
        this.rotation = 0;
    }

    init(){
        this.fx.init();
        this.img = window.gui.getResource("player-img");
        this.laserSound = window.gui.getResource("laser-audio")
        this.x = this.fx.cnv.width/2 - this.img.width*2;
        this.y = this.fx.cnv.height/2 - this.img.height;
        this.thrust = { x:0, y:0 };
        this.angle = 270/180*Math.PI;
        this.rotation = 0;
    }

    update(){

    }

    render(){
        this.fx.rotateAndDrawImage(this.img, this.x, this.y, this.angle);
    }
}