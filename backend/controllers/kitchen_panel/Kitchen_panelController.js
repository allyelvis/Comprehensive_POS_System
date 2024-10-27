const Kitchen_panel = require('../../models/kitchen_panel/Kitchen_panelModel');

exports.getAllKitchen_panels = async (req, res) => {
  try {
    const kitchen_panels = await Kitchen_panel.find();
    res.json(kitchen_panels);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createKitchen_panel = async (req, res) => {
  try {
    const newKitchen_panel = new Kitchen_panel(req.body);
    await newKitchen_panel.save();
    res.status(201).json(newKitchen_panel);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
