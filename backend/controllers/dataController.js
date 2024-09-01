const Data = require('../models/dataModel');

// Get all data
exports.getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        // console.log(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new data
exports.createData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        // console.log(newData);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
