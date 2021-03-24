import { body, validationResult } from "express-validator";
export const validation = {
  packTokenValidate: [
    body("userId").notEmpty().withMessage("userId is required"),
  ],
};
