const Product = require('../models/Product');

module.exports = {
	addProduct(req, res, next){
		const {body} = req;
		Product.create(body)
			.then(user => {
				res.send(user);
			})
			.catch(next);
	},
	getProducts(req, res, next){
		Product.find({})
			.populate("category")
			.then(allProducts => {
				res.send(allProducts);
			})
			.catch(next);
	},
	getProductsByCategory(req, res, next){
		const {categoryId} = req.body;
		Product.find({ "category": { $in: [categoryId] } })
			.populate("category")
			.then(allProducts => {
				res.send(allProducts);
			})
			.catch(next);
	}
};
