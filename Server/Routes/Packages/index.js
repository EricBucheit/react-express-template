		const {Packages} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/packages/test`, (req, res) => {
				let packages = Packages.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/packages/:id`, async (req, res) => {
				let packages = await Packages.getOne(req, db);
				if (packages) {
					res.json({code: 1, message: "Success", packages })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/packages/`, async (req, res) => {
				let packages = await Packages.getAll(req, db);

				if (packages) {
					res.json({code: 1, message: "Success", packages })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/packages/count/all`, async (req, res) => {
				let count = await Packages.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/packages`, async (req, res) => {
				let packages = await Packages.post(req, db);
				if (packages) {
					res.json({code: 1, message: "Success", packages })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/packages/:id`, async (req, res) => {
				let packages = await Packages.put(req, db);
				if (packages) {
					res.json({code: 1, message: "Success", packages })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/packages/:id`, async (req, res) => {
				let packages = await Packages.destroy(req, db);
				if (packages) {
					res.json({code: 1, message: "Success", packages })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
		
			

				app.get(`/api/packages/:id/items`, async (req, res) => {
					let packages = await Packages.getPackagesWithItems(req, db);
					if (packages) {
						res.json({code: 1, message: "Success", packages })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/packages/items`, async (req, res) => {
					let packages = await Packages.createPackagesWithItems(req, db);
					if (packages) {
						res.json({code: 1, message: "Success", packages })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/packages/:id/items/all/associations`, async (req, res) => {
					let packages = await Packages.getOneWithItemsAssociations(req, db);
					if (packages) {
						res.json({code: 1, message: "Success", packages })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

		
			

				app.get(`/api/packages/:id/packageItems`, async (req, res) => {
					let packages = await Packages.getPackagesWithPackageItems(req, db);
					if (packages) {
						res.json({code: 1, message: "Success", packages })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/packages/packageItems`, async (req, res) => {
					let packages = await Packages.createPackagesWithPackageItems(req, db);
					if (packages) {
						res.json({code: 1, message: "Success", packages })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/packages/:id/packageItems/all/associations`, async (req, res) => {
					let packages = await Packages.getOneWithPackageItemsAssociations(req, db);
					if (packages) {
						res.json({code: 1, message: "Success", packages })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

			
		app.get(`/api/packages/all/associations`, async (req, res) => {
			let packages = await Packages.getAllWithAssociations(req, db);
			if (packages) {
				res.json({code: 1, message: "Success", packages })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	
	

}
