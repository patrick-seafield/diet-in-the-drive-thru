import { Router } from 'express'
import db from '../db'


const router = Router()

router.get('/restaurants', function (req, res, next) {
  db.all('SELECT restaurant_id, name, lat, lng FROM restaurant', function (err, rows) {
    if (err) {
      next(err)
    }
    res.json(rows)
  })
})

router.get('/restaurants/:id', function (req, res, next) {
  db.get(
    'SELECT restaurant_id, name, lat, lng FROM restaurant WHERE restaurant_id = (?)',
    [req.params.id],
    function (err, row) {
      res.json(row)
    })
})

export default router
