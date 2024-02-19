export class LineOne {
    startX: number;
    startY: number;

    constructor(canvas: HTMLCanvasElement) {
        this.startX = Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
    }
}