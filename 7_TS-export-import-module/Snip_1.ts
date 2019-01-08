export class Point{
  x:number;
  y:number;
  constructor(x?:number,y?:number){
    this.x=x; this.y=y;
  }
  draw(){
    console.log(this.x + this.y);
  }
}
//export {Point};
//export = Point;
let point:Point = new Point(1,2);
point.draw();
