function solve() {
    const input = JSON.parse(document.querySelector("#inputs textarea").value);

    const restaurants = {};

    for (let line of input) {
        let [restaurantName, workersData] = line.split(" - ");

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
        }

        let workers = workersData.split(", ");

        for (let worker of workers) {
            let [name, salary] = worker.split(" ");

            restaurants[restaurantName].push({
                name: name,
                salary: Number(salary)
            });
        }
    }

    let bestRestaurant = "";
    let bestAverageSalary = 0;
    let bestSalary = 0;

    for (let restaurant in restaurants) {
        let workers = restaurants[restaurant];

        let totalSalary = 0;

        for (let worker of workers) {
            totalSalary += worker.salary;
        }

        let averageSalary = totalSalary / workers.length;

        workers.sort((a, b) => b.salary - a.salary);

        let highestSalary = workers[0].salary;

        if (averageSalary > bestAverageSalary) {
            bestAverageSalary = averageSalary;
            bestSalary = highestSalary;
            bestRestaurant = restaurant;
        }
    }

    document.querySelector("#bestRestaurant p").textContent =
        `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    let workersOutput = "";

    for (let worker of restaurants[bestRestaurant]) {
        workersOutput += `Name: ${worker.name} With Salary: ${worker.salary} `;
    }

    document.querySelector("#workers p").textContent = workersOutput.trim();
}