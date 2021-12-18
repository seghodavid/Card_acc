import express from 'express'
import { User } from '../entity/User'
const axios = require('axios');

const router = express.Router();

router.post('/api/users', async(req, res) => {
    const {
        email,
        cardNumber,
        month,
        year,
        cvv,
        name,
        country,
        zipcode,
        amount
    } = req.body

    try{
        const user = User.create({
            email,
            cardNumber,
            month,
            year,
            cvv,
            name,
            country,
            amount,
            zipcode
        })

  const response = await axios
    .post(
      'https://api.paystack.co/charge',
      {
        email: email,
        amount: amount,
      card: {
        cvv: cvv,
         number: cardNumber,
          expiry_month: month,
          expiry_year: year,
        },
        pin: '0000',
      },
      {
        headers: {
          Authorization:
            'Bearer sk_test_881cdda220b59994f5530d2299994112fc867c25',
       },
     },
   )
     

        await user.save()

        res.status(200).json({user, transaction:response.data.data})
    }catch(err){
        console.log(err)
        return res.status(500).json("There was an error")
    }

    
})


export {
    router as createUser
}