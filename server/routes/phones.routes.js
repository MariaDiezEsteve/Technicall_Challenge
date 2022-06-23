const router = require("express").Router();

const PhoneModel = require("../models/Phone.model.js")

//GET Phones

router.get("/", async (req, res, next) => {
   try {
    const phoneData = await PhoneModel.find()
    res.json(phoneData)
   } catch (error) {
    next(error)
   }
})

// GET Phones by Id

router.get ("/:id", async (req, res, next) => {

    const {id} = req.params

    try {
     const phoneDataId = await PhoneModel.findById(id)
     res.json(phoneDataId)
    } catch (error) {
     next(error)
    }
 })


 module.exports = router;