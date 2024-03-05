
type InitialState = {
    x: number;
    y: number;
    width?: number;
    height?: number;
    image: p5.Image;
    speed?: number;
};

export class Player {
    constructor(private state: InitialState) {
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

        const touchingLeftEdge = p.mouseX < p.width / 2;
        const touchingRightEdge = p.mouseX > p.width / 2;

        const movingLeft = p.keyIsDown(p.LEFT_ARROW) || (touchingLeftEdge && p.mouseIsPressed);
        const movingRight = p.keyIsDown(p.RIGHT_ARROW) || (touchingRightEdge && p.mouseIsPressed);
        const movingUp = p.keyIsDown(p.UP_ARROW) || p.keyIsDown(87);
        const movingDown = p.keyIsDown(p.DOWN_ARROW) || p.keyIsDown(83);

        if (movingLeft) {
            this.state.x -= speed!;
        }

        if (movingRight) {
            this.state.x += speed!;
        }

        if (movingUp) {
            this.state.y -= speed!;
        }

        if (movingDown) {
            this.state.y += speed!;
        }
    }
}
