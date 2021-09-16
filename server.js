require('dotenv').config()
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
app.use(bodyParser.json())
app.use(cors())




mongoose.connect(process.env.MONGO_URL,{ useUnifiedTopology: true,useNewUrlParser:true })
    .then(()=>{
        console.log('database is connected')
    })
    .catch(error=>{
        console.log(error)
})
require('./api')(app)

const PORT=process.env.PORT||5000;
app.listen(PORT);