function passwordValidator(password) {
    let minLength = 6;
    let maxLength = 10;
    let minDigits = 2;

    let isValid = true;

    if (password.length < minLength || password.length > maxLength) {
        console.log(`Password must be between ${minLength} and ${maxLength} characters`);
        isValid = false;
    }

    if (!/^[A-Za-z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    let digitCount = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            digitCount++;
        }
    }

    if (digitCount < minDigits) {
        console.log(`Password must have at least ${minDigits} digits`);
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}