
	const table = {
		name: "categories",
	}
	module.exports = (sequelize, type) => {
	  const Categories = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			name: type.STRING,
	  	
	  });
	  return Categories ;
	};
	