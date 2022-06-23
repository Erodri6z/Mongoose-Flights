import { Router } from "express"
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

router.post('/', mealsCtrl.create)

router.get('/new', mealsCtrl.new)


export {
    router
}