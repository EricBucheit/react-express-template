
	const axios = require('axios')
	var assert = require('assert')
	var  Packages = require('../../../Api/backend/Packages')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "packages",
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
			
			
				

					
					
					

					config.post.items = Fake.fakeSql(db.Items, config);

					this.PackagesWithItems(config)
					this.createPackagesItems(config)
					this.getPackagesItemsWithAllAssociations(config)
					this.getPackagesWithAllAssociations(config)
				
				

					
					
					

					config.post.packageItems = Fake.fakeSql(db.PackageItems, config);

					this.PackagesWithPackageItems(config)
					this.createPackagesPackageItems(config)
					this.getPackagesPackageItemsWithAllAssociations(config)
					this.getPackagesWithAllAssociations(config)
				
				
			

		},

		post(config) {
			describe(`packages post calls`, function() {
				it("should have status code 1", function() {
					return Packages.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.packages.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`packages get one calls`, function() {
				it("should have status code 1", function() {
					return Packages.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`packages get all calls`, function() {	
				it("should have status code 1", function() {
					return Packages.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Packages.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` packages update calls`, function() {
					it("should have status code 1", function() {
						return Packages.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` packages destroy calls`, function() {
					it("should have status code 1", function() {
						return Packages.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			

				
				
				
	
				PackagesWithItems(config) {
					describe(`getPackagesWithItems(): get one with items`, function() {
						it("should have status code 1", function() {
							return Packages.getPackagesWithItems(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createPackagesItems(config) {
					describe(`createPackagesWithItems(): post Packages with items`, function() {
						it("should have status code 1", function() {
							return Packages.createPackagesWithItems(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getPackagesItemsWithAllAssociations(config) {
					describe(`getPackagesItemsWithAllAssociations(): get one with Items Associations`, function() {
						it("should have status code 1", function() {
							return Packages.getItemsWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			

				
				
				
	
				PackagesWithPackageItems(config) {
					describe(`getPackagesWithPackageItems(): get one with packageItems`, function() {
						it("should have status code 1", function() {
							return Packages.getPackagesWithPackageItems(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createPackagesPackageItems(config) {
					describe(`createPackagesWithPackageItems(): post Packages with packageItems`, function() {
						it("should have status code 1", function() {
							return Packages.createPackagesWithPackageItems(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getPackagesPackageItemsWithAllAssociations(config) {
					describe(`getPackagesPackageItemsWithAllAssociations(): get one with PackageItems Associations`, function() {
						it("should have status code 1", function() {
							return Packages.getPackageItemsWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			
			getPackagesWithAllAssociations(config) {
				describe(`getPackagesWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Packages.getWithAllAssociations().then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
			getPackagesWithAllAssociations(config) {
				describe(`getPackagesWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Packages.getOneWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}