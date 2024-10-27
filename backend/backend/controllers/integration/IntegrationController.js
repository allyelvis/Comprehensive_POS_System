const Integration = require('../../models/integration/IntegrationModel');

exports.getAllIntegrations = async (req, res) => {
  try {
    const integrations = await Integration.find();
    res.json(integrations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createIntegration = async (req, res) => {
  const newIntegration = new Integration(req.body);
  try {
    const savedIntegration = await newIntegration.save();
    res.json(savedIntegration);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
