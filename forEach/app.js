//The forEach Method
const numbers = [1,2,3,4,5,6,7,8,9,10];

function print(element){
    console.log(element)
}
//calling a pre-defined function in forEach
numbers.forEach(print)
//Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


//Let us define a function within the forEach braces
//print out the even numbers
numbers.forEach(function (element) {
    if ( element % 2 == 0){
        console.log(element);
    }
})

//Output
// 2
// 4
// 6
// 8
// 10

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

//forEach for an array of objects
movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})

// Output
// Shawshank Redemption - 99/100
// The Pursuit of Happyness - 96/100
// The Devil Wears Prada - 90/100
// Parasite - 90/100
