import User from '../models/User.js'
import UserLogs from '../models/UserLogs.js'
import multer from 'multer';
import bcrypt from "bcryptjs"
import crypto from "crypto";
import multiparty from 'multiparty'
import fs from 'fs'

// Configure multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

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

    let form = new multiparty.Form();
    const { fields, files }  = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            return reject(err);
          }
          resolve({ fields, files });
        });
      });
    
    const {username,email,firstname,lastname,phone,birthdate,password,new_password} = fields;
    const passwordString = password.toString();
    const new_passwordString = new_password.toString();
    const usernameString = username.toString();
    const emailString = email.toString(); 
    const phoneString = phone.toString();
    const firstnameString = firstname.toString(); 
    const birthdateString = birthdate.toString();
    const lastnameString = lastname.toString();
    try {
      let user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      //check if password matches
      if (password && new_password && passwordString !== new_passwordString) {
        return res.status(400).json({ message: 'Password dont match. Password not updated'});
      }

      if (password&& new_password && passwordString == passwordString) {
        console.log(passwordString);
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(passwordString,salt)
        user.password = hash;
      }

      if (username) {
        user.username = usernameString;
      }

      if (email) {
        user.email = emailString;
      }
      if (firstname) {
        user.firstname = firstnameString;
      }
      if (lastname) {
        user.lastname = lastnameString;
      }
      if (phone) {
        user.phone = phoneString;
      }
      
      if (birthdate) {
        user.date_of_birth = birthdateString;
      }
      if (files.hasOwnProperty('profilePicture') && files.profilePicture.length > 0) {
      const file = files.profilePicture[0];
      const fileName = Date.now() + '-' + file.originalFilename;
      const path = file.path;
      const targetPath = 'uploads/' + fileName;
      // Move file to target path
      const data = await fs.promises.readFile(path);
      await fs.promises.writeFile(targetPath, data);
      await fs.promises.unlink(path);
      user.photo = targetPath;
      }
      await user.save();
      res.status(200).json({ message: 'User updated successfully', user});
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({ message: 'Internal server error' });
    }

}



//update User from Admin
export const updateUser2 = async(req,res) => {
  const id = req.params.id

  let form = new multiparty.Form();
  const { fields }  = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields) => {
        if (err) {
          return reject(err);
        }
        resolve({fields});
      });
    });
  
  const {username,email,firstname,lastname,phone,password,new_password} = fields;
  const passwordString = password.toString();
  const new_passwordString = new_password.toString();
  const usernameString = username.toString();
  const emailString = email.toString(); 
  const phoneString = phone.toString();
  const firstnameString = firstname.toString(); 
  const lastnameString = lastname.toString();
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    //check if password matches
    if (password && new_password && passwordString !== new_passwordString) {
      return res.status(200).json({ success:false,message: 'Password dont match. Password not updated'});
    }

    if (password&& new_password && passwordString == passwordString) {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(passwordString,salt)
      user.password = hash;
    }

    if (username) {
      user.username = usernameString;
    }

    if (email) {
      user.email = emailString;
    }
    if (firstname) {
      user.firstname = firstnameString;
    }
    if (lastname) {
      user.lastname = lastnameString;
    }
    if (phone) {
      user.phone = phoneString;
    }
    
    await user.save();
    res.status(200).json({ message: 'User updated successfully', user});
  }
  catch(err)
  {
      console.log(err)
      res.status(500).json({ message: 'Internal server error' });
  }

}



//delete User
export const deleteUser = async(req,res) => {
    const id = req.params.id
    try {
        const found_user = await User.findById(id);
        found_user.role = "disabled"
        found_user.password = crypto.randomBytes(128).toString('hex');
        await found_user.save()
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
        const user = await User.findById(id).select("-password"); 
        res.status(200).json({success:true,message:'Item found',data:user})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Not found'})
    }
}
//getPicturePath
export const getPicturePathUser = async(req,res) => {
  const id = req.params.id
  try {
      const path = await User.findById(id).select("photo"); 
      if(path.photo)
        res.status(200).json({success:true,message:'Item found',data:path})
      else
        res.status(200).json({success:false,message:'Image not found'})
  }
  catch(err)
  {
      res.status(500).json({success:false,message:'User not found'})
  }
}

//getAll Users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $match: { role: "user" }
      },
      {
        $lookup: {
          from: "userlogs",
          let: { email: "$email" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$email", "$$email"] },
                    { $eq: [{ $year: "$createdAt" }, new Date().getFullYear()] },
                  ],
                },
              },
            },
            {
              $sort: { createdAt: -1 },
            },
            {
              $limit: 1,
            },
            {
              $project: {
                lastLogin: "$createdAt",
              },
            },
          ],
          as: "lastLogin",
        },
      },
      {
        $project: {
          password: 0,
          role: 0,
          __v: 0,
          createdAt:0,
          updatedAt:0,
          "lastLogin._id": 0,
        },
      },
    ]);

    res.status(200).json({ success: true, message: "Successfully pulled", data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Couldn't pull" });
  }
};

//add user log
export const addUserLog = async (req, res) => {
  const { user_email, date } = req.body;
  const newDate = new Date(date);
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  const monthName = monthNames[newDate.getMonth()];
  const newLog = new UserLogs({
    email:user_email,
    month: monthName,
    year: newDate.getFullYear(),
  });
  try {
    const savedLog = await newLog.save();
    res.status(201).json({success:true,message:'Successfully added'});
  } catch (error) {
    res.status(400).json({success:false,message:'Failed to add log'});
  }
};