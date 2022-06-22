import mongoose from "mongoose"

const Schema = mongoose.Schema
// remember to add default dates later, along with the min and max number for the 
//flight number
const flightsSchema = new Schema({
    airline: [String],
    airport: {type: [String], default: 'DEN'},
    flightNo:{type: Number,
    min: 10, 
    max: 9999, 
    required: true 
} ,
    departs: {type: Date, 
        default: function(){
            const today = new Date()
            const oneYear = today.getFullYear()+1
            today.setFullYear(oneYear)
            return today
        }
    }
}, {
    timestamps: true,
})


const Flight = mongoose.model("Flight", flightsSchema)

export{
    Flight
}