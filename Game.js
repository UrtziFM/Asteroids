class Game {

    constructor() {
        this.fx  = new Fx();
        this.particleService = new ParticleService();
        this.player = new Player(this.particleService);
        this.asteroidService = new AsteroidService(this.player, this.particleService);
    }

    init() {
        this.fx.init();
        this.player.init();
        this.particleService.init();
        this.asteroidService.init(50);
    }

    resize() {
        console.log("game resize");
    }

    update() {
        this.player.update();
        this.particleService.update();
        this.asteroidService.update();
    }

    render() {
        this.fx.fillCanvas("#000");
        this.player.render();
        this.particleService.render();
        this.asteroidService.render();
        this.fx.userScore();
    }
}