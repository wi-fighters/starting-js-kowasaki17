// #1

// let count = 20; // 19

// while (count > 15) {

//     --count;
//     console.log(count);

// }

//#2

/* let citiesArr = ['Hamburg ', 'Vienna ', 'Prague ', 'Cologne '];
let index = 0;
let citiesStr = '';

while (index < citiesArr.length) {

    citiesStr += citiesArr[index];
    index += 1;
    
    console.log(`${citiesStr}`);

} */

// #3

/* let arr = [3, 5, 2, 4]; // [4, 5, 2, 4]
let resultArr = [];
let index = 0;
let newNumber = 0; // 4

isEven = arr[index] % 2 === 0;

while(index < arr.length){
    // if the element is an even number
    if(arr[index] % 2 === 0) {
        newNumber = arr[index] - 1;
    }
    else {
        newNumber = arr[index] + 1;
    }
    
    resultArr.push(newNumber);
    console.log(resultArr);

    index += 1;
} */

// #2.1
/* 
let arr = [2, 4, 6, 8];
let arrIndex = 0; // 2
let result = 0; // 6

do {
    result += arr[arrIndex];
    // result = result + arr[arrIndex]; // 2 + 4

    arrIndex += 1;
    // arrIndex = arrIndex + 1; // 0 + 1

    console.log(result)
}
while(arr.length > arrIndex); */

// #2.2

/* let number = 0;
let result = 0;

do {

    result += 1;
    console.log(result);

}
while (result < 20); */

// #2.3

/* let names = ['matthew', 'jOhn', 'herBert', 'StU'];
let namesFinal =[]; // ['Matthew']
let index = 0; // 1
let name = ''; // 'matthew'
let nameFirst = ''; // 'M'
let nameRest = ''; // 'atthew'
let nameComplete = ''; // 'Matthew'

do {
    name = names[index];
    nameFirst = name.charAt(0).toUpperCase();
    nameRest = name.substr(1).toLowerCase();
    nameComplete = nameFirst + nameRest;
    namesFinal.push(nameComplete);

    index += 1;
    console.log(namesFinal);
}
while (index < names.length); */

// #2.4

let arr = [2, 3, 4, 5, 5, 7, 6, 6, 10, 10];
let arrResult = [];
index = 0;
index2 = 1;

do{
    if(arr[index] != arr[index2]){
        arrResult.push(arr[index])
    }
    else{
        
    };
    console.log(arrResult);

    index += 1;
    index2 += 1;
}
while(index < arr.length);


// #2.5
/* let times = 3; // 2
let item = 'Zitronenkaugummi';
let result = []; // ['Zitronenkaugummi']

do {
    result.push(item);
    console.log(result);
    times -= 1;
}
while(times > 0); */