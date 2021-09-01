 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let categories = await db.Categories.findOne({where:{id: req.params.id}})
		return categories
	},

	async getAll(req, db) {
		let categoriess = await db.Categories.findAll({})
		return categoriess
	},

	async count(req, db) {
		let count = await db.Categories.count()
		return count
	},

	async post(req, db) {
		let categories = await db.Categories.create(req.body)
		return categories
	},

	async put(req, db) {
		let categories = await this.getOne(req, db)
		if (categories) {
			categories = await categories.update(req.body)
		}
		return categories

	},

	async destroy(req,  db) {
		let categories = await this.getOne(req, db)
		if (categories) {
			categories = await categories.destroy();
		}
		return categories
	},


	
	

	
		
		

	async getCategoriesWithItems(req, db) {
		let categories = await db.Categories.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.Items}]
		});
		return categories
	},


	async createCategoriesWithItems(req, db) {
		let categories = await db.Categories.create(req.body, {
			include: [{model: db.Items}]
		});
		return categories
	},


	async getOneWithItemsAssociations(req, db) {
		let categories = await db.Categories.findOne({
			where:{
				id: req.params.id
			},
			include: [
			
				{
			
				  model: db.Items,
			
				  include: [
			
				    {
			
				      model: db.Categories,
			
				      include: []
			
				    }
			
				  ]
			
				}
			
			]
		});
		return categories
	},

	

	

	
		async getAllWithAssociations(req, db) {
			let categories = await db.Categories.findAll({
				include: [
				
					{
				
					  model: db.Items,
				
					  include: [
				
					    {
				
					      model: db.Categories,
				
					      include: []
				
					    }
				
					  ]
				
					}
				
				]
			});
			return categories
		},

		async getOneWithAllAssociations(req, db) {
			let categories = await db.Categories.findOne({
				where: {
					id: req.params.id
				},
				include: [
				
					{
				
					  model: db.Items,
				
					  include: [
				
					    {
				
					      model: db.Categories,
				
					      include: []
				
					    }
				
					  ]
				
					}
				
				]
			});
			return categories
		},
	
	
			



}

