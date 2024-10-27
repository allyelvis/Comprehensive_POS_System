const Pos = require('../../models/pos/PosModel');

exports.getAllPoss = async (req, res) => {
  try {
    const poss = await Pos.find();
    res.json(poss);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createPos = async (req, res) => {
  const newPos = new Pos(req.body);
  try {
    const savedPos = await newPos.save();
    res.json(savedPos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
