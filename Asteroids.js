class AsteroidService {

    constructor(){
        this.collection = [];
    }

    init(total){
        this.collection = [];
        for(let i = 0; i < total; i++){
            let asteroid = new Asteroid();
            asteroid.init();
            this.collection.push(asteroid);
        }
    }

    update(){
        this.collection.forEach(a => {
            a.update();
        });
    }

    render(){
        this.collection.forEach(a => {
            a.render();
        });
    }
}

class Asteroid {

    constructor(){
        this.fx = new Fx();
        this.img = null;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.speed = 0;
        this.rotation = 0.0;
        this.turnrate = 0.0;
    }

    init(){
        this.fx.init();
        this.img = window.gui.getResource("asteroid-img");
        this.x = 0 - this.img.width/2;
        this.y = 0 - this.img.height;
        this.angle = Math.random()*Math.PI*2.0;
        this.speed = Math.random()*Math.PI*0.5;
        this.rotation = 0;
        this.turnrate = Math.random()*(0.04 - -0.04) + -0.04;
    }

    update(){
        this.x += Math.cos(this.angle)*this.speed;
        this.y += Math.sin(this.angle)*this.speed;
        this.rotation += this.turnrate;
        if(this.x > this.fx.cnv.width) {
            this.x = 0 - this.img.width/2;
        }
        if(this.x + this.img.width < 0) {
            this.x = this.fx.cnv.width;
        }
        if(this.y > this.fx.cnv.height) {
            this.y = 0;
        }
        if(this.y + this.img.height < 0) {
            this.y = this.fx.cnv.height;
        }
    }

    render(){
        this.fx.rotateAndDrawImage(this.img,  this.x, this.y, this.rotation);
    }
}