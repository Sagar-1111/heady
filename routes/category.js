const categoryController = require("../controllers/category");

module.exports  = (app) => {
	app.post("/api/category", categoryController.addCategory);
	app.get("/api/categories", categoryController.getCategories);
};