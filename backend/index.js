
import express from "express";
import mongoose from "mongoose";


const mongoDB ="mongodb+srv://sultan:sultan123@finalcluster.6oto9cx.mongodb.net/FINALEXAM?retryWrites=true&w=majority";

const PORT = 8000;

const app = express();


mongoose
    .connect(mongoDB)
    .then(() => {
        console.log("App connected to Database");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

