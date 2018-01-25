const routes = require('express').Router();
const sortString = require('../util/sortString');

routes.post('/strings', (req, res) => {
  const strings = sortString(req.body.string);
  res.status(201).json(strings);
});

module.exports = routes;
