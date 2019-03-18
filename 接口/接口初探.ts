interface LabelledValue {
    label: String
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
//只要传入的对象满足上面提到的必要条件，那么他就是被允许的
printLabel(myObj);