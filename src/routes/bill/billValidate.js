import { body, validationResult } from "express-validator";
export const validation = {
    billValidate: [
        body("userId").notEmpty().withMessage("userId is required"),
        body("paymentId").notEmpty().withMessage("paymentId is required"),
        body("totalPrice").notEmpty().isNumeric().withMessage("totalPrice is required"),
        
  ],
  billDetailValidate: [
    body("billId").notEmpty().withMessage("billId is required"),
    body("packId").notEmpty().withMessage("packId is required"),    
],
};
