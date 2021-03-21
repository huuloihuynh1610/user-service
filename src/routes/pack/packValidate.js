import { body, validationResult } from "express-validator";
export const validation = {
  packValidation: [
    body("name").notEmpty().withMessage("nae is required"),
    body("price")
      .notEmpty()
      .withMessage("price is required")
      .isNumeric()
      .withMessage("price is number"),
    body("type").notEmpty().withMessage("type is required"),
    body("amount").notEmpty().withMessage("amount is required"),
  ],
};
