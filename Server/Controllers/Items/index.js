 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let items = await db.Items.findOne({where:{id: req.params.id}})
		return items
	},

	async getAll(req, db) {
		let itemss = await db.Items.findAll({})
		return itemss
	},

	async count(req, db) {
		let count = await db.Items.count()
		return count
	},

	async post(req, db) {
		let items = await db.Items.create(req.body)
		return items
	},

	async put(req, db) {
		let items = await this.getOne(req, db)
		if (items) {
			items = await items.update(req.body)
		}
		return items

	},

	async destroy(req,  db) {
		let items = await this.getOne(req, db)
		if (items) {
			items = await items.destroy();
		}
		return items
	},


	
	

	

	
	
			



}

