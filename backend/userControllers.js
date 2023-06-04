var userModel = require("./userModels") ;
var DoctorModel = require("./doctorModels") ;
var profileModel = require("./profileModels") ;
var jwtSecret = "xyz123" ;
var jwt = require('jsonwebtoken') ;
var bcrypt = require('bcrypt')

const loginController = async(req,res) => {
    try 
    {
        var prevUserName = await userModel.findOne({email : req.body.email}) ;
       // var prevUserPassword = await compare(req.body.password, prevUserName.password) ;
        if(!prevUserName)
        {
             return res.status(200).send({message:"User not found", success:false}) ;
        }  
        else if(prevUserName.password !== req.body.password)
        {
             return res.status(200).send({message:"Invalid username/password",success:false}) ;
        }
        else
        {
             var token = jwt.sign({id:prevUserName.__id}, process.env.jwtSecret, {
             expiresIn:"1d" 
             })
             return res.status(201).send({message:" Login successfull ",success:true , token}) ; 
        }     
    } 
    catch(error)
    {
         console.log(error) ;
         return res.status(500).send({message:"Server side error has occured",success:false}) ;
    }

       
} ;
const registerController = async (req,res) => {
  {
       try 
       {
        const { email, password, userType } = req.body ;
           console.log(req.body) ;
           var existingUser = await userModel.findOne({email : req.body.email}) ;
           console.log(existingUser) ;
           if(existingUser)
           {
               return res.status(200).send({message: "User Already Exists" , success:false}) ;
           }
           else 
           { 
             
              const userType = req.body.userType ;
              const password = req.body.password ;
              var newUser = new userModel({
              email,password,userType 
               }) ;
              await newUser.save({userType,email,password}) ;
              return res.status(201).send({message:"Successfully saved the new user",success:true}) ;    
              
           }
       }
       catch(error)
       { 
           console.log(error) ;
           return res.status(500).send({message:"Server side error occured",success:false}) ;
       }
  }  
} ;

const doctorFormController = async(req,res) =>  {

    try 
    {
      const {docId,email,password,docFirstName,docLastName,docEmail,docAddress,docWebsite,docSpecialization,docExperience,docFees,docTimings} = req.body ;
      console.log(req.body) ;  
       var newDocAccount = await new DoctorModel (
        {
          docId,email,password,docFirstName,docLastName,docEmail,docAddress,docWebsite,docSpecialization, docExperience,docFees,docTimings ,
        }
        )
        newDocAccount.save() ;
        console.log(newDocAccount) ;
        return  res.status(201).send({message:"Saved the data",success:true,newDocAccount}) ;
       }   
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Server side error occured", success:false}) ;
    }
} 

const userProfileController = async(req,res) => 
{
    try {

        const {userProfileId,userProfileFirstName,userProfileLastName,userProfileEmail,userProfileAge,userProfileCity,userProfilePhoneNo} = req.body ;
        console.log(req.body) ;
        var newUserProfile = await new profileModel({
            userProfileId,userProfileFirstName,userProfileLastName,userProfileEmail,userProfileAge,userProfileCity,userProfilePhoneNo 
        })
        newUserProfile.save() ;
        console.log(newUserProfile) ;
        return res.status(201).send({message:"Saved your profile information",success:true,newUserProfile}) ; 

    }
    catch(err)
    {
        console.log(error) ;
        return res.status(500).send({message:"Server side error had occured",success:false}) ;
    }
}

var express = require('express') ;
var usersRouter = express.Router() ;
var doctorsRouter = express.Router() ;
var profilesRouter = express.Router() ;
    
  usersRouter.post('/postRegister',registerController) ;
  usersRouter.post('/postLogin',loginController) ;
  doctorsRouter.post('/postNewDoctorAccount',doctorFormController) ;
  profilesRouter.post('/postNewProfile',userProfileController) ;

module.exports = {usersRouter:usersRouter,
doctorsRouter:doctorsRouter,
profilesRouter:profilesRouter} ;