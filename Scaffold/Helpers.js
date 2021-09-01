const fs = require('fs');

	 function getDbColumns(db) {
	 	let data = [];
			try {
				for( let key in db.rawAttributes ){
					if (key === "id" || key === "createdAt" || key === "updatedAt") {
				 		continue
				 	} else {
				 		let type = db.rawAttributes[key].type.key
				 		data.push({key: key, type:type})	
				 	}
				 	
				}
			} catch (err) {
				console.log(err)
			}
			return data;
	 }

	 function getModel(associations, name) {
		for (let association of associations) {
			if (association.name === name) {
				return (association);
			}
		}
		return false
	}

	function findHeirarchyAssociations(associations, name, names=[]) {
		// recurse through associations and add them to the includes object, used for controller / test composition

		// find current model from /config/config
		let model = getModel(associations, name);

		let include = {
			model: `db.${model.name}`,
			include: [],
		}

		// check to see if we already covered the association so it wont keep looping
		for (let n of names) {
			if (n === name) {
				return false;
			}
		}
		
		// add name to list of names we already associated
		names.push(name);

		//push the includes and return the current includes to be added the the previous stack only if we havent covered that model yet

		try {
			if (model) {
				if (model.hasMany.length) {
					for (association of model.hasMany) {
						let newInclude = findHeirarchyAssociations(associations, association, names)
						if (newInclude) {
							include.include.push(newInclude);	
						}
					}
				}

				if (model.belongsTo.length) {
					for (association of model.belongsTo) {
						let newInclude = findHeirarchyAssociations(associations, association, names)
						if (newInclude) {
							include.include.push(newInclude);	
						}
					}
				}
			}	
		} catch(err) {
			console.log(err)
		}
	
		return include;
	}


	function LowerCaseFirstLetter(string) {
  		return string.charAt(0).toLowerCase() + string.slice(1);
	}

	 function camelToSnakeCase (str) {
		str = str.charAt(0).toLowerCase() + str.slice(1);
		return(str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`));	
	}

	 function mkdir(dir, name, verbose=false) {
		const folderName = `${dir}/${name}`

		if (verbose) {
			console.log(`Creating directory ${folderName}`);
		}

		try {
		  if (!fs.existsSync(folderName)) {
		    fs.mkdirSync(folderName, {recursive: true})
		  }

		} catch (err) {
		  console.error(err)
		}

	}

	 function writeToFile(file, content, verbose=false) {
		try {
		  const data = fs.writeFileSync(file, content)
		  if (verbose) {
			console.log(`Wrote File: ${file}`);
		  }
		  //file written successfully
		} catch (err) {
		  console.error(err)
		}
	}


	 function cp(src, dest, verbose=false) {
		// File destination.txt will be created or overwritten by default.
		fs.copyFile(`${src}`, dest, (err) => {
		  	if (err) throw err;
		  	
		  	if (verbose) {
				console.log(` ${src} was copied to ${dest}`);
			}
		});
	}

	async function rmdir(dir, name, verbose=false) {
		const folderName = `${dir}/${name}`
		try {
		    await fs.rm(folderName, {recursive: true}, (err) => {if (err) console.log(err)})
		    if (verbose) {
				console.log(`Deleted ${dir}/${name}`)
			}
			

		} catch (err) {
		  console.error(err)
		}

	}

	async function RemoveAllDirectories(dir, verbose=false) {
		require('fs').readdirSync(dir).forEach(async function(file) {
		   	if (!file.match('.js')) {
		   		const folderName = `${dir}/${file}`
				try {
				    await fs.rm(folderName, {recursive: true}, (err) => {if (err) console.log("No Dir")})
				     if (verbose) {
						console.log(`Deleted ${folderName}`)
					}
				    
				} catch (err) {
				  console.error("No Dir")
				}
		   	}
		});
	}

module.exports = {
	getModel,
	findHeirarchyAssociations,
	LowerCaseFirstLetter,
	camelToSnakeCase,
	mkdir,
	writeToFile,
	cp,
	rmdir,
	RemoveAllDirectories,
	getDbColumns
}