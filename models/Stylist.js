import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise;

const stylistSchema = new Schema({
    name: String,
    quote: String,
    bio: String,
    services: [String],
    paymentMethods: [String],
    icons: [String]
})

const Stylist = mongoose.models.Stylist || mongoose.model("Stylist", stylistSchema);
export default Stylist;