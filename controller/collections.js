const { Collection } = require('../model/other');

exports.createCollection = async (req, res) => {
    try {
        const collection = await Collection.create({
            name: req.body.name
        }).save();
        return res.status(201).json({ status: "success", data: { collection } });
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.fetchCollections = async (req, res) => {
    try {
        const collections = await Collection.find();
        return res.status(200).json({
            status: "success", data: {
                collections
            }
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}

exports.deleteCollection = async (req, res) => {
    try {
        await Collection.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            status: "success", data: null
        })
    } catch (err) {
        return res.status(400).json({ status: "fail", message: err.message });
    }
}
