function factorialDivision(num1, num2) {
    let firstFactorial = factorial(num1);
    let secondFactorial = factorial(num2);

    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));

    function factorial(num) {
        let fact = 1;

        for (let i = 2; i <= num; i++) {
            fact *= i;
        }

        return fact;
    }
}