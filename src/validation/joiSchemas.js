import Joi from "joi";

export const onboarding = {
  userName: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
};

export const registration = {
  firstName: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
};
