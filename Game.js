class Game {

    constructor() {
        this.fx  = new Fx();
        this.player = new Player();
        this.asteroidService = new AsteroidService();
    }

    init() {
        this.fx.init();
        this.player.init();
        this.asteroidService.init(8);
    }

    resize() {
        console.log("game resize");
    }

    update() {
        this.player.update();
        this.asteroidService.update();
    }

    render() {
        this.fx.fillCanvas("#000");
        this.player.render();
        this.asteroidService.render();
    }
}