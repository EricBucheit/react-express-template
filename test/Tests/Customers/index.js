
	const axios = require('axios')
	var assert = require('assert')
	var  Customers = require('../../../Api/backend/Customers')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "customers",
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
			
			
				

					
					
					

					config.post.orders = Fake.fakeSql(db.Orders, config);

					this.CustomersWithOrders(config)
					this.createCustomersOrders(config)
					this.getCustomersOrdersWithAllAssociations(config)
					this.getCustomersWithAllAssociations(config)
				
				
			

		},

		post(config) {
			describe(`customers post calls`, function() {
				it("should have status code 1", function() {
					return Customers.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.customers.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`customers get one calls`, function() {
				it("should have status code 1", function() {
					return Customers.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`customers get all calls`, function() {	
				it("should have status code 1", function() {
					return Customers.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Customers.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` customers update calls`, function() {
					it("should have status code 1", function() {
						return Customers.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` customers destroy calls`, function() {
					it("should have status code 1", function() {
						return Customers.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			

				
				
				
	
				CustomersWithOrders(config) {
					describe(`getCustomersWithOrders(): get one with orders`, function() {
						it("should have status code 1", function() {
							return Customers.getCustomersWithOrders(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createCustomersOrders(config) {
					describe(`createCustomersWithOrders(): post Customers with orders`, function() {
						it("should have status code 1", function() {
							return Customers.createCustomersWithOrders(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getCustomersOrdersWithAllAssociations(config) {
					describe(`getCustomersOrdersWithAllAssociations(): get one with Orders Associations`, function() {
						it("should have status code 1", function() {
							return Customers.getOrdersWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			
			getCustomersWithAllAssociations(config) {
				describe(`getCustomersWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Customers.getWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}