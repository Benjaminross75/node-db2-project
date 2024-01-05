// DO YOUR MAGIC
const express = require('express')

const router = express.Router()
const Car = require('./cars-model')
router.get('/', async (req, res, next)=>{
   try{
    const cars = await Car.getAll()
    res.json(cars)
   }
   catch(err){
    next(err)
   }
})
router.get('/:id', async (req, res, next)=>{
    res.json(`getting car with id ${req.params.id}`)
})
router.post('/', async (req, res, next)=>{
    res.json('posting a new car')
})


module.exports = router
