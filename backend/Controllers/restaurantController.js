import Booking from "../models/BookingSchema.js"
import Restaurant from "../models/RestaurantSchema.js"

export const updateRestaurant = async(req, res) => {
    const id = req.params.id

    try{
        const updateRestaurant = await Restaurant.findByIdAndUpdate(id, {$set:req.body}, {new:true})

        res.status(200).json({success:true, message:'Successfully updated', data:updateRestaurant})

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to update'})
    }
}

export const deleteRestaurant = async(req, res) => {
    const id = req.params.id

    try{
        await Restaurant.findByIdAndDelete(id)

        res.status(200).json({success:true, message:'Successfully deleted'})

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to delete'})
    }
}

export const getSingleRestaurant = async(req, res) => {
    const id = req.params.id

    try{
        const restaurant = await restaurant.findById(id).populate("reviews").select("-password");                                                                          

        res.status(200).json({success:true, message:'Restaurant found', data: restaurant,})

    } catch(err) {
        res.status(404).json({success:false, message:'No Restaurant found'})
    }
}

export const getAllRestaurant = async(req, res) => {

    const {query} = req.query
    let restaurants;

    if(query){
        restaurants = await Restaurant.find({isApproved:'approved',
            $or: [
                {name: {$regex: query, $options: 'i'}},
                {specialization: {$regex: query, $options: 'i'}},
            ],
        }).select("-password");
    } else {
        restaurants = await Restaurant.find({}).select("-password");
    }

    try{

        res.status(200).json({success:true, message:'Restaurants found', data: restaurants,})

    } catch(err) {
        res.status(404).json({success:false, message:'Not found'})
    }
}

export const getRestaurantProfile = async(req, res) => {
    const restaurantId = req.userId

    try {
        const restaurant = await Restaurant.findById(restaurantId)

        if(!restaurant){
            return res.status(404).json({success:false, message:'Oops, restaurant not found'})
        }

        const {password, ...rest} = restaurant._doc;
        const appointments = await Booking.find({restaurant:restaurantId})
        
        res.status(200).json({success:true, message:'Profile into is getting', data:{...rest, appointments}})

    } catch (err) {
        res
        .status(500)
        .json({success: false, message: 'Something went wrong, cannot get'});
    }
}