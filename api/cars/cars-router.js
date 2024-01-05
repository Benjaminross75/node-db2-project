// DO YOUR MAGIC
const express = require('express')

const router = express.Router()
const Car = require('./cars-model')

const {checkCarId,checkCarPayload,checkVinNumberUnique,checkVinNumberValid} = require('./cars-middleware')


router.get('/', async (req, res, next)=>{
   try{
    const cars = await Car.getAll()
    res.json(cars)
   }
   catch(err){
    next(err)
   }
})
router.get('/:id', checkCarId, async (req, res, next)=>{
    try{
        const cars = await Car.getById(req.params.id)
        if(!cars){
            next({status:404, message: `car with id ${req.params.id} is not found`})
        } else{
            res.json(cars)
        }
       }
       catch(err){
        next(err)
       }
})
router.post('/',
checkCarPayload,
checkVinNumberUnique,
checkVinNumberValid,
 async (req, res, next)=>{
    try{
    const newCar = await Car.create(req.body)
    res.json(newCar)
    }
    catch(err){
        next(err)
    }
})


module.exports = router
