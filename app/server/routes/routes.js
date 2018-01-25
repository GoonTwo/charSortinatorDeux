const routes = require('express').Router();
const { addToObject } = require('../util/helpers');

routes.post('/strings', (req, res) => {
  const strings = addToObject(req.body.string);
  res.status(201).json(strings);
});

module.exports = routes;
