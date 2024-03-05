import mongoose from "mongoose";

const drugsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  date_added: {
    type: Date,
    default: Date.now,
  },
  photo: String,
  pharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pharmacies",
  },
});

export const drugs = mongoose.model("drugs", drugsSchema);
