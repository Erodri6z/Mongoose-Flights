import mongoose from "mongoose"

const Schema = mongoose.Schema
// remember to add default dates later, along with the min and max number for the 
//flight number
const flightsSchema = new Schema({
    airline: [String],
    airport: {type: [String], default: 'DEN'},
    flightNo: Number,
    departs: Date
}, {
    timestamps: true,
})

const Flight = mongoose.model("Flight", flightSchema)

export{
    Flight
}