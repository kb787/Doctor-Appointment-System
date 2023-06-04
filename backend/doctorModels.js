{/* var mongoose = require('mongoose') ;

const doctorSchema = new mongoose.Schema (
    {
        docId : 
        {
           type:String ,
           required:true   
        } 
        ,

        docFirstName : 
        {
           type:String ,
           required:true   
        } 
        ,

        docLastName : 
        {
            type:String ,
            required:true  
        }
        ,

        docEmail :
        {
            type:String ,
            required:true 
        }
        ,

        docWesbite :
        {
             type:String 
        } 
        ,

        docAddress :
        {
             type:String ,
             required:true
        }
        ,
        docSpecialization :
        {
             type:String ,
             required:true 
        } 
        ,

        docExperience :
        {
            type:Number ,
            required:true 
        } ,

        docFees :
        {
            type:Number ,
            required:true 
        } ,

        docTimings :
        {
            type:String ,
            required:true 
        }


    }
)

if (mongoose.models['users']) {
     return mongoose.model('users');
}

const doctorModel = mongoose.model('users' , doctorSchema) ;
module.exports = doctorModel ;

*/}

var mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    docId: {
        type: String,
        required: true
    },
    docFirstName: {
        type: String,
        required: true
    },
    docLastName: {
        type: String,
        required: true
    },
    docEmail: {
        type: String,
        required: true
    },
    docWesbite: {
        type: String
    },
    docAddress: {
        type: String,
        required: true
    },
    docSpecialization: {
        type: String,
        required: true
    },
    docExperience: {
        type: Number,
        required: true
    },
    docFees: {
        type: Number,
        required: true
    },
    docTimings: {
        type: String,
        required: true
    }
});

const DoctorModel = mongoose.models.doctors || mongoose.model('doctors', doctorSchema);
module.exports = DoctorModel;


