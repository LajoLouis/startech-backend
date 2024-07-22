const Product = require("../models/product");
const {validateProduct} = require("../validator");

exports.createProduct = async(req,res) =>{
    try {
        const {error} = validateProduct(req.body);
        if (error) {
            return res.json(error.details[0].message);
        }
        const product  = new Product({
            category: req.body.category,
            name: req.body.name,
            price: req.body.price,
            img: req.file.path,
            featured: req.body.featured,
            topSelling: req.body.topSelling,
        })
        const productItem = await product.save()
        res.json(productItem)
    } catch (error) {
        res.json({message: error.message})
    }
    
}
exports.getProduct = async (req, res) =>{
    try {
        let allProduct = await Product.find().populate("category")
        res.json(allProduct)
    } catch (error) {
        res.json("could not get products because", error)
    }
}