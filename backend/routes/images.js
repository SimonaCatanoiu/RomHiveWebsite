import express from 'express'
import {getSingleImage,getSingleImageAdmin} from '../controllers/imageController.js';

const router = express.Router()

//get single image
router.get('/img/:filename',getSingleImage)
//get single image from admin upload
router.get('/imgAdm/:filename',getSingleImageAdmin)

//get multiple images
//router.get('/',verifyAdmin,getImages); 
export default router;
