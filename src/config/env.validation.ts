import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3000),

  APP_NAME: Joi.string().required(),

  APP_URL: Joi.string().required(),

  DATABASE_URL: Joi.string().required(),

  JWT_SECRET: Joi.string().min(32).required(),

  JWT_EXPIRES_IN: Joi.string().required(),

  LOG_LEVEL: Joi.string().default('debug'),
});
