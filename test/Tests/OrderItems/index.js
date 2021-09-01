
	const axios = require('axios')
	var assert = require('assert')
	var  OrderItems = require('../../../Api/backend/OrderItems')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "order_items",
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
			
			
				
			

		},

		post(config) {
			describe(`order_items post calls`, function() {
				it("should have status code 1", function() {
					return OrderItems.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.order_items.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`order_items get one calls`, function() {
				it("should have status code 1", function() {
					return OrderItems.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`order_items get all calls`, function() {	
				it("should have status code 1", function() {
					return OrderItems.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return OrderItems.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` order_items update calls`, function() {
					it("should have status code 1", function() {
						return OrderItems.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` order_items destroy calls`, function() {
					it("should have status code 1", function() {
						return OrderItems.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			
			getOrderItemsWithAllAssociations(config) {
				describe(`getOrderItemsWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return OrderItems.getWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}