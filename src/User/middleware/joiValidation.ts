import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().trim(),
  email: Joi.string().email().lowercase().required().trim(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required().trim(),
  password: Joi.string().min(6).required()
});

const validate = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error: any) {
      const errors = error.details.map((detail: Joi.ValidationErrorItem) => ({
        field: detail.path[0],
        message: detail.message
      }));
      res.status(400).json({
        success: false,
        errors
      });
    }
  };
};

export const validateRegister = validate(registerSchema);
export const validateLogin = validate(loginSchema);