
	const table = {
		name: "package_items",
	}
	module.exports = (sequelize, type) => {
	  const PackageItems = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
	  	
	  });
	  return PackageItems ;
	};
	