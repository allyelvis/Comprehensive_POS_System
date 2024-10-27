const Report_generator = require('../../models/report_generator/Report_generatorModel');

exports.getAllReport_generators = async (req, res) => {
  try {
    const report_generators = await Report_generator.find();
    res.json(report_generators);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createReport_generator = async (req, res) => {
  try {
    const newReport_generator = new Report_generator(req.body);
    await newReport_generator.save();
    res.status(201).json(newReport_generator);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
