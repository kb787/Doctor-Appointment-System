var express = require('express') ;
var dotenv = require('dotenv') ;
var colors = require('colors') ;
var http = require('http') ;
var morgan = require('morgan') ;
var Connect = require('./configure') ;
var app = express() ;
var server = http.createServer(app) ;
var {usersRouter,doctorsRouter,profilesRouter} = require("./userControllers") ;
var cors = require('cors') ;
var corsOptions = {
    origin:"https://localhost:3000" ,
}
app.use(express.json()) ;
app.use(morgan('dev')) ;
app.use(cors(corsOptions)) ;

Connect() ;

app.get("/" , (req,res) => 
{
      res.send(" Successfully started your web application ") ;    
} 
)

app.use("/api/users",usersRouter) ;
app.use("/api/doctors",doctorsRouter) ;
app.use("/api/profiles",profilesRouter) ;
 
server.listen(3500 , () => 
{
    console.log(" App launched ") ;
}
) ;