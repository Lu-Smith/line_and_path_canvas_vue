export default class LineOne {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    lineWidth: number;
    canvas: HTMLCanvasElement;
    hue: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.startX = Math.random() * this.canvas.width;
        this.startY = Math.random() * this.canvas.height;
        this.endX = Math.random() * this.canvas.width;
        this.endY = Math.random() * this.canvas.height;
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
        this.hue = Math.floor(Math.random() * 360);
    }
    draw(ctx: CanvasRenderingContext2D ) {
        ctx.strokeStyle = 'hsl(' + this.hue + ', 100%, 50%)';
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }
}