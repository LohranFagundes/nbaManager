const mongoose = require("mongoose");
const playerSchema = new  mongoose.Schema({
_id:{
    type: String,
    require: true
},
name:{
    type: String,
    require: true,
},

});

module.exports=mongoose.model("Player", playerSchema);