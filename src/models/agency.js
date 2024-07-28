import mongoose from "mongoose";
const agencySchema = mongoose.Schema({
  agencyName: { type: String, reqired: true },
  services: { type: Array, required: true },
  agencyDescription: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  phoneNumber: { type: String, reqired: true },
  uid: { type: String, reqired: true },

  image: { type: String },
});
export default mongoose.model("Agency", agencySchema);
