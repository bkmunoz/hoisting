//JS Hoisting

//EX:
//console.log(example);
//var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

1.
// console.log(hello);
// var hello = 'world';

// var hello;
// console.log(hello); //logs undefined
// hello = 'world'



2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// needle = 'haystack';
// test(); //run the function test()
// test() needle = 'magnet'; //value for needle in the function test is 'magnet'



3.
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// brendan = 'super cool';
//function print() // not called, doesn't run
// console.log(brendan); //logs 'super cool'

4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// food = 'chicken';
// console.log(food) //logs chicken
// eat(); // runs eat() function, 
// function eat() food = 'half-chicken'
// function eat() console.log(food) //logs half-chicken




5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// mean(); //calls function mean(), logs chicken then fish
// console.log(food); //logs fish
// console.log(food); //logs fish

'''***Wrong answer, mean() is not a function****'''


6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// console.log(genre); //logs undefined
// genre = "disco";
// rewind(); //runs rewind() function
// rewind() genre = "rock" //function genre is set to rock
// rewind() console.log(genre); //logs rock
// rewind() genre = "r&b" //function genre is set to r&b
// rewind() console.log(genre); //logs r&b
// console.log(genre); //logs disco




7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// dojo = "san jose"
// console.log(dojo); //logs san jose
// learn(); //runs function learn
// learn() dojo = "seattle"
// learn() console.log(dojo); //logs seattle
// learn() dojo = "burbank"
// learn() console.log(dojo); //logs burbank
// console.log(dojo); //logs san jose
