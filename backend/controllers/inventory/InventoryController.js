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
  try {
    const newInventory = new Inventory(req.body);
    await newInventory.save();
    res.status(201).json(newInventory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
