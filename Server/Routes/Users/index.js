		const {Users} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/users/test`, (req, res) => {
				let users = Users.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/users/:id`, async (req, res) => {
				let users = await Users.getOne(req, db);
				if (users) {
					res.json({code: 1, message: "Success", users })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/users/`, async (req, res) => {
				let users = await Users.getAll(req, db);

				if (users) {
					res.json({code: 1, message: "Success", users })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/users/count/all`, async (req, res) => {
				let count = await Users.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/users`, async (req, res) => {
				let users = await Users.post(req, db);
				if (users) {
					res.json({code: 1, message: "Success", users })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/users/:id`, async (req, res) => {
				let users = await Users.put(req, db);
				if (users) {
					res.json({code: 1, message: "Success", users })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/users/:id`, async (req, res) => {
				let users = await Users.destroy(req, db);
				if (users) {
					res.json({code: 1, message: "Success", users })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
		
			

				app.get(`/api/users/:id/expenses`, async (req, res) => {
					let users = await Users.getUsersWithExpenses(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/users/expenses`, async (req, res) => {
					let users = await Users.createUsersWithExpenses(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/users/:id/expenses/all/associations`, async (req, res) => {
					let users = await Users.getOneWithExpensesAssociations(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

		
			

				app.get(`/api/users/:id/employees`, async (req, res) => {
					let users = await Users.getUsersWithEmployees(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/users/employees`, async (req, res) => {
					let users = await Users.createUsersWithEmployees(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/users/:id/employees/all/associations`, async (req, res) => {
					let users = await Users.getOneWithEmployeesAssociations(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

		
			

				app.get(`/api/users/:id/customers`, async (req, res) => {
					let users = await Users.getUsersWithCustomers(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})


				app.post(`/api/users/customers`, async (req, res) => {
					let users = await Users.createUsersWithCustomers(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

				app.get(`/api/users/:id/customers/all/associations`, async (req, res) => {
					let users = await Users.getOneWithCustomersAssociations(req, db);
					if (users) {
						res.json({code: 1, message: "Success", users })
					} else {
						res.json({code: -1, mesage: "Failed"})
					}
				})

			
		app.get(`/api/users/all/associations`, async (req, res) => {
			let users = await Users.getAllWithAssociations(req, db);
			if (users) {
				res.json({code: 1, message: "Success", users })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	

		app.get(`/api/users/:id/all/associations`, async (req, res) => {
			let users = await Users.getOneWithAllAssociations(req, db);
			if (users) {
				res.json({code: 1, message: "Success", users })
			} else {
				res.json({code: -1, mesage: "Failed"})
			}
		})	

	

}
