const Sequelize = require('sequelize')
const Models = require('../Server/Models')
const Seeds = require('../Server/Seeds')
var Fake = require('../test/FakeSql')
require('dotenv').config()

const apiConfig = require("../Scaffold/Config/Config")
// security purposes, get values from .env or other secure places

const database = {
  name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
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



const db = {}

for (let index in Models) {
  db[index] = Models[index](connection, Sequelize);
}


// make associations from running scaffold with -load

let model;
for (let api of apiConfig) {
  if (db[api.name]) {
    for (model of api.hasMany) {
      db[api.name].hasMany(db[model], {constraints: false})
    }

    for (model of api.belongsTo) {
      db[api.name].belongsTo(db[model], {constraints: false})
    }

  }
 
}

// put any other hard coded associations here or define

let config = {
  alter : false, // just add to db
  force : true, // remove and create db
  seed: true, // run seeds
}

connection.sync(config)
  .then(async () => {
      let seedCount = 50;

      if (config.seed) {
        let tables = Object.keys(Seeds);
        
        for (let table of tables) {
          let dbTable = db[table];

          for (let i = 0; i < seedCount; i++) {
            let data = Fake.fakeSql(dbTable, i);
            await dbTable.create(data);
          }
        }  
    }

    console.log(`Database & tables created!`)
}).catch(err => {
  console.error(` Make sure have a .env file with the right config,
                  and CREATE THE DATABASE: ${database.name} IN POSTGRES 
                  Check /SetupDocumentation/setup.txt`)
  console.log(err)
})



module.exports = {
    db,
    connection
}
