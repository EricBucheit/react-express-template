
	const axios = require('axios')
	var assert = require('assert')
	var  Orders = require('../../../Api/backend/Orders')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "orders",
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
			
			
				

					
					
					

					config.post.orderItems = Fake.fakeSql(db.OrderItems, config);

					this.OrdersWithOrderItems(config)
					this.createOrdersOrderItems(config)
					this.getOrdersOrderItemsWithAllAssociations(config)
					this.getOrdersWithAllAssociations(config)
				
				
			

		},

		post(config) {
			describe(`orders post calls`, function() {
				it("should have status code 1", function() {
					return Orders.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.orders.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`orders get one calls`, function() {
				it("should have status code 1", function() {
					return Orders.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`orders get all calls`, function() {	
				it("should have status code 1", function() {
					return Orders.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Orders.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` orders update calls`, function() {
					it("should have status code 1", function() {
						return Orders.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` orders destroy calls`, function() {
					it("should have status code 1", function() {
						return Orders.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			

				
				
				
	
				OrdersWithOrderItems(config) {
					describe(`getOrdersWithOrderItems(): get one with orderItems`, function() {
						it("should have status code 1", function() {
							return Orders.getOrdersWithOrderItems(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createOrdersOrderItems(config) {
					describe(`createOrdersWithOrderItems(): post Orders with orderItems`, function() {
						it("should have status code 1", function() {
							return Orders.createOrdersWithOrderItems(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getOrdersOrderItemsWithAllAssociations(config) {
					describe(`getOrdersOrderItemsWithAllAssociations(): get one with OrderItems Associations`, function() {
						it("should have status code 1", function() {
							return Orders.getOrderItemsWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			
			getOrdersWithAllAssociations(config) {
				describe(`getOrdersWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Orders.getWithAllAssociations().then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
			getOrdersWithAllAssociations(config) {
				describe(`getOrdersWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Orders.getOneWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}