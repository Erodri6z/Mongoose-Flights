import mongoose from "mongoose"

const Schema = mongoose.Schema
// remember to add default dates later, along with the min and max number for the 
//flight number
const flightSchema = new Schema({
    airline: [String],
    airport: {type: [String], default: 'DEN'},
    flightNo:{type: Number,
    min: 10, 
    max: 9999, 
    required: true } ,
    departs: {type: Date, default: function(){
        const today = new Date()
        const oneYear = year.getFullYear()+1
        today.setFullYear(oneyear)
        return today
    }
    }
}, {
    timestamps: true,
})

const Flight = mongoose.model("Flight", flightSchema)

export{
    Flight
}