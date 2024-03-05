import express from "express";
import {
  getDrugs,
  getDrugsByPharmacy,
} from "../controllers/drugsControllers.js";
import isValidId from "../middlewares/isValidId.js";

const drugsRouter = express.Router();

drugsRouter.get("/", getDrugs);
drugsRouter.get("/:id", isValidId, getDrugsByPharmacy);

export default drugsRouter;
