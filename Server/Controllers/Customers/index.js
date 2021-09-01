 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let customers = await db.Customers.findOne({where:{id: req.params.id}})
		return customers
	},

	async getAll(req, db) {
		let customerss = await db.Customers.findAll({})
		return customerss
	},

	async count(req, db) {
		let count = await db.Customers.count()
		return count
	},

	async post(req, db) {
		let customers = await db.Customers.create(req.body)
		return customers
	},

	async put(req, db) {
		let customers = await this.getOne(req, db)
		if (customers) {
			customers = await customers.update(req.body)
		}
		return customers

	},

	async destroy(req,  db) {
		let customers = await this.getOne(req, db)
		if (customers) {
			customers = await customers.destroy();
		}
		return customers
	},


	
	

	
		
		

	async getCustomersWithOrders(req, db) {
		let customers = await db.Customers.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.Orders}]
		});
		return customers
	},


	async createCustomersWithOrders(req, db) {
		let customers = await db.Customers.create(req.body, {
			include: [{model: db.Orders}]
		});
		return customers
	},


	async getOneWithOrdersAssociations(req, db) {
		let customers = await db.Customers.findOne({
			where:{
				id: req.params.id
			},
			include: [
			
				{
			
				  model: db.Orders,
			
				  include: [
			
				    {
			
				      model: db.OrderItems,
			
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
			
				    },
			
				    {
			
				      model: db.Customers,
			
				      include: [
			
				        {
			
				          model: db.Users,
			
				          include: [
			
				            {
			
				              model: db.Expenses,
			
				              include: []
			
				            },
			
				            {
			
				              model: db.Employees,
			
				              include: []
			
				            }
			
				          ]
			
				        }
			
				      ]
			
				    }
			
				  ]
			
				}
			
			]
		});
		return customers
	},

	

	

	
		async getAllWithAssociations(req, db) {
			let customers = await db.Customers.findAll({
				include: [
				
					{
				
					  model: db.Orders,
				
					  include: [
				
					    {
				
					      model: db.OrderItems,
				
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
				
					    },
				
					    {
				
					      model: db.Customers,
				
					      include: [
				
					        {
				
					          model: db.Users,
				
					          include: [
				
					            {
				
					              model: db.Expenses,
				
					              include: []
				
					            },
				
					            {
				
					              model: db.Employees,
				
					              include: []
				
					            }
				
					          ]
				
					        }
				
					      ]
				
					    }
				
					  ]
				
					}
				
				]
			});
			return customers
		},

		async getOneWithAllAssociations(req, db) {
			let customers = await db.Customers.findOne({
				where: {
					id: req.params.id
				},
				include: [
				
					{
				
					  model: db.Orders,
				
					  include: [
				
					    {
				
					      model: db.OrderItems,
				
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
				
					    },
				
					    {
				
					      model: db.Customers,
				
					      include: [
				
					        {
				
					          model: db.Users,
				
					          include: [
				
					            {
				
					              model: db.Expenses,
				
					              include: []
				
					            },
				
					            {
				
					              model: db.Employees,
				
					              include: []
				
					            }
				
					          ]
				
					        }
				
					      ]
				
					    }
				
					  ]
				
					}
				
				]
			});
			return customers
		},
	
	
			



}

