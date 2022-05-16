const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 32,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      maxLength: 32,
      trim: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subcategory: [
      {
        type: ObjectId,
        ref: "SubCategory",
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    color: {
      type: String,
      enum: ["Black", "Brown", "Silver", "white", "Blue", "Red", "Green"],
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Microsoft", "Asus", "Lenevo"],
    },
    // rating: [
    //   {
    //     star: Number,
    //     postedBy: { type: ObjectId, ref: "User" },
    //   },
    // ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
