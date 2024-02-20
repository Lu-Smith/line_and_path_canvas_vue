export default class LineOne {
    x: number;
    y: number;
    history: { x: number; y: number }[];
    lineWidth: number
    canvas: HTMLCanvasElement;
    hue: number;
    maxLength: number;
    speedX: number;
    speedY: number;
    lifeSpan: number;
    timer: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.history = [{x: this.x, y: this.y}];
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
        this.hue = Math.floor(Math.random() * 360);
        this.maxLength = Math.floor(Math.random() * 150 + 10);
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = 7;
        this.lifeSpan = this.maxLength * 3;
        this.timer = 0;
    }
    draw(ctx: CanvasRenderingContext2D ) {
        ctx.strokeStyle = 'hsl(' + this.hue + ', 100%, 50%)';
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for ( let i = 0; i < this.history.length; i++ ) {
            ctx.lineTo(this.history[i].x, this.history[i].y)
        }
        ctx.stroke();
    }
    update() {
        this.timer++;
        if (this.timer < this.lifeSpan) {
            this.x += this.speedX + Math.random() * 20 - 10;
            this.y += this.speedY+ Math.random() * 15 - 8;
            this.history.push({x: this.x, y: this.y});
            if (this.history.length > this.maxLength) {
                this.history.shift();
            }
        } else if(this.history.length <=1) {
            this.reset();
        } else {
            this.history.shift();
        }
    }
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.history = [{x: this.x, y: this.y}];
        this.timer = 0;
    }
}