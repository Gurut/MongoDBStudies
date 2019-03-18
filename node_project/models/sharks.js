const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shark = new Schem ({
	name: { type: String, requreid: true },
	character: { type: String, required: true },
});

module.exports = mongoose.model('Shark', Shark)
