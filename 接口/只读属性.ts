interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};//初次赋值后就不能被修改了
// p1.x = 5; 错误

let ro: ReadonlyArray<number> = [1,2,3];
// ro[0] = 12; 错误 数组创建后再也不能被修改
let p2: Array<number> = [];
// p2 = ro; 错误
p2 = ro as number[];