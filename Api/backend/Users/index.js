 
 	const axios = require("axios")
 	require("dotenv").config()
 	const routePrefix = `${process.env.API_URL}/users`
		 
 module.exports = {

		async test() {
			let res = await axios.get(`${routePrefix}/test`).catch(err => console.log(err))
			return res.data;
		},
		async getOne(id) {
			let res = await axios.get(`${routePrefix}/${id}`).catch(err => console.log(err))
			return res.data;
		},
		async getAll() {
			let res = await axios.get(`${routePrefix}`).catch(err => console.log(err))
			return res.data;
		},
		async count() {
			let res = await axios.get(`${routePrefix}/count/all`).catch(err => console.log(err))
			return res.data;
		},
		async create(data) {
			let res = await axios.post(`${routePrefix}`, data).catch(err => console.log(err))
			return res.data
		},

		async update(id, data) {
			let res = await axios.put(`${routePrefix}/${id}`,  data).catch(err => console.log(err))
			return res.data
		},

		async destroy(id) {
			let res = await axios.delete(`${routePrefix}/${id}`).catch(err => console.log(err))
			return res.data;
		}, 
		

	
		
		

		async getUsersWithExpenses(id) {
			let res = await axios.get(`${routePrefix}/${id}/expenses`).catch(err => console.log(err))
			return res.data;
		},

		async createUsersWithExpenses(data) {
			let res = await axios.post(`${routePrefix}/expenses`, data).catch(err => console.log(err))
			return res.data;
		},

		async getExpensesWithAllAssociations(id) {
			let res = await axios.get(`${routePrefix}/${id}/expenses/all/associations`).catch(err => console.log(err))
			return res.data;
		},


	
		
		

		async getUsersWithEmployees(id) {
			let res = await axios.get(`${routePrefix}/${id}/employees`).catch(err => console.log(err))
			return res.data;
		},

		async createUsersWithEmployees(data) {
			let res = await axios.post(`${routePrefix}/employees`, data).catch(err => console.log(err))
			return res.data;
		},

		async getEmployeesWithAllAssociations(id) {
			let res = await axios.get(`${routePrefix}/${id}/employees/all/associations`).catch(err => console.log(err))
			return res.data;
		},


	
		
		

		async getUsersWithCustomers(id) {
			let res = await axios.get(`${routePrefix}/${id}/customers`).catch(err => console.log(err))
			return res.data;
		},

		async createUsersWithCustomers(data) {
			let res = await axios.post(`${routePrefix}/customers`, data).catch(err => console.log(err))
			return res.data;
		},

		async getCustomersWithAllAssociations(id) {
			let res = await axios.get(`${routePrefix}/${id}/customers/all/associations`).catch(err => console.log(err))
			return res.data;
		},


	
	async getWithAllAssociations() {
		let res = await axios.get(`${routePrefix}/all/associations`).catch(err => console.log(err))
		return res.data;
	},




}
	