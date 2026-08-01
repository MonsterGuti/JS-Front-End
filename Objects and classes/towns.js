function towns(input){
    for (let row of input) {
        let [town, latitude, longitude] = row.split(' | ');

        let townInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(townInfo);
    }
}