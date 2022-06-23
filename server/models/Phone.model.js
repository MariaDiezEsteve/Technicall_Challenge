const { Schema, model } = require("mongoose")

const PhoneSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    imageFileName: {
        type: String,
    },
    screen: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    ram: {
        type: Number,
        required: true
    },

})

const PhoneModel = model ("Phone", PhoneSchema )

module.exports = PhoneModel