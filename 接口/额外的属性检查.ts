interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;//字符串索引签名,表示任意数量的其他属性
}

function createSquare(config: SquareConfig): { color:string; area: number } {
    return 
}

let mySquare0 = createSquare({colour:"red",width: 10,haha:true});//错误,对象字面量会被特殊对待而且会经过额外属性检查，当将他们赋值给变量或作为参数传递的时候
let mySquare1 = createSquare({colour:"red",width: 10});