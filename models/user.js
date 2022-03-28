import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "Subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    //   wishlist: [
    //     {
    //       type: ObjectId,
    //       ref: "Product",
    //     },
    //   ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
