let seeds = {}

require('fs').readdirSync(__dirname).forEach(function(file) {
   	if (!file.match('.js')) {
   		seeds[file] = require('./' + file);
   	}
});

module.exports = seeds