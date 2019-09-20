exercise1 = () => {

let char = ''

for (i = 0; i < 4; i += 1){
    char = '';
    for (j = 0; j < 5; j += 1){
        char += '|'
    }
console.log(char);
}
}
//exercise1();

exercise2 = () => {
    let str = '';
        for (i = 0; i < 5; i += 1){
            str = '';
            for (j = 0; j < 5; j += 1){
                if (i % 2 === 0 && j % 2 === 0 || i % 2 != 0 && j % 2 != 0) {
                    str += '-'
                }
                else if (i % 2 === 0 && j % 2 != 0 || i % 2 != 0 && j % 2 === 0) {
                    str += '|'
                }
            } 
            console.log(str);
        }
    }
//exercise2();

exercise3 = () => {
    let str = ''
        for (i = 0; i < 4; i += 1){
            for (j = 0; j < 1; j += 1){
                str += '★';
            }
    console.log(str);
        }
    }
exercise3();