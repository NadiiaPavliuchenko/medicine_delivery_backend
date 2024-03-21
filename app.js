import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
import YAML from "yamljs";
import SwaggerUI from "swagger-ui-express";
import "./db.js";
import pharmRouter from "./routes/pharmaciesRouter.js";
import drugsRouter from "./routes/drugsRouter.js";
import ordersRouter from "./routes/ordersRouter.js";

const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/pharmacies", pharmRouter);
app.use("/api/drugs", drugsRouter);
app.use("/api/orders", ordersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(8080, () => {
  console.log("App listening on port 8080!");
});
