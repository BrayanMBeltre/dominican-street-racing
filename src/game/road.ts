type InitialState = {
    x: number;
    y: number;
    speed: number;
};

export class RoadSegment {
    constructor(public state: InitialState) {
        this.state = {
            ...state,
            speed: 5,
        };
    }

    draw(p: p5) {
        // draw yellow rectangle
        p.fill(255, 255, 0);
        p.rect(this.state.x, this.state.y, 5, 100);
        this.state.y += this.state.speed;
    }

    isOffScreen(p: p5) {
        return this.state.y > p.height;
    }
}