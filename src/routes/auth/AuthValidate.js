import { body, validationResult } from "express-validator";
export const  validation ={
    registerValidation :[
        body('email').notEmpty().isEmail().withMessage('email is required'),
        body('password').isLength({ min: 5, max:25 }).withMessage('must be at least 5 chars long'),
        body('firstName').notEmpty().withMessage('firstName is required'),
        body('lastName').notEmpty().withMessage('lastName is required'),
        body('address').notEmpty().withMessage('address is required'),
    ],
    loginValidation :[
        body("email").notEmpty().isEmail().withMessage("email is required"),
        body("password")
          .isLength({ min: 5, max: 25 })
          .withMessage("must be at least 5 chars long"),
    ]
}