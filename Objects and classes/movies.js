function movies(input) {
    let movies = [];

    for (let row of input) {
        if (row.startsWith('addMovie')) {
            let movieName = row.replace('addMovie ', '');
            movies.push({ name: movieName });
        }
        else if (row.includes('directedBy')) {
            let [movieName, director] = row.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.director = director;
            }
        }

        else if (row.includes('onDate')) {
            let [movieName, date] = row.split(' onDate ');
            let movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of movies){
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }
}