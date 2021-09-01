
	const axios = require('axios')
	var assert = require('assert')
	var  Employees = require('../../../Api/backend/Employees')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "employees",
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
			describe(`employees post calls`, function() {
				it("should have status code 1", function() {
					return Employees.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.employees.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`employees get one calls`, function() {
				it("should have status code 1", function() {
					return Employees.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`employees get all calls`, function() {	
				it("should have status code 1", function() {
					return Employees.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Employees.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` employees update calls`, function() {
					it("should have status code 1", function() {
						return Employees.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` employees destroy calls`, function() {
					it("should have status code 1", function() {
						return Employees.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			
			getEmployeesWithAllAssociations(config) {
				describe(`getEmployeesWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Employees.getWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}