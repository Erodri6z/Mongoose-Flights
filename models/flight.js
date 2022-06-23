import mongoose from "mongoose"

const Schema = mongoose.Schema
// remember to add default dates later, along with the min and max number for the 
//flight number
const ticketsSchema = new Schema ({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    cost: {type: Number, min: 0, default: 50}
})

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
    },
    tickets: [ticketsSchema],
    meal:[{type: Schema.Types.ObjectId, ref: "Meal"}]
}, {
    timestamps: true,
})


const Flight = mongoose.model("Flight", flightsSchema)

export{
    Flight
}