import { Meal } from "../models/meal.js"

function newMeal(req, res){
    Meal.find({})
    .then(meal => {
        res.render('meals/new', {
            title: 'Add A Meal'
        })
    })
}

export {
    newMeal as new,
}