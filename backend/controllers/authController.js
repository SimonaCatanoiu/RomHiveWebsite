import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//user registration
export const register = async(req,res) => 
{
    //hashing the password 
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password,salt)
    try{
        const randomNum = Math.floor(Math.random() * 100) + 1;
        const newUser = new User(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password: hash,
                username: `${req.body.firstname}.${req.body.lastname}${randomNum}`
            }
        )

        await newUser.save()

        res.status(200).json({success:true,message:"Succefully created"})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:"The email is already in use. Try again"})
    };
}

//user login
export const login = async(req,res) => 
{
    const email = req.body.email
    try{
        const user = await User.findOne({email})
        if(!user)
        {
            return res.status(404).json({success:false,message:'User not found'})
        }

        //then check the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password)
        
        if(!checkCorrectPassword)
        {
            return res.status(401).json({
                success:false,message:'Incorrect email or password'
            })
        }

        const {password,role,...rest}= user._doc

        //create jwt token
        const token = jwt.sign(
            {
                id:user._id,
                role:user.role
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "15d"
            }
        )

        // set token in the browser cookies and send the response
        // to the client 
        res.cookie('accessToken',token,
        {
            httpOnly: true,
            expires:token.expiresIn
        }).status(200).json({
            token,
            data:{...rest},
            role
        })
    }
    catch(err)
    {
        res.status(500).json({
            success:false,message:'Failed to login'
        })
    };
}

//user change password
export const changePassword = async(req,res) => 
{
    //hashing the password 
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password,salt)
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email});
        
        if (!user) {
            return res.status(404).json({ success: false, message: "Email not found in database!" });
          }

        user.password=hash;

        await user.save();

        res.status(200).json({success:true,message:"Succefully updated password"}) 
    }
    catch(err)
    {
        res.status(500).json({success:false,message:"Internal Server Error"})
    };
}