interface SearchFunc {
    (source: string, subString: string): boolean;//表示函数的类型,是一个只有参数列表和返回值类型的函数
}

let mySearch: SearchFunc;//使用了SearchFunc这个接口
mySearch = function(sourc: string, subString: string) {
    let result = sourc.search(subString);
    return result > -1;
}

let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
}