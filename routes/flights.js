import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"


const router = Router()

// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

export {
  router
}
