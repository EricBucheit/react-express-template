
var Fake = require('../../../test/FakeSql')
module.exports  = {
	async run(db) {
		for (let i = 0; i < 40; i++) {
			let data = Fake.fakeSql(db);
			await db.create(data);
		}

	},

}
	