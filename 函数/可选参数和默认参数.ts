// 可选参数
function buildName(firstName: string, lastName?: string):string{
    if(lastName){
        return firstName + " " + lastName;
    }else{
        return firstName;
    }
}
let result1 = buildName("Bob");
// let result2 = buildName("Bob","Adams","Sr."); 错误 参数太多
let result3 = buildName("Bob","Adams");

//默认参数 可选参数和末尾的默认参数共享参数类型
//如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获取默认值
function buildName1(firstName: string, lastName = "Smith"): string{
    return firstName + " " + lastName;
}
let result4 = buildName1("Bob");//"Bob Smith"
let result5 = buildName1("Bob",undefined);//"Bob Smith"
// let result6 = buildName1("Bob","Adams","Sr."); 错误 参数太多
let result7 = buildName1("Bob","Admas");//"Bob Smith"