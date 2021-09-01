 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let packages = await db.Packages.findOne({where:{id: req.params.id}})
		return packages
	},

	async getAll(req, db) {
		let packagess = await db.Packages.findAll({})
		return packagess
	},

	async count(req, db) {
		let count = await db.Packages.count()
		return count
	},

	async post(req, db) {
		let packages = await db.Packages.create(req.body)
		return packages
	},

	async put(req, db) {
		let packages = await this.getOne(req, db)
		if (packages) {
			packages = await packages.update(req.body)
		}
		return packages

	},

	async destroy(req,  db) {
		let packages = await this.getOne(req, db)
		if (packages) {
			packages = await packages.destroy();
		}
		return packages
	},


	
	

	
		
		

	async getPackagesWithItems(req, db) {
		let packages = await db.Packages.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.Items}]
		});
		return packages
	},


	async createPackagesWithItems(req, db) {
		let packages = await db.Packages.create(req.body, {
			include: [{model: db.Items}]
		});
		return packages
	},


	async getOneWithItemsAssociations(req, db) {
		let packages = await db.Packages.findOne({
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
		return packages
	},

	

	
		
		

	async getPackagesWithPackageItems(req, db) {
		let packages = await db.Packages.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.PackageItems}]
		});
		return packages
	},


	async createPackagesWithPackageItems(req, db) {
		let packages = await db.Packages.create(req.body, {
			include: [{model: db.PackageItems}]
		});
		return packages
	},


	async getOneWithPackageItemsAssociations(req, db) {
		let packages = await db.Packages.findOne({
			where:{
				id: req.params.id
			},
			include: [
			
				{
			
				  model: db.PackageItems,
			
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
			
				}
			
			]
		});
		return packages
	},

	

	

	
		async getAllWithAssociations(req, db) {
			let packages = await db.Packages.findAll({
				include: [
				
					{
				
					  model: db.PackageItems,
				
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
				
					}
				
				]
			});
			return packages
		},
	
	
			



}

