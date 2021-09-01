const fs = require('fs');
const CreateTemplate = require('./Create/Template');

const {mkdir, writeToFile} = require("./Helpers")


const apiConfig = require ('./Config/Config')
const args = require('./Config/FileArguements')
const fileConfig = require ('./Config/fileConfig')

args.setup();
args.checkFlags();

fileConfig.setName(args.name);

if (args.error) {
	return 
}

if (args.singleApi) {
	CreateTemplate(fileConfig.model)
	CreateTemplate(fileConfig.controller)
	CreateTemplate(fileConfig.routes)

	CreateTemplate(fileConfig.apiBackend)
	CreateTemplate(fileConfig.apiFrontend)

	CreateTemplate(fileConfig.tests)
	CreateTemplate(fileConfig.seed)
	updateApiConfig(args.name)

} else if (args.load) {
	for (let api of apiConfig) {
		fileConfig.setName(api.name);
		CreateTemplate(fileConfig.controller)
		CreateTemplate(fileConfig.model)
		CreateTemplate(fileConfig.routes)
		CreateTemplate(fileConfig.apiBackend)
		CreateTemplate(fileConfig.apiFrontend)
		CreateTemplate(fileConfig.tests)
		CreateTemplate(fileConfig.seed)
	}
} else {
	if (args.controller) {
		CreateTemplate(fileConfig.controller)
	}

	if (args.model) {
		CreateTemplate(fileConfig.model)
	}

	if (args.tests) {
		CreateTemplate(fileConfig.tests)
	}

	if (args.routes) {
		CreateTemplate(fileConfig.routes)
	}

	if (args.api) {
		CreateTemplate(fileConfig.apiBackend)
		CreateTemplate(fileConfig.apiFrontend)
	}

	if (args.seed) {
		CreateTemplate(fileConfig.seed)
	}
}

function updateApiConfig(name) {
		for (let table of apiConfig) {
		if (table.name === name) {
			console.log("Not adding to config.. already exists")
			return ;
		}
	}

	apiConfig.push({name: name, hasMany: [], belongsTo: []});
	writeToFile(`./Scaffold/Config/Config.js`, `let api = ${JSON.stringify(apiConfig, null, 2)}\n module.exports = api`);

}

