var jwt = require('jsonwebtoken') ;
var jwtSecret = "xyz123" ;

const decodeMiddleWare = async(req,res,next) => 
{
  try
  { 
    var token = req.headers["authorization"].split(" ")[1] ;
    jwt.verify(token , process.env.jwtSecret, (err,decode) => 
    {
         if(err)
         {
             return res.status(200).send(
                {
                    message:"Auth Failed" ,
                    success:false 
                }
             )
         }
         else 
         {
             req.body.userId = decode.Id ;
             next() ;
         }

    }
    )
    }
    catch(err)
    {
         res.status(500).send({message:`Error occured on server side`, success:false}) ;
    }
}