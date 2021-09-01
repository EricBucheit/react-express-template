 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let order_items = await db.OrderItems.findOne({where:{id: req.params.id}})
		return order_items
	},

	async getAll(req, db) {
		let order_itemss = await db.OrderItems.findAll({})
		return order_itemss
	},

	async count(req, db) {
		let count = await db.OrderItems.count()
		return count
	},

	async post(req, db) {
		let order_items = await db.OrderItems.create(req.body)
		return order_items
	},

	async put(req, db) {
		let order_items = await this.getOne(req, db)
		if (order_items) {
			order_items = await order_items.update(req.body)
		}
		return order_items

	},

	async destroy(req,  db) {
		let order_items = await this.getOne(req, db)
		if (order_items) {
			order_items = await order_items.destroy();
		}
		return order_items
	},


	
	

	

	
	
			



}

