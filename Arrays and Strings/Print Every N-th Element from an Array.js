function printEveryNthElement(arr, n) {
    let myArr = [];
    for (let i = 0; i < arr.length; i += n) {
        myArr.push(arr[i]);
    }
    console.log(myArr);
    return myArr;
}
