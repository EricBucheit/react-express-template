var assert = require('assert');
const {db, connection} = require('./SequelizeConnection');
var Tests = require("./Tests")
let tests = Object.keys(Tests)

async function run() {
	for (let test of tests) {
		Tests[test].run(db, test);
	}
}

run()


