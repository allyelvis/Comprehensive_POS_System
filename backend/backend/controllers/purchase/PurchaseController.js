const Purchase = require('../../models/purchase/PurchaseModel');

exports.getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.json(purchases);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createPurchase = async (req, res) => {
  const newPurchase = new Purchase(req.body);
  try {
    const savedPurchase = await newPurchase.save();
    res.json(savedPurchase);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
