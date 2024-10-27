const Accounting = require('../../models/accounting/AccountingModel');

exports.getAllAccountings = async (req, res) => {
  try {
    const accountings = await Accounting.find();
    res.json(accountings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createAccounting = async (req, res) => {
  const newAccounting = new Accounting(req.body);
  try {
    const savedAccounting = await newAccounting.save();
    res.json(savedAccounting);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
