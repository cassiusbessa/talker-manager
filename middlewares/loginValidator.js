// const express = require('express');
const loginSchema = require('../schemas/loginSchema');

const loginValidator = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

module.exports = loginValidator;