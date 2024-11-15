import Joi from "joi";

export const createSchemaUser = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("admin", "user").required(),
});

export const loginSchemaUser = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const updateSchemaUser = Joi.object({
  username: Joi.string().required()
})