function employees(names) {
    let employeeList = [];

    for(let name of names) {
        employeeList[name] = name.length;
    }

     for (let name in employeeList) {
        console.log(`Name: ${name} -- Personal Number: ${employeeList[name]}`);
    }
}