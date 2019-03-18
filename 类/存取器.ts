let passcode = "secret passcode";
class Employee3 {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }else{
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if(employee3.fullName) {
    alert(employee3.fullName);
}