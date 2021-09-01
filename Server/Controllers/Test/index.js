 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let test = await db.Test.findOne({where:{id: req.params.id}})
		return test
	},

	async getAll(req, db) {
		let tests = await db.Test.findAll({})
		return tests
	},

	async count(req, db) {
		let count = await db.Test.count()
		return count
	},

	async post(req, db) {
		let test = await db.Test.create(req.body)
		return test
	},

	async put(req, db) {
		let test = await this.getOne(req, db)
		if (test) {
			test = await test.update(req.body)
		}
		return test

	},

	async destroy(req,  db) {
		let test = await this.getOne(req, db)
		if (test) {
			test = await test.destroy();
		}
		return test
	},


	

	
	
	
			



}

