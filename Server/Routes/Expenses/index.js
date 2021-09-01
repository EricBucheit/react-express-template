		const {Expenses} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/expenses/test`, (req, res) => {
				let expenses = Expenses.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/expenses/:id`, async (req, res) => {
				let expenses = await Expenses.getOne(req, db);
				if (expenses) {
					res.json({code: 1, message: "Success", expenses })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/expenses/`, async (req, res) => {
				let expenses = await Expenses.getAll(req, db);

				if (expenses) {
					res.json({code: 1, message: "Success", expenses })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/expenses/count/all`, async (req, res) => {
				let count = await Expenses.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/expenses`, async (req, res) => {
				let expenses = await Expenses.post(req, db);
				if (expenses) {
					res.json({code: 1, message: "Success", expenses })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/expenses/:id`, async (req, res) => {
				let expenses = await Expenses.put(req, db);
				if (expenses) {
					res.json({code: 1, message: "Success", expenses })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/expenses/:id`, async (req, res) => {
				let expenses = await Expenses.destroy(req, db);
				if (expenses) {
					res.json({code: 1, message: "Success", expenses })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
			
		app.get(`/api/expenses/all/associations`, async (req, res) => {
			let expenses = await Expenses.getAllWithAssociations(req, db);
			if (expenses) {
				res.json({code: 1, message: "Success", expenses })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	
	

}
