class Game {

    constructor() {
        this.fx  = new Fx();
    }

    init() {
        this.fx.init();
    }

    resize() {
        console.log("game resize");
    }

    update() {
        console.log("game update");
    }

    render() {
        this.fx.fillCanvas("#000");
    }
}