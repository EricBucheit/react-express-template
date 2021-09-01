const fs = require('fs');
const {RemoveAllDirectories, rmdir} = require("./Helpers")
const apiSetup = require ('./Config/Config')
const fileConfig = require("./Config/FileConfig");

const {writeToFile} = require("./Helpers")
const args = require("./Config/FileArguements");

args.setupRemove();
args.checkRemoveFlags();

if (args.error) {
	return ;
}

if (args.singleApi) {
	rmdir('./Server/Controllers', args.name)
	rmdir('./Server/Models', args.name)
	rmdir('./Server/Routes', args.name)
	rmdir('./Api/frontend', args.name)
	rmdir('./Api/backend', args.name)
	rmdir('./test/Tests', args.name)
	rmdir('./Server/Seeds', args.name)
	updateApiConfig(args.name)

} else if (args.everything) {

	let keys = Object.keys(fileConfig);

	for (let key of keys) {
		if (typeof fileConfig[key] === "function") {
			continue
		} 
		RemoveAllDirectories(fileConfig[key].dir.output)	
	}

} else {
	
	if (args.controller) {
		rmdir('./Server/Controllers', args.name)
	}

	if (args.model) {
		rmdir('./Server/Models', args.name)
	}

	if (args.tests) {
		rmdir('./test/Tests', args.name)
	}

	if (args.routes) {
		rmdir('./Server/Routes', args.name)
	}

	if (args.api) {
		rmdir('./Api', args.name)
	}
	if (args.seed) {
		rmdir('./Server/Seeds', args.name)	
	}
}

function updateApiConfig(name) {
	apiSetup.forEach((table, index) => {
		if (table.name === name) {
			apiSetup.splice(index, 1);	
		}
		
	})

	writeToFile(`./Scaffold/Config/Config.js`, `let api = ${JSON.stringify(apiSetup, null, 2)}\n module.exports = api`);

}

