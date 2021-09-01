
	const axios = require('axios')
	var assert = require('assert')
	var  Test = require('../../../Api/backend/Test')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "test",
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
			describe(`test post calls`, function() {
				it("should have status code 1", function() {
					return Test.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.test.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`test get one calls`, function() {
				it("should have status code 1", function() {
					return Test.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`test get all calls`, function() {	
				it("should have status code 1", function() {
					return Test.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Test.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` test update calls`, function() {
					it("should have status code 1", function() {
						return Test.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` test destroy calls`, function() {
					it("should have status code 1", function() {
						return Test.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			
		
}