import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import Razorpay from 'razorpay';
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'
import adminRoute from './routes/admin.js'
import paymentRoute from './routes/payment.js'
import userChoiceRoute from './routes/userChoice.js'




dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

//database connection
// mongoose.set("strictQuery",false);
const connect =  async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
          useNewUrlParser:true,
          useUnifiedTopology:true  
        });
        console.log('connected to db');
    } catch (err) {
        console.log('db connection failed')
    }
}

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});


//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/auth', authRoute );
app.use('/api/v1/tours', tourRoute );
app.use('/api/v1/users', userRoute );
app.use('/api/v1/review', reviewRoute )
app.use('/api/v1/booking', bookingRoute )
app.use('/api/v1/admin', adminRoute )
app.use('/api/v1/payment', paymentRoute)
app.use('/api/v1/userchoice', userChoiceRoute)


app.get("/api/v1/getkey", (req, res) => 
    res.status(200).json({key: process.env.RAZORPAY_ID_KEY})
);

app.listen(port , ()=>{
    connect();
    console.log(`Server is running on port ${port}`)
})