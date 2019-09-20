exercise1 = () => {

    let total = 1;
    for (let i = 0; i <= 20; i += 1){
        total += i;
        console.log(`Total: ${total}`, `Increment: ${i}`)
    };
};
//exercise1();

exercise2 = () => {

    let beer = ['one', 'two', 'three', 'four', 'five'];
    for (let i = 0; i < beer.length; i += 1){
        if (beer[i] === 'one'){
        console.log(`There is one bottle of beer on the wall.`)
        }
        else {
        console.log(`There are ${beer[i]} bottles of beer on the wall.`)
        };
    };
};
//exercise2();

exercise3 = () => {
    for (let i = 1; i <= 20; i += 1){
        if(i & 1){
        console.log(`${i} is a odd number.`); //ODD
        }
        else{
        console.log(`${i} is a even number.`);// EVEN
        };
    }
};
//exercise3();

exercise4 = () => {
    let result = 0;
    for (let i = 0; i <= 10; i += 1){
        result = i * 9;
        console.log(`${i} * 9 = ${result}`);
    }
};
//exercise4();

exercise5 = () => {
let arr = [90, 60, 77, 81, 65]
let sum = 0;
let median = 0;
    for (let i = 0; i < arr.length; i += 1){
        sum += arr[i];
        median = sum / arr.length;
        console.log(`Median: ${median}`)
    }
};
//exercise5();

exercise6 = () => {

    let fizzbuzz = '';

    for (let i = 1; i <= 100; i += 1){
        
        if (i % 3 === 0 && i % 5 === 0){
            fizzbuzz = 'FizzBuzz'
        }
        else if (i % 3 === 0){
            fizzbuzz = 'Fizz'
        }
        else if(i % 5 === 0){
            fizzbuzz = 'Buzz'
        }
        else {fizzbuzz = i;}
        console.log(fizzbuzz);
    }
};
//exercise6();

exercise7 = () => {

    multiThree = 0;
    multiFive = 0;
    sumBoth = 0;
    for (let i = 1; i <= 1000; i += 1){

        if (i % 3 === 0) {
            multiThree += i;
            //console.log(i);
        }
        else if (i % 5 === 0) {
            multiFive += i;
        }
        else{}
            
    }
    sumBoth = multiThree + multiFive;
    console.log(`Added multiple of threes: ${multiThree}`);
    console.log(`Added multiple of fives: ${multiFive}`);
    console.log(`Sum of both: ${sumBoth}`)

};
//exercise7();

exercise8 = () => {

    names = ['Franz', 'Manfred', 'Kurt', 'Gottfried', 'Harald', 'Werner']

    for ( let i = 0; i < names.length; i += 1) {

        console.log(`Guten Tag ${names[i]}`);

    }
}
//exercise8();

exercise91 = () => {

    first = 0;
    for (let i = 0; i < 10; i += 1){
        first += 100;
        console.log(`${first}`)
    }
}
//exercise91();

exercise92 = () => {

    first = 1;
    for (let i = 0; i < 8; i += 1){
        console.log(`${first}`)
        first *= 2;
    }
}
//exercise92();

exercise93 = () => {

    first = -2;
    for (let i = 0; i < 6; i += 1){
        first += 2;
        console.log(`${first}`)
    }
}
//exercise93();

exercise94 = () => {

    first = 0;
    for (let i = 0; i < 5; i += 1){
        first += 3;
        console.log(`${first}`)
    }
}
//exercise94();

exercise95 = () => {

    first = 10;
    for (let i = 0; i < 10; i += 1){
        first -= 1;
        console.log(`${first}`)
    }
}
//exercise95();

exercise10 = () => {

    let palindrom = 'madam';
    let splited = '';
    let reversed = [];
    let joined = [];
    split = palindrom.split('');
    reversed = split.reverse();
    joined = reversed.join('');
    result = '';
    

    for (i = 0; i < palindrom.length; i += 1){
        if (palindrom === joined){
        result = `${palindrom} is a palindrom`
        } 
        else {result = `${palindrom} is not a palindrom`};
        }
    console.log(result);
}
exercise10();