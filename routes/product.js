const productController = require("../controllers/product");

module.exports  = (app) => {
	app.post("/api/product", productController.addProduct);
	app.get("/api/products", productController.getProducts);
	app.post("/api/products", productController.getProductsByCategory);
};