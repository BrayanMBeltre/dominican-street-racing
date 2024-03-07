
type InitialState = {
    x: number;
    y: number;
    width: number;
    height: number;
    image: p5.Image;
    speed: number;
};

export class Player {
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


        p.push();
        image?.resize(width, height);
        p.image(image, x, y);
        p.pop();


        const touchingLeftEdge = p.mouseX < this.state.x;
        const touchingRightEdge = p.mouseX > this.state.x + width;
        const touchingTop = p.mouseY < this.state.y;
        const touchingBottom = p.mouseY > this.state.y + height;

        const movingLeft = p.keyIsDown(p.LEFT_ARROW) || (touchingLeftEdge && p.mouseIsPressed) || p.keyIsDown(65);
        const movingRight = p.keyIsDown(p.RIGHT_ARROW) || (touchingRightEdge && p.mouseIsPressed) || p.keyIsDown(68);
        const movingUp = p.keyIsDown(p.UP_ARROW) || (touchingTop && p.mouseIsPressed) || p.keyIsDown(87) || p.keyIsDown(32);
        const movingDown = p.keyIsDown(p.DOWN_ARROW) || (touchingBottom && p.mouseIsPressed) || p.keyIsDown(83);
        const canMoveUp = y > 0;
        const canMoveDown = y < p.height - height;
        const canMoveLeft = x > 0;
        const canMoveRight = x < p.width - width;

        if (movingLeft && canMoveLeft) {
            this.state.x -= speed;
        }

        if (movingRight && canMoveRight) {
            this.state.x += speed;
        }

        if (movingUp && canMoveUp) {
            this.state.y -= speed;
        }

        if (movingDown && canMoveDown) {
            this.state.y += speed;
        }




    }


}
