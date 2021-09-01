let ejs = require('ejs');

function CreateTemplate(info, verbose = false) {
	const associations = require('../Config/Config');
	const {
		camelToSnakeCase,
		mkdir,
		writeToFile, 
		findHeirarchyAssociations, 
		getModel,
		LowerCaseFirstLetter,
	} = require("../Helpers")
	
	const varName = camelToSnakeCase(info.name)
	let currentModel = getModel(associations, info.name)
	const routePrefix = `/api/${LowerCaseFirstLetter(info.name)}`
	const lc_name = LowerCaseFirstLetter(info.name)
	if (verbose) {
		console.log(`Creating Controller: ${info.name}!`);	
	}

	const {exportStr, importStr} = apiHelper(info, lc_name);

	let ejsData = {
		currentModel: currentModel, 
		name: info.name, 
		associations: associations,
		findHeirarchyAssociations: findHeirarchyAssociations,
		varName: varName,
		LowerCaseFirstLetter: LowerCaseFirstLetter,
		routePrefix: routePrefix,
		lc_name: lc_name,
		exportStr: exportStr,
		importStr: importStr,
	}

	let str = ejs.renderFile(__dirname + info.dir.template, ejsData, {escape: false}, function(err, str){
	    if (!err) {
	    	mkdir(info.dir.output, info.name)
			writeToFile(`${info.dir.output}/${info.name}/index.js`, str);
	    } else {
	    	console.log(err)
	    }	    
	});
	return str;
}

function apiHelper(info, lc_name) {
	let importStr;
	let exportStr;

	if (info.apiType === "backend") {
		 importStr = 
		 `
 	const axios = require("axios")
 	require("dotenv").config()
 	const routePrefix = \`\${process.env.API_URL}/${lc_name}\`
		 `;

		 exportStr = `module.exports = {`


	} else if (info.apiType === "frontend") {
		 importStr = `
 	import axios from "axios";
 	const routePrefix = \`\${process.env.REACT_APP_API_URL}/${lc_name}\`
	 `
		 exportStr = `export default {`

	} else {
		importStr = 
		 `
 	const axios = require("axios")
 	require("dotenv").config()
 	const routePrefix = \`\${process.env.API_URL}/${lc_name}\`
		 `;

		exportStr = `module.exports = {`
	}

	return {
		exportStr,
		importStr
	}

}
 
module.exports = CreateTemplate

