import { Meal } from "../models/meal.js"

function newMeal(req, res){
    Meal.find({})
    .then(meal => {
        res.render('meals/new', {
            title: 'Add A Meal',
            meal
        })
    })
}
function create(req, res) {
    Meal.create(req.body)
    .then(meal => {
        res.redirect('/meals/new')
    })
}

export {
    newMeal as new,
    create
}