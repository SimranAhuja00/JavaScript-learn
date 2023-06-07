//The map Method
const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubles = numbers.map(function(num){
    return num*2;
})

console.log(doubles);
// Output
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const movies = [
    {
        title : 'Shawshank Redemption',
        score : 99
    },
    {
        title : 'The Pursuit of Happyness',
        score : 96
    },
    {
        title : 'The Devil Wears Prada',
        score : 90
    },
    {
        title : 'Parasite',
        score : 90
    }
]

//to map movies and form another array with just the movie titles
const titles = movies.map(function(movie){
    return movie.title;
})

console.log(titles);
// Output
// ['Shawshank Redemption', 'The Pursuit of Happyness', 'The Devil Wears Prada', 'Parasite']
