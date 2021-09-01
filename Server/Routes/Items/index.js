		const {Items} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/items/test`, (req, res) => {
				let items = Items.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/items/:id`, async (req, res) => {
				let items = await Items.getOne(req, db);
				if (items) {
					res.json({code: 1, message: "Success", items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/items/`, async (req, res) => {
				let items = await Items.getAll(req, db);

				if (items) {
					res.json({code: 1, message: "Success", items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/items/count/all`, async (req, res) => {
				let count = await Items.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/items`, async (req, res) => {
				let items = await Items.post(req, db);
				if (items) {
					res.json({code: 1, message: "Success", items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/items/:id`, async (req, res) => {
				let items = await Items.put(req, db);
				if (items) {
					res.json({code: 1, message: "Success", items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/items/:id`, async (req, res) => {
				let items = await Items.destroy(req, db);
				if (items) {
					res.json({code: 1, message: "Success", items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
			
		app.get(`/api/items/all/associations`, async (req, res) => {
			let items = await Items.getAllWithAssociations(req, db);
			if (items) {
				res.json({code: 1, message: "Success", items })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	

		app.get(`/api/items/:id/all/associations`, async (req, res) => {
			let items = await Items.getOneWithAllAssociations(req, db);
			if (items) {
				res.json({code: 1, message: "Success", items })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	

	

}
