function registerHeroes(input) {
    let heroes = [];

    for (let row of input) {
        let [name, level, items] = row.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items}`);
    }
}