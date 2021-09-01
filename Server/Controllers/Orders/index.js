 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let orders = await db.Orders.findOne({where:{id: req.params.id}})
		return orders
	},

	async getAll(req, db) {
		let orderss = await db.Orders.findAll({})
		return orderss
	},

	async count(req, db) {
		let count = await db.Orders.count()
		return count
	},

	async post(req, db) {
		let orders = await db.Orders.create(req.body)
		return orders
	},

	async put(req, db) {
		let orders = await this.getOne(req, db)
		if (orders) {
			orders = await orders.update(req.body)
		}
		return orders

	},

	async destroy(req,  db) {
		let orders = await this.getOne(req, db)
		if (orders) {
			orders = await orders.destroy();
		}
		return orders
	},


	
	

	
		
		

	async getOrdersWithOrderItems(req, db) {
		let orders = await db.Orders.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.OrderItems}]
		});
		return orders
	},


	async createOrdersWithOrderItems(req, db) {
		let orders = await db.Orders.create(req.body, {
			include: [{model: db.OrderItems}]
		});
		return orders
	},


	async getOneWithOrderItemsAssociations(req, db) {
		let orders = await db.Orders.findOne({
			where:{
				id: req.params.id
			},
			include: [
			
				{
			
				  model: db.OrderItems,
			
				  include: [
			
				    {
			
				      model: db.Orders,
			
				      include: [
			
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
			
				    },
			
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
		return orders
	},

	

	

	
		async getAllWithAssociations(req, db) {
			let orders = await db.Orders.findAll({
				include: [
				
					{
				
					  model: db.OrderItems,
				
					  include: [
				
					    {
				
					      model: db.Orders,
				
					      include: [
				
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
				
					    },
				
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
			return orders
		},
	
	
			



}

