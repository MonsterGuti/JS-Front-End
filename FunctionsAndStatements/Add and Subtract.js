function sumAndSubtract(a, b, c) {
    let sumOfFirstTwo = a + b
    
    function sum(a, b) {
        return a + b;
    }

    let substract = (c) => {
        return sumOfFirstTwo - c;
    }

    let result = substract(c);
    return result;
}
