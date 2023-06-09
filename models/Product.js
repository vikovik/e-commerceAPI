const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String },
    img: { type: String, required: false },
    price: { type: Number },
    lifad: { type: Number },
    desc: { type: String, required: false },
    categoryId: { type: Number },
    preorder: { type: Boolean },
    stock: { type: Boolean, default: true },
    size: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
