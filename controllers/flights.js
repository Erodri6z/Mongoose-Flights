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
function show(req, res){
    Flight.findById(req.params.id)
    .then(flight => {
        res.render("flights/show", {
            flight,
            title: "Flight Details"
        })
    })
    .catch(err =>{
        console.log(err)
        res.redirect("/")
    })
}
export {
    index,
    newFlight as new,
    show
}