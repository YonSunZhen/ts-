// 数组
// let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];

// 元祖
let x: [string, number];
x = ['hello', 10];//正确
// x = [10, 'hello'];错误


function greeter(person: Array<number>){
    return "Hello, " + person[0];
}

let user = [0,1,2];
document.body.innerHTML = greeter(user);

let array: Array<string> = [];
let array1: string[] = [];
let array2: Array<Array<number>> = [[1,2]]//二维数组
array[3] = 'world';