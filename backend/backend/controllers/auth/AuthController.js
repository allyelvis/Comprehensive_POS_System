const Auth = require('../../models/auth/AuthModel');

exports.getAllAuths = async (req, res) => {
  try {
    const auths = await Auth.find();
    res.json(auths);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createAuth = async (req, res) => {
  const newAuth = new Auth(req.body);
  try {
    const savedAuth = await newAuth.save();
    res.json(savedAuth);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
