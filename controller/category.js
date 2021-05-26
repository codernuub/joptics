const { Category } = require('../model/other');

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create({
            name: req.body.name
        })
        return res.status(201).json({ status: "success", data: { category } });
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.fetchCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json({
            status: "success", data: {
                categories
            }
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        await Category.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            status: "success", data: null
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}
