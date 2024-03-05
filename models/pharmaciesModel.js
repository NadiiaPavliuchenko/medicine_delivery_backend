import mongoose from "mongoose";

const pharmSchema = new mongoose.Schema({
  name: String,
});

export const pharmacy = mongoose.model("pharmacy", pharmSchema);
