		const {PackageItems} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/packageItems/test`, (req, res) => {
				let package_items = PackageItems.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/packageItems/:id`, async (req, res) => {
				let package_items = await PackageItems.getOne(req, db);
				if (package_items) {
					res.json({code: 1, message: "Success", package_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/packageItems/`, async (req, res) => {
				let package_items = await PackageItems.getAll(req, db);

				if (package_items) {
					res.json({code: 1, message: "Success", package_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/packageItems/count/all`, async (req, res) => {
				let count = await PackageItems.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/packageItems`, async (req, res) => {
				let package_items = await PackageItems.post(req, db);
				if (package_items) {
					res.json({code: 1, message: "Success", package_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/packageItems/:id`, async (req, res) => {
				let package_items = await PackageItems.put(req, db);
				if (package_items) {
					res.json({code: 1, message: "Success", package_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/packageItems/:id`, async (req, res) => {
				let package_items = await PackageItems.destroy(req, db);
				if (package_items) {
					res.json({code: 1, message: "Success", package_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
			
		app.get(`/api/packageItems/all/associations`, async (req, res) => {
			let package_items = await PackageItems.getAllWithAssociations(req, db);
			if (package_items) {
				res.json({code: 1, message: "Success", package_items })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	

		app.get(`/api/packageItems/:id/all/associations`, async (req, res) => {
			let package_items = await PackageItems.getOneWithAllAssociations(req, db);
			if (package_items) {
				res.json({code: 1, message: "Success", package_items })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	

	

}
