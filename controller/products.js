const Product = require('../model/product');

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create({
            name: req.body.price,
            collection: req.body.collection,
            brand: req.body.brand,
            price: req.body.price,
            details: req.body.details
        }).save();
        return res.status(201).json({ status: "success", data: { product } });
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.fetchProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            status: "success", data: {
                products
            }
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.uploadProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({
            status: "success", data: { product }
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            status: "success", data: null
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.uploadCoverImage = async (req, res) => {

}

exports.uploadAdditionalImages = async (req, res) => {

}

exports.deleteCoverImage = async (req, res) => {

}

exports.deleteAdditionalImages = async (req, res) => {

}