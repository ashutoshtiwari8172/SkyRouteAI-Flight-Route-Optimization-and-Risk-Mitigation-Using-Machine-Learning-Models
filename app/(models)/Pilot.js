import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const PilotSchema = new Schema(
  {
    name: String,
    PilotId: String,
    email: String,
    password: String,
    airline: String,
    role: String, 
  },
  {
    timestamps: true,
  }
);

const Pilot = mongoose.models.Pilot || mongoose.model("Pilot", PilotSchema);

export default Pilot;
