function subtract() {
    const firstElement = document.getElementById("firstNumber")
    const secondElement = document.getElementById('secondNumber')
    const result = Number(firstElement.value) - Number(secondElement.value)
   
    document.getElementById('result').textContent = result
};