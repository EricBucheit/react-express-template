var faker = require('faker')
var moment = require('moment')

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
		fakeSql(db, index = false) {
			let data = {};
			try {
				for( let key in db.rawAttributes ){
				 	let type = db.rawAttributes[key].type.key
				 	if (key === "id" || key === "createdAt" || key === "updatedAt") {
				 		continue
				 	}

				 	if (key.indexOf("Id") > -1 && type === "INTEGER") {
				 		if (!index) {
				 			data[key] = randomInt(0,40);	
				 		} else {
				 			data[key] = index;	
				 		}
				 		
				 		continue
				 	}

				 	if (type === "INTEGER") {
				 		data[key] = randomInt(3,50)
				 	} else if (type === "STRING") {
				 		data[key] = faker.lorem.words();
				 	} else if (type === "FLOAT") {
				 		data[key] = faker.commerce.price()
				 	} else if (type === "DOUBLE PRECISION") {
				 		data[key] = faker.commerce.price()
				 	} else if (type === "BOOLEAN") {
				 		data[key] = faker.datatype.boolean()
				 	} else if (type === "DATE") {
				 		data[key] = moment().format("YYYY-MM-DD hh:mm:ss")
				 	} else if (type === "DATEONLY") {
				 		data[key] = moment().format("YYYY-MM-DD")
				 	} else if (type === "TIME") {
				 		data[key] = moment().format("hh:mm:ss");
				 	}


				}
			} catch (err) {
				console.log(err)
			}
			return data;
	}


}