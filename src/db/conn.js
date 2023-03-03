const mongoose = require("mongoose");

// require("./db/conn");
mongoose.connect("mongodb://localhost:27017/nodeproject")

.then(()=>{
    console.log("The connection is sucessfully")
}).catch(()=>{
    console.log("The connection is not sucessfully")
})