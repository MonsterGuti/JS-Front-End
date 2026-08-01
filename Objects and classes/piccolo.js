function parkingLot(input) {
    let parking = new Set();

    for (let row of input) {
        let [direction, carNumber] = row.split(', ');

        if (direction === 'IN') {
            parking.add(carNumber);
        } else if (direction === 'OUT') {
            parking.delete(carNumber);
        }
    }

    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCars = Array.from(parking).sort();

        for (let car of sortedCars) {
            console.log(car);
        }
    }
}