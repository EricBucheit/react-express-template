let config = {
	controller: {
		name: false,
		dir: {
			template: "/Templates/Controller.ejs",
			output: "./Server/Controllers",
		},
		apiType: "controller",
		verbose: false

	},

	routes: {
		name: false,
		dir: {
			template: "/Templates/Route.ejs",
			output: "./Server/Routes",
		},
		apiType: "route",
		verbose: false
	},

	model: {
		name: false,
		dir: {
			template: "/Templates/Model.ejs",
			output: "./Server/Models",
		},
		apiType: "model",
		verbose: false
	},

	apiFrontend: {
		name: false,
		dir: {
			template: "/Templates/Api.ejs",
			output: "./src/Api",
		},
		apiType: "frontend",
		verbose: false
	},

	apiBackend: {
		name: false,
		dir: {
			template: "/Templates/Api.ejs",
			output: "./Api/backend",
		},
		apiType: "backend",
		verbose: false
	},

	tests: {
		name: false,
		dir: {
			template: "/Templates/Test.ejs",
			output: "./test/Tests",
		},
		apiType: "Test",
		verbose: false
	},

	seed: {
		name: false,
		dir: {
			template: "/Templates/Seed.ejs",
			output: "./Server/Seeds",
		},
		apiType: "Seed",
		verbose: false
	},


	setName: function(name) {
		this.controller.name = name;
		this.routes.name = name;
		this.model.name = name;
		this.apiBackend.name = name;
		this.apiFrontend.name = name;
		this.tests.name = name;
		this.seed.name = name;
	}
}
module.exports = config