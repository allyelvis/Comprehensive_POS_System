const App_builder = require('../../models/app_builder/App_builderModel');

exports.getAllApp_builders = async (req, res) => {
  try {
    const app_builders = await App_builder.find();
    res.json(app_builders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createApp_builder = async (req, res) => {
  const newApp_builder = new App_builder(req.body);
  try {
    const savedApp_builder = await newApp_builder.save();
    res.json(savedApp_builder);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
