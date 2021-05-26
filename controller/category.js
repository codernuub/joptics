const { Category } = require('../model/other');

exports.createCategory = async (req, res) => {
    try {
        const collection = await Category.create({
            name: req.body.name
        }).save();
        return res.status(201).json({ status: "success", data: { collection } });
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.fetchCategories = async (req, res) => {
    try {
        const collections = await Category.find();
        return res.status(200).json({
            status: "success", data: {
                collections
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
