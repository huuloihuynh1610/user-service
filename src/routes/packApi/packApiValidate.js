import { body, validationResult } from "express-validator";
export const validation = {
  packApiValidate: [
    body("packId").notEmpty().withMessage("packId is required"),
    body("apiId").notEmpty().withMessage("apiId is required"),
  ],
};
