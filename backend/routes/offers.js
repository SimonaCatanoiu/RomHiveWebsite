import express from 'express'
import {createOffer,deleteOffer,getAllOffer,getFeaturedOffer,getOfferBySearch,getOfferCount,getSingleOffer,updateOffer} from '../controllers/offerController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

//create new offer
router.post('/',verifyAdmin,createOffer)
//update new offer
router.put('/:id',verifyAdmin,updateOffer)
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