class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x:number;y:number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    //这里相当于声明了一个变量scale
    constructor (public scale: number) { }
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//静态属性和非静态属性的区别
//1、在内存的存放位置不同，所有带static修饰符的属性或者方法都存放在内存中的方法区，而非静态属性存放在内存中的堆区
//2、静态属性或方法在没创建对象之前就已经存在，而非静态属性在创建对象之后才存在
//3、静态属性是在某个类中的所有对象是共享的
//4、生命周期不同 静态属性在类消失之后才销毁 而非静态属性在对象销毁后才销毁