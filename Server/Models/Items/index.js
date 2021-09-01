
	const table = {
		name: "items",
	}
	module.exports = (sequelize, type) => {
	  const Items = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			name: type.STRING,
			price: type.DOUBLE,
			description: type.STRING,
			quantity: type.INTEGER,
	  	
	  });
	  return Items ;
	};
	