class Animal0 {
    private name: string;
    constructor(theName: string) { this.name = theName; } 
}
class Rhino extends Animal0 {
    constructor() { super("Rhino"); }
}
class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
let animal = new Animal0("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; 错误 Animal与Employee不兼容

class Person {
    protected name: string;
    //构造函数初始化数据
    constructor(name: string) {this.name = name; }
}
class Employee1 extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello,my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee1("Howard","Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);

//protected修饰的构造函数不能在类的外部被实例化，但是可以被继承
class Person2 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}
class Employee2 extends Person2 {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello,my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard1 = new Employee2("Howard", "Sales");
// let john = new Person2("John"); 错误 'Person2'的构造函数是被保护的
