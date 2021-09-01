let args = {
	name: false,
	singleApi: true,
	everything: false,
	load: false,
	controller: false,
	model: false,
	tests: false,
	routes: false,
	api: false,
	seed: false,
	error: false,


	findArg: function (search) {
		if(process.argv.find(arg => arg === search)) {
			return true
		}
		return false;
	},

	help : function() {
		console.log("Usage: \n node createApi -- ${ModelName} -args... ")
		console.log('\n Exclude args to create everything');

		console.log("\nLoad ApiSetup.js : \n node createApi -- -load")
		console.log("\n Args: \n -controller \n -model \n -tests \n -routes \n -api \n -seed")
		this.error = true
	},

	setup : function() {
		this.name = process.argv[2];

		if (!this.name) {
			this.help();
			return ;
		}


		if (this.name.indexOf('-load') > -1) {
			this.load = true
			this.singleApi = false;
		}
		else if (this.name.indexOf('-') > -1) {
			this.help()
			return ;
		} else {
			this.controller = this.findArg('-controller');
			this.model = this.findArg('-model');
			this.tests = this.findArg('-tests');
			this.routes = this.findArg('-routes');
			this.api = this.findArg('-api');
			this.seed = this.findArg('-seed');
		}

	},

	checkFlags: function() {
		if (this.controller || this.model || this.tests || this.routes || this.api || this.seed) {
			this.singleApi = false;
		}
		if (this.load && (this.controller || this.model || this.tests || this.routes || this.api || this.seed)) {
			this.singleApi = false;
			this.load = false
		}
	},


	removeHelp: function () {
		this.error = true;
		console.log("Usage: \n node removeApi.js -- ${ModelName} -[args]... \n")
		console.log('\n Exclude args to remove everything related to the name (mvc, tests, api) ');
		console.log("\n Args \n -controller \n -model \n -tests \n -routes \n -api")
		console.log("\nOr: \n node removeApi.js -- -r to remove ALL MVC / TESTS / APIs,  BE CAREFUL \n")
	},

	setupRemove: function () {
		this.name = process.argv[2];
		if (!this.name) {
			this.removeHelp()
			return 
		}
		if (this.name.indexOf('-r') > -1) {
			this.everything = true;	
		} else if (this.name.indexOf('-') > -1) {
			this.removeHelp()
			return ;
		} else {
			this.controller = this.findArg('-controller');
			this.model = this.findArg('-model');
			this.tests = this.findArg('-tests');
			this.routes = this.findArg('-routes');
			this.api = this.findArg('-api');
			this.seed = this.findArg('-seed');		
		}
	},

	checkRemoveFlags: function() {
		if (this.everything || this.controller || this.model || this.tests || this.routes || this.api || this.seed) {
			this.singleApi = false;
		}

		if (this.everything && (this.controller || this.model || this.tests || this.routes || this.api || this.seed)) {
			this.singleApi = false;
			this.everything = false;
		}
	}


}

module.exports = args