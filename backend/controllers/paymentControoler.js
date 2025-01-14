import { instance } from '../index.js'
import crypto from 'crypto'
import  Payment  from '../models/Payment.js'

export const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.totalAmount * 100),  // amount in the smallest currency unit
        currency: "INR",
      };
      const order = await instance.orders.create(options)

      
      res.status(200).json({
        success: true,
        order,
      })
}

export const paymentVerification = async (req, res) => {  
  console.log(req.body);
  
  const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

  const body =  razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
  .update(body.toString())
  .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;

  if(isAuthentic){

    await Payment.create({
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
    })
    

    res.redirect(
      'http://localhost:3000/thank-you'
    )
  }
  else{
    res.status(400).json({
      success: false,
    })
  }


    
}