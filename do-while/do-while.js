// #1
/* 
let count = 20;

while (count > 15) {

    --count;
    console.log(count);

} */

//#2

/* let cities = ['Hamburg ', 'Vienna ', 'Prague ', 'Cologne '];
let index = 0;
let stringFinal = '';

while (index < cities.length) {

    stringFinal += cities[index];
    index += 1;
    
 console.log(`${stringFinal}`);

} */

// #3

/* let arr = [3, 5, 2, 4];
let resultArr = [];
let index = 0;
let roundNumber = 0;

while(index < arr.length){
    if(arr[index] & 1){
    roundNumber = ++(arr[index]); //ODD
    }
    else{
    roundNumber = --(arr[index]);// EVEN
    }
    
    resultArr.push(roundNumber);
    console.log(resultArr);

    index += 1;
}; */

// #2.1

/* let arr = [2, 4, 6, 8];
let arrIndex = 0;
let result = 0;

do {
    result += +arr[arrIndex];
    arrIndex += 1;
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

let names = ['matthew', 'jOhn', 'herBert', 'StU'];
let namesFinal =[];
let index = 0;
let name = '';

do {
    name = names[index];
    nameFirst = name.charAt(0).toUpperCase();
    nameRest = name.substr(1).toLowerCase();
    nameComplete = nameFirst + nameRest;
    namesFinal.push(nameComplete);

    index += 1;
    console.log(namesFinal);
}
while(index < names.length);

// #2.4

/* let arr = [2, 3, 4, 5, 5, 7, 10, 10];
let arrResult = [];
index = 0;
index2 = 1;

do{
    if(arr[index] === arr[index2]){
        arr.splice(arr[index2],1)
    }
    else{
        
    };
    console.log(arr);

    index += 1;
    index2 += 1;
}
while(index < arr.length);
 */

// #2.5
/* let times = 3;
let item = 'Zitronenkaugummi';
let result = []

do {
    result.push(item);
    console.log(result);
    times -= 1;
}
while(times > 0); */