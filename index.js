const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/heady", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

categoryRoutes(app);
productRoutes(app);

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

app.listen(3050, () => {
  console.log("Running on port 3050");
});