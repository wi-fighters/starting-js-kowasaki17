const init = () => {

    const db = [];

    const create = (value) => {db.push(value)

    return db.length;};

    return create;

}
const createInDb = init()

createInDb(10)
createInDb(20)
createInDb(30)

console.log(createInDb(40));