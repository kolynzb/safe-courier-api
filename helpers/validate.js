const joi = require("joi");

const signUpCheck = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).max(25).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const signInCheck = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const updateCheck = (data) => {
  const schema = joi.object({
    name: joi.string().min(6),
    email: joi.string().email(),
    password: joi.string().min(6),
  });
  return schema.validate(data);
};

module.exports = { signUpCheck, signInCheck, updateCheck };
