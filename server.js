const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Das ist willkommen :)");
});

app.post('/product', (rrq, res)=> {
    console.log(req.body);
    res.send(req.body);
})

app.get("/home", (req, res) => {
  res.send("Das ist meine erste Backend test ich habe aleine geschrieben :)");
});

app.get("/blog", (req, res) => {
  res.send("Das ist meine blog :)");
});

app.get("/contact", (req, res) => {
  res.send("Das ist meine blog :)");
});


mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb+srv://node-ex-api:rmnktFFMumRsba4c@node-ex-ap.gjxkuvb.mongodb.net/node-ex-api"
  ).then(()=>{
    console.log("MongoDB connected");
    app.listen(3030, ()=> {
        console.log(`Node Express API ist running on http://localhost:3030`)
    });
    
  }).catch((error)=>{
    console.log(error)
  })
  

// >> 1: cLeUbLOFCL9jYtZj   >> 2: rmnktFFMumRsba4c
