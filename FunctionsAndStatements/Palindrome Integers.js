function isPalindrome(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        let currentNum = numArr[i];
        let reversedNum = Number(currentNum.toString().split('').reverse().join(''));
        if (currentNum === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}