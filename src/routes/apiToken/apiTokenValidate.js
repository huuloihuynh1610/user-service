import { body, validationResult } from "express-validator";
export const validation = {
  apiTokenValidate: [
    body("userId").notEmpty().withMessage("userId is required"),
  ],
};
