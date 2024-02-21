export default class LineFive {
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
    angle: number;
    curve: number;
    vc: number;
    va: number;
    breakPoint: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height * 0.2;
        this.history = [{x: this.x, y: this.y}];
        this.lineWidth = Math.floor(Math.random() * 12 + 1);
        this.hue = Math.floor(Math.random() * 360);
        this.maxLength = Math.floor(Math.random() * 150 + 10);
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = 7;
        this.lifeSpan = this.maxLength * 3;
        this.breakPoint = this.lifeSpan * 0.85;
        this.timer = 0;
        this.angle = 0;
        this.curve = 0.1;
        this.vc = Math.random() * 0.4 - 0.2;
        this.va = Math.random() * 0.5 - 0.25;
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
        this.angle += this.va;
        this.curve += this.vc;
        if (this.timer < this.lifeSpan) {
            if(this.timer < this.lifeSpan) {
                this.va * 1.2
            }
            this.x += Math.sin(this.angle) * this.curve;
            this.y += Math.cos(this.angle) * this.curve;
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
        this.curve = 0;
        this.angle = 0;
        this.va = Math.random() * 0.5 - 0.25;
    }
}