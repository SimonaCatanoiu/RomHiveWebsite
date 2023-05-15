import express from 'express'
import {createOffer,deleteOffer,getAllOffer,getAllOfferDetails,deleteReview,getFeaturedOffer,getOfferBySearch,getOfferCount,getSingleOffer,updateOffer} from '../controllers/offerController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

//get offers for admin
router.get('/adminOffers',getAllOfferDetails);
//delete review from offer
router.post('/adminDeleteReview',verifyAdmin,deleteReview)
//create new offer
router.post('/',verifyAdmin,createOffer)
//update new offer
router.post('/updateOffer/:id',verifyAdmin,updateOffer)
//delete offer
router.delete('/:id',verifyAdmin,deleteOffer)
//get single offer
router.get('/:id',getSingleOffer)
//get all offers
router.get('/',getAllOffer);
//get searched offer
router.get('/search/getOfferBySearch',getOfferBySearch);
//get featured offers
router.get('/search/getFeaturedOffers',getFeaturedOffer);
//get offer count
router.get("/search/getOfferCount",getOfferCount);
export default router;