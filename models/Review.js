import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise;

const reviewSchema = new Schema({
    name: String,
    review: String
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;