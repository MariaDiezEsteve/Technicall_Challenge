require ("../db")

const mongoose = require("mongoose")
let phoneArr = require ("./phones.json")

const PhoneModel = require("../models/Phone.model.js")

const addPhone = async () => {
    try {
        await PhoneModel.insertMany(phoneArr)
    } catch(error){
        console.log(error)
    }
}

addPhone()