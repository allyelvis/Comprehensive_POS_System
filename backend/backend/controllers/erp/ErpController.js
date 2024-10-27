const Erp = require('../../models/erp/ErpModel');

exports.getAllErps = async (req, res) => {
  try {
    const erps = await Erp.find();
    res.json(erps);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createErp = async (req, res) => {
  const newErp = new Erp(req.body);
  try {
    const savedErp = await newErp.save();
    res.json(savedErp);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
