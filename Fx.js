class Fx {

    constructor(){
        this.cnv = null;
        this.ctx = null;
    }

    init(){
        this.cnv = document.getElementById("Canvas");
        this.ctx = this.cnv.getContext("2d");
    }

    fillCanvas(color){
        this.drawRect(0, 0, this.cnv.width, this.cnv.height, color);
    }

    drawRect(x, y, width, height, color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
        this.ctx.fill();
    }

    drawCircle(x, y, size, color){
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, size, 0, Math.PI*2);
        this.ctx.fill();
    }

    
}