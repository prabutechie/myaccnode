const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Port = process.env.PORT || 4000

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json())

const reason = require('./router/Reason')
const title = require('./router/Title')

app.use("/reason",reason)
app.use("/title",title)

app.get("/",(req,res)=>{
    res.json("Root")
})

const url ="mongodb+srv://root:dineshmjs@cluster0-y8uer.gcp.mongodb.net/myacc"
// const url = "mongodb://localhost:27017/myacc" 

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if(!err){
        console.log("Mongodb Connectced")
    }
    if(err){
        console.log(err)
    }
})

app.listen(Port, () => {
    console.log("Server run port 2000")
})

