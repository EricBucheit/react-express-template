
const table = {
	name: "test",
}
module.exports = (sequelize, type) => {
  const Test = sequelize.define(table.name, {
  	//example
  	//title: type.STRING,
  });
  return Test ;
};
	