const Retail = require('../../models/retail/RetailModel');

exports.getAllRetails = async (req, res) => {
  try {
    const retails = await Retail.find();
    res.json(retails);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createRetail = async (req, res) => {
  try {
    const newRetail = new Retail(req.body);
    await newRetail.save();
    res.status(201).json(newRetail);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
