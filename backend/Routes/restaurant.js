import express from "express";
import {updateRestaurant, deleteRestaurant, getAllRestaurant, getSingleRestaurant, getRestaurantProfile} from '../Controllers/restaurantController.js';
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

//Nested route
router.use("/:restaurantId/reviews", reviewRouter);

router.get('/:id', getSingleRestaurant)
router.get('/', getAllRestaurant)
router.put('/:id', authenticate, restrict(["restaurant"]), updateRestaurant)
router.delete('/:id', authenticate, restrict(["restaurant"]), deleteRestaurant)

router.get('/profile/me', authenticate, restrict(["restaurant"]), getRestaurantProfile)

export default router;