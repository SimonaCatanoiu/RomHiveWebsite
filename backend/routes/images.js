import express from 'express'
import {getSingleImage} from '../controllers/imageController.js';

const router = express.Router()

//get single image
router.get('/img/:filename',getSingleImage)

//get multiple images
//router.get('/',verifyAdmin,getImages); 
export default router;