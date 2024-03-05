import express from "express";
import { getPharmacies } from "../controllers/pharmControllers.js";

const pharmRouter = express.Router();

pharmRouter.get("/", getPharmacies);

export default pharmRouter;
