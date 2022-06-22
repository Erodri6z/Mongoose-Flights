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
function create(req, res) {
    for(let key in req.body) {
        if(req.body[key]=== '') {
            delete req.body[key]
        }
    }
    Flight.create(req.body)
    .then(flight =>{
        res.redirect('/flights')
    })
    .catch(err =>{
        console.log(err)
        res.redirect("/flights")
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
function deleteFlight(req,res){
    Flight.findByIdAndDelete(req.params.id)
    .then(flight => {
        res.redirect("/flights")
    })
    .catch(err =>{
        console.log(err)
        res.redirect("/")
    })
}
export {
    index,
    newFlight as new,
    show,
    create,
    deleteFlight as delete
}