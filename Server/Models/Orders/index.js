
	const table = {
		name: "orders",
	}
	module.exports = (sequelize, type) => {
	  const Orders = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			first_name: type.STRING,
			last_name: type.STRING,
			address: type.STRING,
			city: type.STRING,
			phone_number: type.STRING,
			email: type.STRING,
			date: type.DATEONLY,
			time: type.TIME,
			canceled: type.BOOLEAN,
	  	
	  });
	  return Orders ;
	};
	