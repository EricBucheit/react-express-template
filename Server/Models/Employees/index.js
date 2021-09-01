
	const table = {
		name: "employees",
	}
	module.exports = (sequelize, type) => {
	  const Employees = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			first_name: type.STRING,
			last_name: type.STRING,
			email: type.STRING,
			password: type.STRING,
	  	
	  });
	  return Employees ;
	};
	