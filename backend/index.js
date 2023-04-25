import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import offerRoute from './routes/offers.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/offers',offerRoute);

//conectare la baza de date
mongoose.set("strictQuery",false);
const connect = async ()=>
{
    try{
        await mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to database');
    }catch(err)
    {
        console.log('Database connection failed');
    }
}

app.listen(port,()=>{
    connect();
    console.log('server listening on port',port);
})