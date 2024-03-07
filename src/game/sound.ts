type InitialState = {
    duration: number;
    sound: p5.SoundFile; // Add sound property
}

export class Particle {
    constructor(public state: InitialState) {
        this.state = state;
    }

    draw(p: p5) {
        if (this.state.duration > 0) {
            this.state.sound.play(); // Play the sound
            this.state.duration--;
        }
    }

    isDone() {
        return this.state.duration <= 0;
    }
}