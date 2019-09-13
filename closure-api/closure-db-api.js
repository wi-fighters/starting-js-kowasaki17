const init = () => {

    const db = [];

    const api = []; // create

    const create = (value) => {
        db.push(value);

        return db.length;
    };

    const read = () => {
        const output = [...db];
        return output;
    };


    api.push(create, read);

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
