
type InitialState = {
    x: number;
    y: number;
    width?: number;
    height?: number;
    image: p5.Image;
    speed?: number;
};

export class Opponent {
    constructor(public state: InitialState) {
        this.state = {
            ...state,
            speed: 5,
            height: state.height || 100,
            width: state.width || 50,
        };
    }

    draw(p: p5) {
        const { image, width, height, x, y, speed } = this.state;

        image?.resize(width!, height!);
        p.image(image!, x, y);
        this.state.y -= speed!
    }

}
