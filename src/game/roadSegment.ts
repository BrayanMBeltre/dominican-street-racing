// type InitialState = {
//     x: number;
//     y: number;
//     speed: number;
// };

// export class RoadSegment {
//     constructor(public state: InitialState) {
//         this.state = {
//             ...state,
//             speed: 5,
//         };
//     }

//     draw(p: p5) {
//         // draw yellow rectangle
//         p.fill(255, 255, 0);
//         p.rect(this.state.x, this.state.y, 10, 100);
//         this.state.y += this.state.speed;
//     }

//     isOffScreen(p: p5) {
//         return this.state.y > p.height;
//     }
// }

// type RoadState = {
//     y: number;
//     laneWidth: number;
// }

type InitialState = {
    y: number;
    laneWidth: number;
    speed: number;
}

export class RoadSegment {
    constructor(public state: InitialState) {
        this.state = state
    }

    draw(p: p5) {
        const lanes = Math.round(p.width / this.state.laneWidth);
        const roadEdge = (p.width - lanes * this.state.laneWidth) / 2;

        p.fill(255, 255, 0);

        for (let lane = 1; lane < lanes; lane++) {
            const x = lane * this.state.laneWidth + roadEdge;
            p.rect(x, this.state.y, 10, 100);
        }

        this.state.y += this.state.speed;
    }

    isOffScreen(p: p5) {
        return this.state.y > p.height;
    }

    getRandomLane(p: p5) {
        // get the center of one of the lanes. keep in mind the road edge
        const lanes = Math.round(p.width / this.state.laneWidth);
        const lane = Math.floor(Math.random() * lanes) + 1;
        const roadEdge = (p.width - lanes * this.state.laneWidth) / 2;
        return lane * this.state.laneWidth + roadEdge;

    }
}