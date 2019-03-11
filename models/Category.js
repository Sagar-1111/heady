const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childCategorySchema = new Schema({
	"name":{
		"type": String
	}
});

const subCategorySchema = new Schema({
	"name":{
		"type": String
	},
	"sub_category": [childCategorySchema]
});

const categorySchema = new Schema({
	"name": {
		"type": String
	},
	"price":{
		"type": String
	},
	"sub_category": [subCategorySchema]
});



const category = mongoose.model("category", categorySchema);
module.exports = category;