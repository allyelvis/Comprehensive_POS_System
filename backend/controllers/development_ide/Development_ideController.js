const Development_ide = require('../../models/development_ide/Development_ideModel');

exports.getAllDevelopment_ides = async (req, res) => {
  try {
    const development_ides = await Development_ide.find();
    res.json(development_ides);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createDevelopment_ide = async (req, res) => {
  try {
    const newDevelopment_ide = new Development_ide(req.body);
    await newDevelopment_ide.save();
    res.status(201).json(newDevelopment_ide);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
