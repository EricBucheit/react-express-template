const Sequelize = require('sequelize')
const Models = require('../Server/Models')
require('dotenv').config()

const database = {
  name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PW,
  host: process.env.DB_HOSR,
  dialect: 'postgres',
  logging: true,
}


const connection = new Sequelize(database.name, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
})



const db = {
}

for (let index in Models) {
  db[index] = Models[index](connection, Sequelize);
}


module.exports = {
    db,
    connection
}
