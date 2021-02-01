const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    items: [
      {
        product_id: { type: mongoose.Types.ObjectId, required: true },
        unit_price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    status: { type: String, required: true, trim: true },
    placement_date: { type: Date, required: true },
    delivery_date: { type: Date },
    promo_code: { applied: Boolean, amount: Number }, // Amount will be %
    total_amount: { type: Number, required: true },
    comments: { type: String, trim: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Order", orderSchema);
