const Sequelize = require('sequelize')
const Models = require('../Server/Models')

// security purposes, get values from .env or other secure places

const database = {
  name: "jnb",
  username: 'postgres',
  password: '',
  host: '127.0.0.1',
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
