// Higher order functions (functions within functions)
// let animals = [
//     {name: 'Fluffykins', species: 'rabbit' },
//     {name: 'Caro', species: 'dog' },
//     {name: 'Hamilton', species: 'dog' },
//     {name: 'Harold', species: 'fish' },
//     {name: 'Ursula', species: 'cat' },
//     {name: 'Jimmy', species: 'fish' },
// ]

//non-filter function
// let dogs = []
// for (let i =0; i < animals.length; i++) {
//     if ( animals[i].species === 'dog')
//     dogs.push(animals[i])
// }
// console.log(dogs);

//filter function example. animals.filter accepts one argument (which is another function) aka functions sent into other functions aka callback functions. The filter will loop though each item in the array.
// let dogs = animals.filter(function(animal) {
//     return animal.species === 'dog'
// })
// console.log(dogs);


//break statement example
// for ( let i = 0; i < 99; i++) {
//     if (i > 2) {
//        break;
//     }
//     console.log('Banana');
// }

// console.log('Orange you glad I broke out of the loop!')


// function tenSquared () {
//     return 9*9
// }
// console.log(tenSquared()))



//nested for loop example. 
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     console.log('beginning j');
//     for (let j = 1; j <= 5; j++) {
//         console.log('  ' + j);
//     }
//     console.log('ending j')
// }

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

//  console.log(animals[0]);

//i dont quite understand how this works. https://youtu.be/xjAu2Y2nJ34  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue
)
 
console.log(summedNums) // Output: 17