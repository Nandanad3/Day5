const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nandanadinesha:nandanamongo123@cluster0.zs83p.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to mongoDB");
})
.catch ((err) => {
console.log(err);
})