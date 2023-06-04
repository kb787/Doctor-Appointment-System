var mongoose = require('mongoose') ;

var userProfileSchema = new mongoose.Schema(
{
    userProfileId :
    {
        type:String ,
        required:true 
    } ,

    userProfileFirstName :
    {
        type:String,
        required:true  
    } ,
    userProfileLastName : 
    {
        type:String,
        required:true  
    } ,
    userProfilePhoneNo :
    {
        type:String ,
        required:true 
    } ,
    userProfileEmail :
    {
        type:String ,
        required:true
    } ,
    userProfileAge :
    {
        type:Number ,
        required:true 
    } ,
    userProfileCity :
    {
        type:String ,
        required:true
    }

}    
) 

if (mongoose.models['profiles']) {
    return mongoose.model('profiles');
}

const profileModel = mongoose.model('profiles',userProfileSchema) ;
module.exports = profileModel ;
