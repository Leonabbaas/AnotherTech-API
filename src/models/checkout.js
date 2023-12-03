const pool = require('../configs/db')

const insert = (data) => {
    const { name, email, phone, address, city, zip_code, country, shipping, product, price } = data
    return pool.query(`INSERT INTO checkout(name, email, phone, address, city, zip_code, country, shipping, product, price)VALUES('${name}', '${email}', '${phone}', '${address}', '${city}', '${zip_code}', '${country}', '${shipping}', '${product}', ${price})`)
}

const get = () => {
    return pool.query(`SELECT * FROM checkout`)
}

const getById = (id) => {
    return pool.query(`SELECT * FROM checkout WHERE id = (${id})'`)
}

module.exports = {
    insert,
    get,
    getById
}