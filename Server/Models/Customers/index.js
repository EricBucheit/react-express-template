
	const table = {
		name: "customers",
	}
	module.exports = (sequelize, type) => {
	  const Customers = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			first_name: type.STRING,
			last_name: type.STRING,
			phone_number: type.STRING,
			address: type.STRING,
			city: type.STRING,
			notes: type.STRING,
	  	
	  });
	  return Customers ;
	};
	