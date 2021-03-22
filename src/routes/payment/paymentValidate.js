import { body, validationResult } from "express-validator";
export const validation = {
  paymentValidation: [
    body("name").notEmpty().withMessage("nae is required"),
    body("type").notEmpty().withMessage("type is required"),
  ],
};
