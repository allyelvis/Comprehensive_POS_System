const Invoice = require('../../models/invoice/InvoiceModel');

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createInvoice = async (req, res) => {
  const newInvoice = new Invoice(req.body);
  try {
    const savedInvoice = await newInvoice.save();
    res.json(savedInvoice);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
