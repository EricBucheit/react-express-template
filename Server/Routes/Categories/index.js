		const {Categories} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/categories/test`, (req, res) => {
				let categories = Categories.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/categories/:id`, async (req, res) => {
				let categories = await Categories.getOne(req, db);
				if (categories) {
					res.json({code: 1, message: "Success", categories })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/categories/`, async (req, res) => {
				let categories = await Categories.getAll(req, db);

				if (categories) {
					res.json({code: 1, message: "Success", categories })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/categories/count/all`, async (req, res) => {
				let count = await Categories.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/categories`, async (req, res) => {
				let categories = await Categories.post(req, db);
				if (categories) {
					res.json({code: 1, message: "Success", categories })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/categories/:id`, async (req, res) => {
				let categories = await Categories.put(req, db);
				if (categories) {
					res.json({code: 1, message: "Success", categories })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/categories/:id`, async (req, res) => {
				let categories = await Categories.destroy(req, db);
				if (categories) {
					res.json({code: 1, message: "Success", categories })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
		
			

				app.get(`/api/categories/:id/items`, async (req, res) => {
					let categories = await Categories.getCategoriesWithItems(req, db);
					if (categories) {
						res.json({code: 1, message: "Success", categories })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/categories/items`, async (req, res) => {
					let categories = await Categories.createCategoriesWithItems(req, db);
					if (categories) {
						res.json({code: 1, message: "Success", categories })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/categories/:id/items/all/associations`, async (req, res) => {
					let categories = await Categories.getOneWithItemsAssociations(req, db);
					if (categories) {
						res.json({code: 1, message: "Success", categories })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

			
		app.get(`/api/categories/all/associations`, async (req, res) => {
			let categories = await Categories.getAllWithAssociations(req, db);
			if (categories) {
				res.json({code: 1, message: "Success", categories })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	
	

}
