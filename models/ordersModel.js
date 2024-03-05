import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: /(\d{10}|\(\d{3}\) \d{3}-\d{4})/,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "drugs",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { versionKey: false }
);

export const orders = mongoose.model("orders", ordersSchema);
