const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    products: [
      {
        productId: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
