interface SquareConfig {
    color?: string;
    width?: number;//如果去掉问号就必须满足接口的定义
}

function createSquare1(config: SquareConfig):{color: string;area:number} {//:{color: string;area:number}表示返回的数据类型
    let newSquare = {color: "white",area:100};
    if(config.color){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
//接口里面的属性不全是必须的，但类型还是要一致的
let mySquare = createSquare1({color: "black"});