const { Brand } = require('../model/other');

exports.createBrand = async (req, res) => {
    try {
        const brand = await Brand.create({
            name: req.body.name
        })
        return res.status(201).json({ status: "success", data: { brand } });
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.fetchBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        return res.status(200).json({
            status: "success", data: {
                brands
            }
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.deleteBrand = async (req, res) => {
    try {
        await Brand.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            status: "success", data: null
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}