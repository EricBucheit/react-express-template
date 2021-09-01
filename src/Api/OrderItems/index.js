 
 	import axios from "axios";
 	const routePrefix = `${process.env.REACT_APP_API_URL}/orderItems`
	 
 export default {

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
		

	
	async getWithAllAssociations() {
		let res = await axios.get(`${routePrefix}/all/associations`).catch(err => console.log(err))
		return res.data;
	},
	async getOneWithAllAssociations(id) {
		let res = await axios.get(`${routePrefix}/${id}/all/associations`).catch(err => console.log(err))
		return res.data;
	},




}
	