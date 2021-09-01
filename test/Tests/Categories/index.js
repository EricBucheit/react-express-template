
	const axios = require('axios')
	var assert = require('assert')
	var  Categories = require('../../../Api/backend/Categories')
	var faker = require('faker')
	var moment = require('moment')
	var Fake = require('../../FakeSql')

	module.exports  = {

		async run(db, name) {
		 
			let config = {
				name: "categories",
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

					this.CategoriesWithItems(config)
					this.createCategoriesItems(config)
					this.getCategoriesItemsWithAllAssociations(config)
					this.getCategoriesWithAllAssociations(config)
				
				
			

		},

		post(config) {
			describe(`categories post calls`, function() {
				it("should have status code 1", function() {
					return Categories.create(config.post).then(data => {
						assert.equal(data.code, 1)
						config.setId(data.categories.id)
					});
				})
			})
		},
		getOne(config) {
			describe(`categories get one calls`, function() {
				it("should have status code 1", function() {
					return Categories.getOne(config.get.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},
		getAll(config) {
			describe(`categories get all calls`, function() {	
				it("should have status code 1", function() {
					return Categories.getAll().then(data => {
						assert.equal(data.code, 1) 
					});
				})
				
				it("should count occurrences in the database", function() {
					return Categories.count().then(data => {
						assert.equal(data.code, 1)
						assert.equal(data.count > 0, true);
					});
				})
			})
		},

		update(config) {
			describe(` categories update calls`, function() {
					it("should have status code 1", function() {
						return Categories.update(config.put.id, config.put.data).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		destroy(config) {
			describe(` categories destroy calls`, function() {
					it("should have status code 1", function() {
						return Categories.destroy(config.destroy.id).then(data => {
						assert.equal(data.code, 1) 
					});
				})
			})
		},

		
			

				
				
				
	
				CategoriesWithItems(config) {
					describe(`getCategoriesWithItems(): get one with items`, function() {
						it("should have status code 1", function() {
							return Categories.getCategoriesWithItems(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				createCategoriesItems(config) {
					describe(`createCategoriesWithItems(): post Categories with items`, function() {
						it("should have status code 1", function() {
							return Categories.createCategoriesWithItems(config.post).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},

				getCategoriesItemsWithAllAssociations(config) {
					describe(`getCategoriesItemsWithAllAssociations(): get one with Items Associations`, function() {
						it("should have status code 1", function() {
							return Categories.getItemsWithAllAssociations(20).then(data => {
								assert.equal(data.code, 1) 
							});
						})
					})
				},
				
			
			getCategoriesWithAllAssociations(config) {
				describe(`getCategoriesWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Categories.getWithAllAssociations().then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
			getCategoriesWithAllAssociations(config) {
				describe(`getCategoriesWithAllAssociations(): get all with Associations`, function() {
					it("should have status code 1", function() {
						return Categories.getOneWithAllAssociations(20).then(data => {
							assert.equal(data.code, 1) 
						});
					})
				})
			},
		
}