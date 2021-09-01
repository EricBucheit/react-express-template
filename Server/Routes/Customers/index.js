		const {Customers} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/customers/test`, (req, res) => {
				let customers = Customers.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/customers/:id`, async (req, res) => {
				let customers = await Customers.getOne(req, db);
				if (customers) {
					res.json({code: 1, message: "Success", customers })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/customers/`, async (req, res) => {
				let customers = await Customers.getAll(req, db);

				if (customers) {
					res.json({code: 1, message: "Success", customers })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/customers/count/all`, async (req, res) => {
				let count = await Customers.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/customers`, async (req, res) => {
				let customers = await Customers.post(req, db);
				if (customers) {
					res.json({code: 1, message: "Success", customers })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/customers/:id`, async (req, res) => {
				let customers = await Customers.put(req, db);
				if (customers) {
					res.json({code: 1, message: "Success", customers })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/customers/:id`, async (req, res) => {
				let customers = await Customers.destroy(req, db);
				if (customers) {
					res.json({code: 1, message: "Success", customers })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
		
			

				app.get(`/api/customers/:id/orders`, async (req, res) => {
					let customers = await Customers.getCustomersWithOrders(req, db);
					if (customers) {
						res.json({code: 1, message: "Success", customers })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/customers/orders`, async (req, res) => {
					let customers = await Customers.createCustomersWithOrders(req, db);
					if (customers) {
						res.json({code: 1, message: "Success", customers })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/customers/:id/orders/all/associations`, async (req, res) => {
					let customers = await Customers.getOneWithOrdersAssociations(req, db);
					if (customers) {
						res.json({code: 1, message: "Success", customers })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

			
		app.get(`/api/customers/all/associations`, async (req, res) => {
			let customers = await Customers.getAllWithAssociations(req, db);
			if (customers) {
				res.json({code: 1, message: "Success", customers })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	
	

}
