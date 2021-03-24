import { body, validationResult } from "express-validator";
export const  validation ={
    masterDataValidate :[
        body('content').notEmpty().withMessage('content is required'),
        body('type').notEmpty().withMessage('type is required'),
    ],
}