var mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema(
    {
         email :
         {
             type:String ,
             required:[true,"Email is required"] ,
         } ,
         password :
         {
             type:String ,
             required:[true,"Password is required"] ,
         } ,

         userType :
         {
             type:String ,
             default:"general" ,
         } ,

     //    notification :
     //    {
     //        type:Array ,
     //        default:[] ,
     //    } ,
     //    seenNotification :
     //    {
     //        type:Array ,
     //        default:[] ,
     //    }
    }
)

if (mongoose.models['users']) {
    return mongoose.model('users');
}
const userModel = mongoose.model("users", userSchema) ;
module.exports = userModel ;