
	const axios = require('axios')
	var assert = require('assert')
	var  Users = require('../../../Api/backend/Users')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "users",
				post: {},
				get: {id: 1},
				put: {
					id: 1,
					data:{}
				},
				destroy: {id: 1},
				setId: function(id) {
					this.get.id = id;
					this.put.id = id;
					this.destroy.id = id;
				}
			}
			config.post = Fake.fakeSql(db[name], config);
			config.put.data = Fake.fakeSql(db[name], config);

			this.post(config)
			this.getOne(config)
			this.getAll(config)
			this.update(config)
			this.destroy(config)
			
			
				

					
					
					

					config.post.expenses = Fake.fakeSql(db.Expenses, config);

					this.UsersWithExpenses(config)
					this.createUsersExpenses(config)
					this.getUsersExpensesWithAllAssociations(config)
					this.getUsersWithAllAssociations(config)
				
				

					
					
					

					config.post.employees = Fake.fakeSql(db.Employees, config);

					this.UsersWithEmployees(config)
					this.createUsersEmployees(config)
					this.getUsersEmployeesWithAllAssociations(config)
					this.getUsersWithAllAssociations(config)
				
				

					
					
					

					config.post.customers = Fake.fakeSql(db.Customers, config);

					this.UsersWithCustomers(config)
					this.createUsersCustomers(config)
					this.getUsersCustomersWithAllAssociations(config)
					this.getUsersWithAllAssociations(config)
				
				
			

		},

		post(config) {
			describe(`users post calls`, function() {
				it("should have status code 1", function() {
					return Users.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.users.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`users get one calls`, function() {
				it("should have status code 1", function() {
					return Users.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`users get all calls`, function() {	
				it("should have status code 1", function() {
					return Users.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Users.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` users update calls`, function() {
					it("should have status code 1", function() {
						return Users.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` users destroy calls`, function() {
					it("should have status code 1", function() {
						return Users.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			

				
				
				
	
				UsersWithExpenses(config) {
					describe(`getUsersWithExpenses(): get one with expenses`, function() {
						it("should have status code 1", function() {
							return Users.getUsersWithExpenses(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createUsersExpenses(config) {
					describe(`createUsersWithExpenses(): post Users with expenses`, function() {
						it("should have status code 1", function() {
							return Users.createUsersWithExpenses(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getUsersExpensesWithAllAssociations(config) {
					describe(`getUsersExpensesWithAllAssociations(): get one with Expenses Associations`, function() {
						it("should have status code 1", function() {
							return Users.getExpensesWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			

				
				
				
	
				UsersWithEmployees(config) {
					describe(`getUsersWithEmployees(): get one with employees`, function() {
						it("should have status code 1", function() {
							return Users.getUsersWithEmployees(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createUsersEmployees(config) {
					describe(`createUsersWithEmployees(): post Users with employees`, function() {
						it("should have status code 1", function() {
							return Users.createUsersWithEmployees(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getUsersEmployeesWithAllAssociations(config) {
					describe(`getUsersEmployeesWithAllAssociations(): get one with Employees Associations`, function() {
						it("should have status code 1", function() {
							return Users.getEmployeesWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			

				
				
				
	
				UsersWithCustomers(config) {
					describe(`getUsersWithCustomers(): get one with customers`, function() {
						it("should have status code 1", function() {
							return Users.getUsersWithCustomers(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createUsersCustomers(config) {
					describe(`createUsersWithCustomers(): post Users with customers`, function() {
						it("should have status code 1", function() {
							return Users.createUsersWithCustomers(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getUsersCustomersWithAllAssociations(config) {
					describe(`getUsersCustomersWithAllAssociations(): get one with Customers Associations`, function() {
						it("should have status code 1", function() {
							return Users.getCustomersWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			
			getUsersWithAllAssociations(config) {
				describe(`getUsersWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Users.getWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}