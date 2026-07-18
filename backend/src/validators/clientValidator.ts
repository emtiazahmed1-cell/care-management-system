import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateClient = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').optional().isEmail().withMessage('Invalid email address'),
  body('phoneNumber').optional().isMobilePhone('any').withMessage('Invalid phone number'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const validateEmergencyContact = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('relationship').trim().notEmpty().withMessage('Relationship is required'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
