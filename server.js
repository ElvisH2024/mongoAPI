const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");


app.get("/", (req, res) => {
    res.send ("Welcome to my mongoAPI");
});


app.post("/blogpost", (req, res) => {
    res.send("this is a postrequest");
});



mongoose.
connect("mongodb+srv://elvishodzic888:Bosnia12@clusterapi.einc1.mongodb.net/Products-API?retryWrites=true&w=majority&appName=ClusterAPI")
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () => {
        console.log("listening to 3000");
    });
});
