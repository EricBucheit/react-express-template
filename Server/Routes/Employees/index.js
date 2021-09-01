		const {Employees} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/employees/test`, (req, res) => {
				let employees = Employees.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/employees/:id`, async (req, res) => {
				let employees = await Employees.getOne(req, db);
				if (employees) {
					res.json({code: 1, message: "Success", employees })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/employees/`, async (req, res) => {
				let employees = await Employees.getAll(req, db);

				if (employees) {
					res.json({code: 1, message: "Success", employees })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/employees/count/all`, async (req, res) => {
				let count = await Employees.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/employees`, async (req, res) => {
				let employees = await Employees.post(req, db);
				if (employees) {
					res.json({code: 1, message: "Success", employees })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/employees/:id`, async (req, res) => {
				let employees = await Employees.put(req, db);
				if (employees) {
					res.json({code: 1, message: "Success", employees })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/employees/:id`, async (req, res) => {
				let employees = await Employees.destroy(req, db);
				if (employees) {
					res.json({code: 1, message: "Success", employees })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
			
		app.get(`/api/employees/all/associations`, async (req, res) => {
			let employees = await Employees.getAllWithAssociations(req, db);
			if (employees) {
				res.json({code: 1, message: "Success", employees })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	
	

}
