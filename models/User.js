import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
    },
    rol: {
      type: Number,
      enum: [1, 2, 3],

    },
  },

  { versionKey: false }
);

const User = mongoose.model("User", userSchema);

export default User;
