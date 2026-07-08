function printSum(num1, num2){
    let sum = 0
    let numString = ''
    for(let i = num1; i <= num2; i++){
        numString += `${i} `
        sum += i
    }
    console.log(numString)
    console.log(`Sum: ${sum}`)
}