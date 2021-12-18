import express from 'express'
import { User } from '../entity/User'

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
        zipcode
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
            zipcode
        })
        
        res.status(200).json(user)
        
        await user.save()
    }catch(err){
        console.log(err)
        return res.status(500).json("There was an error")
    }

    
})


export {
    router as createUser
}