 module.exports = {
	test () {
		return ('test')
	},

	async getOne(req, db) {
		let users = await db.Users.findOne({where:{id: req.params.id}})
		return users
	},

	async getAll(req, db) {
		let userss = await db.Users.findAll({})
		return userss
	},

	async count(req, db) {
		let count = await db.Users.count()
		return count
	},

	async post(req, db) {
		let users = await db.Users.create(req.body)
		return users
	},

	async put(req, db) {
		let users = await this.getOne(req, db)
		if (users) {
			users = await users.update(req.body)
		}
		return users

	},

	async destroy(req,  db) {
		let users = await this.getOne(req, db)
		if (users) {
			users = await users.destroy();
		}
		return users
	},


	
	

	
		
		

	async getUsersWithExpenses(req, db) {
		let users = await db.Users.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.Expenses}]
		});
		return users
	},


	async createUsersWithExpenses(req, db) {
		let users = await db.Users.create(req.body, {
			include: [{model: db.Expenses}]
		});
		return users
	},


	async getOneWithExpensesAssociations(req, db) {
		let users = await db.Users.findOne({
			where:{
				id: req.params.id
			},
			include: [
			
				{
			
				  model: db.Expenses,
			
				  include: []
			
				}
			
			]
		});
		return users
	},

	

	
		
		

	async getUsersWithEmployees(req, db) {
		let users = await db.Users.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.Employees}]
		});
		return users
	},


	async createUsersWithEmployees(req, db) {
		let users = await db.Users.create(req.body, {
			include: [{model: db.Employees}]
		});
		return users
	},


	async getOneWithEmployeesAssociations(req, db) {
		let users = await db.Users.findOne({
			where:{
				id: req.params.id
			},
			include: [
			
				{
			
				  model: db.Employees,
			
				  include: [
			
				    {
			
				      model: db.Users,
			
				      include: [
			
				        {
			
				          model: db.Expenses,
			
				          include: []
			
				        },
			
				        {
			
				          model: db.Customers,
			
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
			
				                }
			
				              ]
			
				            }
			
				          ]
			
				        }
			
				      ]
			
				    }
			
				  ]
			
				}
			
			]
		});
		return users
	},

	

	
		
		

	async getUsersWithCustomers(req, db) {
		let users = await db.Users.findOne({
			where:{
				id: req.params.id
			},
			include: [{model: db.Customers}]
		});
		return users
	},


	async createUsersWithCustomers(req, db) {
		let users = await db.Users.create(req.body, {
			include: [{model: db.Customers}]
		});
		return users
	},


	async getOneWithCustomersAssociations(req, db) {
		let users = await db.Users.findOne({
			where:{
				id: req.params.id
			},
			include: [
			
				{
			
				  model: db.Customers,
			
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
			
				        }
			
				      ]
			
				    },
			
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
		});
		return users
	},

	

	

	
		async getAllWithAssociations(req, db) {
			let users = await db.Users.findAll({
				include: [
				
					{
				
					  model: db.Customers,
				
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
				
					        }
				
					      ]
				
					    },
				
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
			});
			return users
		},

		async getOneWithAllAssociations(req, db) {
			let users = await db.Users.findOne({
				where: {
					id: req.params.id
				},
				include: [
				
					{
				
					  model: db.Customers,
				
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
				
					        }
				
					      ]
				
					    },
				
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
			});
			return users
		},
	
	
			



}

