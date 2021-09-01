		const {Orders} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/orders/test`, (req, res) => {
				let orders = Orders.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/orders/:id`, async (req, res) => {
				let orders = await Orders.getOne(req, db);
				if (orders) {
					res.json({code: 1, message: "Success", orders })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/orders/`, async (req, res) => {
				let orders = await Orders.getAll(req, db);

				if (orders) {
					res.json({code: 1, message: "Success", orders })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/orders/count/all`, async (req, res) => {
				let count = await Orders.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/orders`, async (req, res) => {
				let orders = await Orders.post(req, db);
				if (orders) {
					res.json({code: 1, message: "Success", orders })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/orders/:id`, async (req, res) => {
				let orders = await Orders.put(req, db);
				if (orders) {
					res.json({code: 1, message: "Success", orders })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/orders/:id`, async (req, res) => {
				let orders = await Orders.destroy(req, db);
				if (orders) {
					res.json({code: 1, message: "Success", orders })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
		
			

				app.get(`/api/orders/:id/orderItems`, async (req, res) => {
					let orders = await Orders.getOrdersWithOrderItems(req, db);
					if (orders) {
						res.json({code: 1, message: "Success", orders })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/orders/orderItems`, async (req, res) => {
					let orders = await Orders.createOrdersWithOrderItems(req, db);
					if (orders) {
						res.json({code: 1, message: "Success", orders })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/orders/:id/orderItems/all/associations`, async (req, res) => {
					let orders = await Orders.getOneWithOrderItemsAssociations(req, db);
					if (orders) {
						res.json({code: 1, message: "Success", orders })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

			
		app.get(`/api/orders/all/associations`, async (req, res) => {
			let orders = await Orders.getAllWithAssociations(req, db);
			if (orders) {
				res.json({code: 1, message: "Success", orders })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	
	

}
