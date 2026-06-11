const mongoose = require("mongoose");

const blackListedTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
},{
    timestamps:true
});

blackListedTokenSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 604800 }
);



module.exports = mongoose.model("BlackListedToken", blackListedTokenSchema);