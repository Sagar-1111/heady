const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
	"name": {
		"type": String
	},
	"price":{
		"type": String
	},
	"category":{
		"type":[{type:mongoose.Schema.Types.ObjectId, ref: 'category'}]
	}
})
const product = mongoose.model("product", productSchema);
module.exports = product;