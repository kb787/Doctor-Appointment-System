var mongoose = require('mongoose') ;
var colors = require('colors') ;

const Connect =  async () => 
{    
    try 
    {

        await mongoose.connect("mongodb+srv" ,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        ) ;
        console.log(`Successfully connected to database`.bgGreen) ;
    } 
    catch(error)
    {
        console.log(`Unable to connect to database`.bgRed) ; 
    }
}

module.exports = Connect ;
