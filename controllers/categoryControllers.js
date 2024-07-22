const Category = require("../models/category");
const {validateCategory} = require("../validator");

exports.createCategory = async(req,res) =>{
    try {
        const {error} = validateCategory(req.body);
        if (error) {
            return res.json(error.details[0].message);
        }
        const category  = new Category({
            name: req.body.name,
            description: req.body.description
        })
        const newCategory = await category.save()
        res.json(newCategory)
    } catch (error) {
        res.json({message: error.message})
    }
    
}

exports.getCategory = async (req, res) =>{
    try {
        let allCategory = await Category.find()
        res.json(allCategory)
    } catch (error) {
        res.json("could not get category because", error)
    }
}