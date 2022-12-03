const mongoose = require("mongoose");

const database = () =>{
      const uri = `mongodb+srv://rubel:k!r9qnFujyBvs!f@cluster0.iy8np2n.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true })
.then((data) => {
      console.log("mongoose was cannect");
})
.catch((error) =>{
      console.log("this is error",error)
})
}
module.exports = database