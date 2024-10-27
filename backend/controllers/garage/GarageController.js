const Garage = require('../../models/garage/GarageModel');

exports.getAllGarages = async (req, res) => {
  try {
    const garages = await Garage.find();
    res.json(garages);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createGarage = async (req, res) => {
  try {
    const newGarage = new Garage(req.body);
    await newGarage.save();
    res.status(201).json(newGarage);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
