const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		return res.render('index',{
			productsVisited :products.filter(products => products.caterogy ===
				"visited"),
				products,
				toThousand
		})
	},
	search: (req, res) => {
		// 
		const {keywords} = req.query
		return res.render('result',{
			products:products.filter(products => products.name.toLowerCase().include(keywords.toLowerCase())),
			keywords,
			toThosand 
				
		})
	},
};

module.exports = controller;
