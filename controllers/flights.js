import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

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
        res.redirect(`/flights/${flights._id}`)
    })
    .catch(err =>{
        console.log(err)
        res.redirect("/flights")
    })
}

function show(req, res){
    Flight.findById(req.params.id)
    .populate('meal')
    .then(flight => {
        Meal.find({_id:{$nin: flight.meal}})
        .then(meal => {
            res.render("flights/show", {
                title: "Flight Details",
                flight,
                meal: meal
            })
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
function edit(req, res) {
    Flight.findById(req.params.id)
    .then(flight =>{
        res.render("flights/edit", {
            flight: flight,
            title: "Edit Flight Details"
        })
    })
    .catch(err =>{
        console.log(err)
        res.redirect("/")
    })
}
function update(req, res){
    for(let key in req.body) {
        if(req.body[key]=== '') {
            delete req.body[key]
        }
    }
    Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(flight =>{
        res.redirect(`/flights/${flight._id}`)
    })
    .catch(err =>{
        console.log(err)
        res.redirect("/")
    })
}
function createTicket(req, res){
    for(let key in req.body) {
        if(req.body[key]=== '') {
            delete req.body[key]
        }
    }
    Flight.findById(req.params.id)
    .then(flight => {
        flight.tickets.push(req.body)
        flight.save()
        .then(() => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
    .catch(err =>{
        console.log(err)
        res.redirect("/")
    })

}

function addMeal(req,res) {
    Flight.findById(req.params.id)
    .then(flight => {
        flight.meal.push(req.body.mealId)
        flight.save()
        .then(meal => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}
export {
    index,
    newFlight as new,
    show,
    create,
    deleteFlight as delete,
    edit,
    update,
    createTicket,
    addMeal

}