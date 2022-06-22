import { Flight } from "../models/flight.js"

function index(req, res){
    Flight.find({})
    .then(flight => {
        res.render("flights/index", {
            flight,
            title : "All Flights"
        })
    })
}

function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flights"
    })
}


export {
    index,
    newFlight as new
}