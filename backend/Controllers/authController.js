import Tourist from '../models/TouristSchema.js';
import Restaurant from '../models/RestaurantSchema.js'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

const generateToken = user => {
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })
}

export const register = async(req, res) => {
    const {email, password, name, role, photo} = req.body
    try{
        let user = null
        if(role ==='tourist'){
            user = await Tourist.findOne({email})
        }
        else if(role ==='restaurant'){
            user = await Restaurant.findOne({email})
        }

        //Check if user exist
        if(user){
            return res.status(400).json({message:'User already exist'})
        }

        //Hash password
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt) 

        if(role === 'tourist'){
            user = new Tourist({
                name,
                email,
                password: hashPassword,
                photo,
                role
            }) 
        }

        if(role === 'restaurant'){
            user = new Restaurant({
                name,
                email,
                password: hashPassword,
                photo,
                role
            }) 
        }

        await user.save()

        res.status(200).json({success: true, message: 'User successfully created.'})

    } catch (err) {
        res.status(500).json({success: false, message: 'Internal server error, try again.'})

    }
}
export const login = async(req, res) => {

    const {email} = req.body

    try{
        let user = null

        const tourist = await Tourist.findOne({email})
        const restaurant = await Restaurant.findOne({email})

        if(tourist){
            user = tourist
        }
        if(restaurant){
            user = restaurant
        }

        //Check if user exist or not
        if(!user){
            return res.status(404).json({message:"User not found."})
        }

        //Compare password
        const isPasswordMatch = await bcryptjs.compare(req.body.password, user.password)

        if(!isPasswordMatch){
            return res.status(400).json({status:false, message:"Invalid credentials."})
        }

        //get toke
        const token = generateToken(user)

        const {password, role, appointments, ...rest} = user._doc;

        res
        .status(200)
        .json({
            status: true,
            message: "Successfully login",
            token,
            data: {...rest},
            role,
        })

    } catch (err) {
        res.status(500).json({status: false, message: "Failed to login."})
    }
}