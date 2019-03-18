class Octopus {
    readonly name: string;//只读属性必须在声明时或构造函数里被初始化
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

//参数属性
class Octopus1 {
    readonly numberOfLegs: number = 8; 
    constructor(readonly name: string) { }//这样就创建和初始化了那么成员name了
}