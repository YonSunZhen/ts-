class Control {
    private state: any;
}
//当创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口只能被这个类或其子类实现
interface SelectableControl extends Control {
    select(): void;
}
//Button是Control的子类
class Button extends Control implements SelectableControl {
    select() { }
}
//TextBox是Control的子类
class TextBox extends Control {
    select() { }
}
//Image不是Control的子类
class Image implements SelectableControl {
    select() { }
}