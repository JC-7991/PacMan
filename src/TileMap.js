export default class TileMap{

    constructor(tileSize){

        this.tileSize = tileSize;

        this.yellowDot = new Image();
        this.yellowDot.src = "images/yellowDot.png";

        this.wall = new Image();
        this.wall.src = "images/wall.png";

    }

    map = [

        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 7, 0, 0, 4, 0, 0, 0, 0, 0, 0, 7, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 6, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 7, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    ];

    draw(ctx){

    }

    setCanvasSize(canvas){
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    }

}