import express from "express";
import { PORT,hostname, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

//middlewares to parse request body
app.use(express.json());

//middlewares to handle CORS POLICY
//option 1 : Allow All Origins with default of cors(*)
app.use(cors());
//option 2 : Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methos: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowHeaders: ['content-type'],
//     })
// )

//api
// route to get data
app.get("/", (req,res)=>{
    console.log(req);
    return res.status(234).send("Welcome to MERN bookStoreProject.")
})

app.use("/books", booksRoute);

mongoose
   .connect(mongoDBURL)
   .then(()=>{
      console.log('App connected to database');
      app.listen(PORT, ()=>{
        console.log(`App is listening to port: http://${hostname}:${PORT}`);
      });
   })
   .catch((error)=>{
      console.log(error);
   });