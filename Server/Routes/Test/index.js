		const {Test} = require('../../Controllers')
		module.exports = (app, db) => {
		
		
			app.get(`/api/test/test`, (req, res) => {
				let test = Test.test();
				res.json({code: 1, message: "test success" })
			})

			app.get(`/api/test/:id`, async (req, res) => {
				let test = await Test.getOne(req, db);
				if (test) {
					res.json({code: 1, message: "Success", test })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

			app.get(`/api/test/`, async (req, res) => {
				let test = await Test.getAll(req, db);

				if (test) {
					res.json({code: 1, message: "Success", test })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.get(`/api/test/count/all`, async (req, res) => {
				let count = await Test.count(req, db);

				if (count) {
					res.json({code: 1, message: "Success", count: count })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.post(`/api/test`, async (req, res) => {
				let test = await Test.post(req, db);
				if (test) {
					res.json({code: 1, message: "Success", test })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.put(`/api/test/:id`, async (req, res) => {
				let test = await Test.put(req, db);
				if (test) {
					res.json({code: 1, message: "Success", test })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}

			})

			app.delete(`/api/test/:id`, async (req, res) => {
				let test = await Test.destroy(req, db);
				if (test) {
					res.json({code: 1, message: "Success", test })
				} else {
					res.json({code: -1, mesage: "Failed"})
				}
			})

	
				
	

}
