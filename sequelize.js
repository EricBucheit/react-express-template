const Sequelize = require('sequelize')
const Models = require('./Server/Models')

// security purposes, get values from .env or other secure places

const database = {
  name: "templatedDatabase",
  username: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
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

let config = {
  alter : false,
  force : false,
}

connection.sync(config)
  .then(async () => {
    console.log(`Database & tables created!`)
}).catch(err => {
  console.error(` YOU MUST RENAME 'database' constant variable, and CREATE THE DATABASE: ${database.name} IN POSTGRES `)
})



module.exports = {
    db,
    connection
}