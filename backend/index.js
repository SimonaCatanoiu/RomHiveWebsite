import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import offerRoute from './routes/offers.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'
import imagesRoute from './routes/images.js'
import bodyParser from 'body-parser'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
    origin:true,
    credentials: true
}

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use('/api/v1/offers',offerRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);
app.use('/api/v1/images',imagesRoute);

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