const Inventory = require('../../models/inventory/InventoryModel');

exports.getAllInventorys = async (req, res) => {
  try {
    const inventorys = await Inventory.find();
    res.json(inventorys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createInventory = async (req, res) => {
  const newInventory = new Inventory(req.body);
  try {
    const savedInventory = await newInventory.save();
    res.json(savedInventory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
