import { body, validationResult } from "express-validator";
export const  validation ={
    userValidate :[
        body('firstName').notEmpty().withMessage('firstName is required'),
        body('lastName').notEmpty().withMessage('lastName is required'),
        body('address').notEmpty().withMessage('address is required'),
    ],
}