 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let package_items = await db.PackageItems.findOne({where:{id: req.params.id}})
		return package_items
	},

	async getAll(req, db) {
		let package_itemss = await db.PackageItems.findAll({})
		return package_itemss
	},

	async count(req, db) {
		let count = await db.PackageItems.count()
		return count
	},

	async post(req, db) {
		let package_items = await db.PackageItems.create(req.body)
		return package_items
	},

	async put(req, db) {
		let package_items = await this.getOne(req, db)
		if (package_items) {
			package_items = await package_items.update(req.body)
		}
		return package_items

	},

	async destroy(req,  db) {
		let package_items = await this.getOne(req, db)
		if (package_items) {
			package_items = await package_items.destroy();
		}
		return package_items
	},


	
	

	

	
	
			



}

