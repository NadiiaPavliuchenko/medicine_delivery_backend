import express from "express";
import {
  getDrugs,
  getDrugsByPharmacy,
  updateDrugStatus,
} from "../controllers/drugsControllers.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../middlewares/validateBody.js";
import { updateStatusSchema } from "../schemas/drugsSchema.js";

const drugsRouter = express.Router();

drugsRouter.get("/", getDrugs);
drugsRouter.get("/:id", isValidId, getDrugsByPharmacy);
drugsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateStatusSchema),
  updateDrugStatus
);

export default drugsRouter;
