function isPerfectNumber(num) {
    if (num <= 0) {
        return "It's not so perfect."
    }

    mySum = 0

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            mySum += i
        }
    }
    
    if (mySum === num) {
        return "We have a perfect number!"
    }
    else {
        return "It's not so perfect."
    }
}