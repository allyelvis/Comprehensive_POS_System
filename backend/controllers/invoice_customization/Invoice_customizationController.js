const Invoice_customization = require('../../models/invoice_customization/Invoice_customizationModel');

exports.getAllInvoice_customizations = async (req, res) => {
  try {
    const invoice_customizations = await Invoice_customization.find();
    res.json(invoice_customizations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createInvoice_customization = async (req, res) => {
  try {
    const newInvoice_customization = new Invoice_customization(req.body);
    await newInvoice_customization.save();
    res.status(201).json(newInvoice_customization);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
