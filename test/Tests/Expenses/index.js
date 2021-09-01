
	const axios = require('axios')
	var assert = require('assert')
	var  Expenses = require('../../../Api/backend/Expenses')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "expenses",
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
			describe(`expenses post calls`, function() {
				it("should have status code 1", function() {
					return Expenses.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.expenses.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`expenses get one calls`, function() {
				it("should have status code 1", function() {
					return Expenses.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`expenses get all calls`, function() {	
				it("should have status code 1", function() {
					return Expenses.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Expenses.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` expenses update calls`, function() {
					it("should have status code 1", function() {
						return Expenses.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` expenses destroy calls`, function() {
					it("should have status code 1", function() {
						return Expenses.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			
			getExpensesWithAllAssociations(config) {
				describe(`getExpensesWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Expenses.getWithAllAssociations().then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
			getExpensesWithAllAssociations(config) {
				describe(`getExpensesWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Expenses.getOneWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}