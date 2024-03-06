import mongoose from "mongoose";

const drugsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  photo: String,
  pharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pharmacies",
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

export const drugs = mongoose.model("drugs", drugsSchema);
