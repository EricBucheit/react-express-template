		const {OrderItems} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/orderItems/test`, (req, res) => {
				let order_items = OrderItems.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/orderItems/:id`, async (req, res) => {
				let order_items = await OrderItems.getOne(req, db);
				if (order_items) {
					res.json({code: 1, message: "Success", order_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/orderItems/`, async (req, res) => {
				let order_items = await OrderItems.getAll(req, db);

				if (order_items) {
					res.json({code: 1, message: "Success", order_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/orderItems/count/all`, async (req, res) => {
				let count = await OrderItems.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/orderItems`, async (req, res) => {
				let order_items = await OrderItems.post(req, db);
				if (order_items) {
					res.json({code: 1, message: "Success", order_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/orderItems/:id`, async (req, res) => {
				let order_items = await OrderItems.put(req, db);
				if (order_items) {
					res.json({code: 1, message: "Success", order_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/orderItems/:id`, async (req, res) => {
				let order_items = await OrderItems.destroy(req, db);
				if (order_items) {
					res.json({code: 1, message: "Success", order_items })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
			
		app.get(`/api/orderItems/all/associations`, async (req, res) => {
			let order_items = await OrderItems.getAllWithAssociations(req, db);
			if (order_items) {
				res.json({code: 1, message: "Success", order_items })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	
	

}
