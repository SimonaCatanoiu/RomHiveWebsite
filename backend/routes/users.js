import express from 'express'
import {deleteUser, getAllUser, getSingleUser, updateUser,getPicturePathUser,addUserLog} from '../controllers/userController.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

//update user
router.post('/updateUser/:id',verifyUser,updateUser)
//delete user
router.delete('/:id',verifyAdmin,deleteUser)
//get single user
router.get('/getuser/:id',verifyUser,getSingleUser)
//get user profile picture path
router.get('/getuserPicture/:id',getPicturePathUser)
//get all users
router.get('/',verifyAdmin,getAllUser); 
//add user login log
router.post('/addLog',addUserLog);

export default router;