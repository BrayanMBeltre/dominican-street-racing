import type { Player } from "./player";

type InitialState = {
    x: number;
    y: number;
    width: number;
    height: number;
    image: p5.Image;
    speed: number;

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

        image?.resize(width, height);
        p.image(image, x, y);

        this.state.y -= speed;
    }

    collidedWithPlayer(player: Player) {
        const opponentX = this.state.x;
        const opponentY = this.state.y;
        const opponentWidth = this.state.width;
        const opponentHeight = this.state.height;

        const playerX = player.state.x;
        const playerY = player.state.y;
        const playerWidth = player.state.width;
        const playerHeight = player.state.height;


        if (
            opponentX < playerX + playerWidth &&
            opponentX + opponentWidth > playerX &&
            opponentY < playerY + playerHeight &&
            opponentY + opponentHeight > playerY
        ) {
            return true;
        }

        return false;
    }

    isOffScreen() {
        return this.state.y < -this.state.height;
    }

}
