const Car_dealer = require('../../models/car_dealer/Car_dealerModel');

exports.getAllCar_dealers = async (req, res) => {
  try {
    const car_dealers = await Car_dealer.find();
    res.json(car_dealers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createCar_dealer = async (req, res) => {
  try {
    const newCar_dealer = new Car_dealer(req.body);
    await newCar_dealer.save();
    res.status(201).json(newCar_dealer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
