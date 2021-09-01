
	const table = {
		name: "order_items",
	}
	module.exports = (sequelize, type) => {
	  const OrderItems = sequelize.define(table.name, {
			//example
		  	//title: type.STRING,
	  	
	  });
	  return OrderItems ;
	};
	