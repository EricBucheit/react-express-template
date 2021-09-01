
	const table = {
		name: "expenses",
	}
	module.exports = (sequelize, type) => {
	  const Expenses = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
			date: type.DATEONLY,
			gas: type.DOUBLE,
			employees: type.DOUBLE,
			misc: type.DOUBLE,
	  	
	  });
	  return Expenses ;
	};
	