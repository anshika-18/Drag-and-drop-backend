const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const model=new Schema({
    char:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('data',model)
