
	const table = {
		name: "packages",
	}
	module.exports = (sequelize, type) => {
	  const Packages = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			name: type.STRING,
			price: type.DOUBLE,
			description: type.STRING,
			quantity: type.INTEGER,
	  	
	  });
	  return Packages ;
	};
	