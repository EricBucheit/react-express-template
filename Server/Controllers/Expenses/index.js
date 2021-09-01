 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let expenses = await db.Expenses.findOne({where:{id: req.params.id}})
		return expenses
	},

	async getAll(req, db) {
		let expensess = await db.Expenses.findAll({})
		return expensess
	},

	async count(req, db) {
		let count = await db.Expenses.count()
		return count
	},

	async post(req, db) {
		let expenses = await db.Expenses.create(req.body)
		return expenses
	},

	async put(req, db) {
		let expenses = await this.getOne(req, db)
		if (expenses) {
			expenses = await expenses.update(req.body)
		}
		return expenses

	},

	async destroy(req,  db) {
		let expenses = await this.getOne(req, db)
		if (expenses) {
			expenses = await expenses.destroy();
		}
		return expenses
	},


	
	

	

	
	
			



}

