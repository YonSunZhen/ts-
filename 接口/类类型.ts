//实现接口,用它来明确的强制一个类去符合某种契约
interface ClockInterface0 {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface0 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number){}
}

//类静态部分与实例部分的区别
interface ClockConstructor1 {
    new (hour: number, minute: number);
}

class Clock1 implements ClockConstructor1 {
    //类的实例部分
    public currentTime: Date;
    //类的静态部分 当一个类实现了一个接口时，只对其实例部分进行类型检查。constructor存在与类的静态部分，所以不在检查的范围内
    constructor(h: number, m: number) { }
}



interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface3
}
interface ClockInterface3 {
    tick();
}
//返回ClockInterface3这个接口表示什么意思？
function createClock(ctor: ClockConstructor, hour:number, minute: number): ClockInterface3{
    return new ctor(hour, minute);
}
//这个类实现了ClockInterface3这个接口
class DigitalClock implements ClockInterface3 {
    //DigitalClock这个类里面的构造函数
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
//这个类实现了ClockInterface3这个接口
class AnalogClock implements ClockInterface3 {
    //AnalogClock这个类里面的构造函数
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


