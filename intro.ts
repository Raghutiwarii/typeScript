
let fname = "Raghu"
console.log(fname);

function sum(a:number,b:number){
    return a+b;
}
//console.log(sum(12,"Raghu")); // error 

console.log(sum(12,5));

// tsc --init - to config the ts file


interface Shape {
    calculateArea(): number;
  }
  
  class Rectangle implements Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  
    getWidth(): number {
      return this.width;
    }
  
    getHeight(): number {
      return this.height;
    }
  }
  
  function displayShapeInfo(shape: Shape): void {
    console.log(`Shape Area: ${shape.calculateArea()}`);
  }
  
  const rectangle = new Rectangle(5, 10);
  displayShapeInfo(rectangle);
  
  // console.log(`Rectangle Width: ${rectangle.getWidth()}`);
  // console.log(`Rectangle Height: ${rectangle.getHeight()}`);

  x=5;
  console.log(4/0);
  x=2;
  var x;
  