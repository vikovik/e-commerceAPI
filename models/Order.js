const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    products: [
      {
        productId: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
