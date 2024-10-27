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
  try {
    const newAccounting = new Accounting(req.body);
    await newAccounting.save();
    res.status(201).json(newAccounting);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
