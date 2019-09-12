const init = () => {

    const db = [];

    const api = []; // create

    const create = (value) => {
        db.push(value)

        return db.length;
    };

    api.push(create);

    return api;

};
const createInDb = init(); // api [Function]
// createInDb = array that contains a function
// createInDb[0] = function name / reference
// createInDb[0](9) = call the function


// createInDb(10)
// createInDb(20)
// createInDb(30)

console.log(createInDb);
console.log(createInDb[0]);
console.log(createInDb[0](9));