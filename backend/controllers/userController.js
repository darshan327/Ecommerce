import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// Route for user login 

    const  createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
   }

 const loginUser = async(req,res)=>{
   try{

      const {email, password} = req.body;

      const user = await userModel.findOne({email});

      if(!user){
         return res.status(400).json({msg:"User does not exist"});
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch){
         return res.status(400).json({msg:"Invalid credentials"});
      }

      const token = createToken(user._id);

      res.status(200).json({
         msg:"User logged in successfully",
         token
      });

   } catch(error){

      console.log(error);

      res.status(500).json({
         msg:"Error logging in user"
      });
   }
}
  

  // Route for user registration

  const registerUser = async(req, res)=>{

   try{
          const {name, email, password} = req.body;
          // Check if user already exists
            const exists = await userModel.findOne({email});
            if(exists){
              return res.status(400).json({msg:"User already exists"})
            }

           // validate password length
           if(!validator.isEmail(email)){
             return res.status(400).json({msg:"Invalid email"})
           }
           if(password.length < 8){
            return res.status(400).json({msg:"Password must be at least 8 characters"})
           }
           
            // hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new userModel({
               name,
               email,
               password: hashedPassword
            });

            const user = await newUser.save();

            const token = createToken(user._id)

            res.status(200).json({msg:"User registered successfully", token})

   }catch(error){
    res.status(500).json({msg:"Error registering user"})
   }
   
     
     
  }

  // Route for admin login

  const adminLogin = async(req, res)=>{

  }

  export {loginUser, registerUser, adminLogin}