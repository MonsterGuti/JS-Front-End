function vacation(people, groupType, day) {

    let price = 0;

    if (groupType === "Students") {

        if (day === "Friday") {
            price = 8.45;
        } else if (day === "Saturday") {
            price = 9.80;
        } else {
            price = 10.46;
        }

        let totalPrice = people * price;

        if (people >= 30) {
            totalPrice *= 0.85;
        }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }

    else if (groupType === "Business") {

        if (people >= 100) {
            people -= 10;
        }

        if (day === "Friday") {
            price = 10.90;
        } else if (day === "Saturday") {
            price = 15.60;
        } else {
            price = 16;
        }

        let totalPrice = people * price;

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }

    else if (groupType === "Regular") {

        if (day === "Friday") {
            price = 15;
        } else if (day === "Saturday") {
            price = 20;
        } else {
            price = 22.50;
        }

        let totalPrice = people * price;

        if (people >= 10 && people <= 20) {
            totalPrice *= 0.95;
        }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }

}