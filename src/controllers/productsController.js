const { log } = require("console");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

function leerJson() {
  const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  return products
}

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
    const products = leerJson();
    return res.render("products", {
      products,
      toThousand,
    });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    const products = leerJson();
    const product = products.find((product) => product.id === +req.params.id);
    return res.render("detail", {
      ...product,
      toThousand,
    });
  },

  // Create - Form to create
  create: (req, res) => {
    // Do the magic
    return res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    // Do the magic
    const products = leerJson();
    const lastID = products[products.lengt - 1].id;
    const { name, price, discount, desciption, category } = req.body;
    const newProduct = {
      id: lastID + 1,
      name: name.trim(),
      price: +price,
      discount: +discount,
      category: category,
      desciption: desciption.trim(),
      Image: "default-image.png",
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");

    return res.redirect("/products/detail/" + newProduct.id);
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Do the magic
  const products = leerJson();
	const product = products.find((product) => product.id === +req.params.id);
    return res.render("product-edit-form", {
      ...product,
    });
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
    const products = leerJson();
    const { name, price, discount, description, category } = req.body;
    const productsUpdated =products.map(product =>{
		if(product.id === +req.params.id){
		
      product.name = name.trim()
      product.price = +price
      product.discount = +discount
      product.category = category
      product.description = description.trim()
	}
	return product
})
	
	fs.writeFileSync(productsFilePath, JSON.stringify(productsUpdated), "utf-8");
	return res.redirect("/products/detail/" + req.params.id);
},
  

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const {id} = req.params
    const products = leerJson();
    const newproducts = products.filter(product => product.id != id);
    const json = JSON.stringify(newproducts)
    fs.writeFileSync(productsFilePath,json, "utf-8");
    res.redirect("/products");
  },
};

module.exports = controller;
