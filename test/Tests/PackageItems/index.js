
	const axios = require('axios')
	var assert = require('assert')
	var  PackageItems = require('../../../Api/backend/PackageItems')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "package_items",
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
			describe(`package_items post calls`, function() {
				it("should have status code 1", function() {
					return PackageItems.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.package_items.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`package_items get one calls`, function() {
				it("should have status code 1", function() {
					return PackageItems.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`package_items get all calls`, function() {	
				it("should have status code 1", function() {
					return PackageItems.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return PackageItems.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` package_items update calls`, function() {
					it("should have status code 1", function() {
						return PackageItems.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` package_items destroy calls`, function() {
					it("should have status code 1", function() {
						return PackageItems.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			
			getPackageItemsWithAllAssociations(config) {
				describe(`getPackageItemsWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return PackageItems.getWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}