import User from '../models/User.js'

//create new User
export const createUser = async (req,res) =>
{
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save()

        res.status(200).json({success:true,message:'Successfully created user', data:savedUser})
    }catch(err)
    {
        res.status(500).json({success:false,message:'Failed to create user. Try again'})
    }
}

//update User
export const updateUser = async(req,res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id,
            {
                $set: req.body
            }, {new:true})
        
            res.status(200).json({success:true,message:'Successfully updated offer', data:updatedUser})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Failed to update offer. Try again', data:updatedUser})
    }
}

//delete User
export const deleteUser = async(req,res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Successfully deleted'})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Failed to delete offer. Try again'})
    }
}

//getSingle User
export const getSingleUser = async(req,res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        res.status(200).json({success:true,message:'Item found',data:user})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Not found'})
    }
}

//getAll Users
export const getAllUser = async(req,res) => {

    try {
        const users = await User.find({})
        res.status(200).json({success:true,message:'Succesfully pulled',data:users})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Coudnt pull'})
    }
}