import mongoose from "mongoose";
import Restaurant from "./RestaurantSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurant",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Tourist",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function(next){
  this.populate({
    path: 'user',
    select: "name photo",
  })

  next();
})

reviewSchema.static.calcAverageRatings = async function(restaurantId){
  //this points the current review
  const stats = await this.aggregate([{
    $match:{restaurant:restaurantId}
  },
  {$group:{
    _id:'$restaurant',
    numOfRating:{$sum:1},
    avgRating:{$avg:'$rating'}
  }
}
])
  await Restaurant.findByIdAndUpdate(restaurantId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  })
};

reviewSchema.post("save", function() {
  this.constructor.calcAverageRatings(this.restaurant);
});

export default mongoose.model("Review", reviewSchema);
