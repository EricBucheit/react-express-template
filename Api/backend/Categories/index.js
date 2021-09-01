 
 	const axios = require("axios")
 	require("dotenv").config()
 	const routePrefix = `${process.env.API_URL}/categories`
		 
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
		

	
		
		

		async getCategoriesWithItems(id) {
			let res = await axios.get(`${routePrefix}/${id}/items`).catch(err => console.log(err))
			return res.data;
		},

		async createCategoriesWithItems(data) {
			let res = await axios.post(`${routePrefix}/items`, data).catch(err => console.log(err))
			return res.data;
		},

		async getItemsWithAllAssociations(id) {
			let res = await axios.get(`${routePrefix}/${id}/items/all/associations`).catch(err => console.log(err))
			return res.data;
		},


	
	async getWithAllAssociations() {
		let res = await axios.get(`${routePrefix}/all/associations`).catch(err => console.log(err))
		return res.data;
	},




}
	