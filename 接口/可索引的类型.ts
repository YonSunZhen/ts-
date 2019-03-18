interface StringArray {
    [index: number]: string;//表示了当用number去索引StringArray时会得到string类型的返回值
}

let myArray: StringArray;
myArray = ["Bob","Fred"];

let myStr: string = myArray[0];