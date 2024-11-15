import Joi from "joi";

export const createSchemaTask = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean(),
});

export const updateSchemaTask = Joi.object({
  completed: Joi.boolean(),
});

export const editSchemaTask = Joi.object({
  title: Joi.string().required(),
});
