const Category = require('../models/Category');

module.exports = {
	addCategory(req, res, next){
		const {body} = req;
		Category.create(body)
			.then(newCategory => {
				res.send(newCategory);
			})
			.catch(next);
	},
	getCategories(req, res, next){
		Category.find({})
			.then(allCategories => {
				res.send(allCategories);
			})
			.catch(next);
	}
};
