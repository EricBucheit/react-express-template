
	const table = {
		name: "users",
	}
	module.exports = (sequelize, type) => {
	  const Users = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			email: type.STRING,
			password: type.STRING,
			first_name: type.STRING,
			last_name: type.STRING,
			role: type.STRING,
	  	
	  });
	  return Users ;
	};
	