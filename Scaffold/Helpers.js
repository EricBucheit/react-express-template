const fs = require('fs');

	 function getModel(associations, name) {
		for (let association of associations) {
			if (association.name === name) {
				return (association);
			}
		}
		return false
	}

	 function findHeirarchyAssociations(associations, name) {
	 	//recurse through model and get associations.

		let model = getModel(associations, name);
		
		let include = {
			model: `db.${model.name}`,
			include: [],
		}



		if (model) {
			if (model.hasMany.length) {
				for (association of model.hasMany) {
					include.include.push(findHeirarchyAssociations(associations, association));
				}
			}

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
}