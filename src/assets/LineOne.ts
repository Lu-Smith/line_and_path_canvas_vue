export default class LineOne {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    lineWidth: number;

    constructor(canvas: HTMLCanvasElement) {
        this.startX = Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
        this.endX = Math.random() * canvas.width;
        this.endY = Math.random() * canvas.height;
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
    }
    draw(ctx: CanvasRenderingContext2D ) {
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }
}