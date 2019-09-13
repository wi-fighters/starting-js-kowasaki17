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

    const erase = (index) => {

        if (db[index]) {
        return db.splice([index],1);
        }
        else { return `Error! Nothing to delete.`;}

    };

    api.push(create, read, update, erase);

    return api;

};
const createInDb = init(); // api [Function]

createInDb[0](10); // adding db array values
createInDb[0](20);
createInDb[0](30);

console.log(createInDb); // return api array with functions
console.log(createInDb[0](40)); // adding value to array and returning array length
console.log(createInDb[1]()); // returning array values
console.log(createInDb[2](1, 60)); // replace array value at given index
console.log(createInDb[2](6, 100)); // create array value at non existing index
console.log(createInDb[1]()); // returning array values
console.log(createInDb[3](3)); // delete array value at given index and return deleted value
console.log(createInDb[1]()); // returning array values
