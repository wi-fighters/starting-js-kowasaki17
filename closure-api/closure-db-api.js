const init = () => {

    const db = [];

    const api = []; // create

    const create = (value) => {
        db.push(value);

        return `New element added! The new length of the array is ${db.length}`;
    };

    const read = () => {
        const output = [...db];
        return output;
    };

    const update = (index, newElement) => {

        if (db[index]) {
        return db[index] = newElement;
        }
        else { return create(newElement);}

    };


    api.push(create, read, update);

    return api;

};
const createInDb = init(); // api [Function]
// createInDb = array that contains a function
// createInDb[0] = function name / reference
// createInDb[0](9) = call the function


createInDb[0](10);
createInDb[0](20);
createInDb[0](30);

console.log(createInDb);
console.log(createInDb[0](40));
console.log(createInDb[1]());
console.log(createInDb[2](1, 60));
console.log(createInDb[2](6, 100));
console.log(createInDb[1]());


