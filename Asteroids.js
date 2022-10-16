class AsteroidService {

    constructor(player, particles){
        this.collection = [];
        this.player = player;
        this.particles = particles;
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
            a.checkForCollisionsWithPhasers(this.player.projectileService.collection, this.particles);
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
        this.boom = null;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.speed = 0;
        this.rotation = 0.0;
        this.turnrate = 0.0;
        this.active = false;
    }

    init(){
        this.fx.init();
        this.img = window.gui.getResource("asteroid-large");
        this.boom = window.gui.getResource("boom-audio");
        this.x = 0 - this.img.width/2;
        this.y = 0 - this.img.height;
        this.angle = Math.random()*Math.PI*2.0;
        this.speed = Math.random()*Math.PI*0.5;
        this.rotation = 0;
        this.turnrate = Math.random()*(0.04 - -0.04) + -0.04;
        this.active = true;
    }

    update(){
        if (this.active){
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
    }

    render(){
        if(this.active){
            this.fx.rotateAndDrawImage(this.img,  this.x, this.y, this.rotation);
        }
    }

    collisionDetected(){
        this.active = false;
        this.boom.pause();
        this.boom.currenTime = 0;
        this.boom.play();
    }

    hasCollidedWithEntity(entity){
        if( !this.active || !entity.active) { return false;}

        let aLeftOfB = (entity.x + entity.size) < (this.x);
        let aRightOfB = (entity.x) > (this.x + this.img.width);
        let aAboveB = (entity.y) > (this.x + this.img.height);
        let aBelowB = (entity.y + entity.size) < (this.y);

        return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
    }

    checkForCollisionsWithPhasers(phasers, particles){
        if(this.active) {
            phasers.forEach(p => {
                if(this.hasCollidedWithEntity(p)){
                    this.collisionDetected();
                    particles.spawn(16, this);
                    p.active = false;
                    return;
                }
            });
        }
    }
}