
const mongoose = require("mongoose");



db=async()=>{
    try {
      
       await mongoose.connect(process.env.DBURL);
       console.log("connection is established");

}
        
     catch (error) {

        console.log('DB Error',error);
        
    }
}
    

module.exports=db;