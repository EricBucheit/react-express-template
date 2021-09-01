 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let employees = await db.Employees.findOne({where:{id: req.params.id}})
		return employees
	},

	async getAll(req, db) {
		let employeess = await db.Employees.findAll({})
		return employeess
	},

	async count(req, db) {
		let count = await db.Employees.count()
		return count
	},

	async post(req, db) {
		let employees = await db.Employees.create(req.body)
		return employees
	},

	async put(req, db) {
		let employees = await this.getOne(req, db)
		if (employees) {
			employees = await employees.update(req.body)
		}
		return employees

	},

	async destroy(req,  db) {
		let employees = await this.getOne(req, db)
		if (employees) {
			employees = await employees.destroy();
		}
		return employees
	},


	
	

	

	
	
			



}

