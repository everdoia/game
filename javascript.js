

/*BREAK*/
// What number shall we play up to?
var number = 100
// for the numbers 1 through 20,
for (i=1; i<=number; i++) {

// if the number is divisble by 3 and 5, write "FizzBuzz"
if ( i % 3 === 0 && i % 5 === 0 ) {
console.log("FizzBuzz");
}

// if the number is divisible by 3, write "Fizz"
else if ( i % 3 === 0 ) {
console.log("Fizz");
}

// if the number is divisible by 5, write "Buzz"
else if ( i % 5 === 0 ) {
console.log("Buzz");
}

// otherwise, write just the number
else {
console.log(i);
}
}

/*BREAK*/


function attempt()
    {
        if(guess == number)
        {
            alert("You got it!");
        }

        if(guess > number)
        {
            guess = prompt("Try guessing lower.", "");
            attempt();
        }

        if(guess < number)
        {
            guess = prompt("Try guessing higher.", "");
            attempt();
        }

    }

    var number = Math.floor(Math.random()*101)
    var guess = prompt("Welcome to the guess-that-numbers game! Try guessing a number between 1 and 100!", "");
    attempt();
