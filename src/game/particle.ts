type InitialState = {
    x: number;
    y: number;
    duration: number;
    image: p5.Image;
}

export class Particle {
    constructor(public state: InitialState) {
        this.state = state
    }

    draw(p: p5) {
        if (this.state.duration > 0) {
            p.image(this.state.image, this.state.x, this.state.y);
            this.state.duration--;
        }
    }

    isDone() {
        return this.state.duration <= 0;
    }
}