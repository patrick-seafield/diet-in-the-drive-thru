import { Router } from 'express'
import db from '../db'


const router = Router()

router.get('/menuItems', function (req, res, next) {
  db.all('SELECT menu_id, name, cal, carb, sodium, protein, fat, rid FROM menu_item', function (err, rows) {
    if (err) {
      next(err)
    }
    res.json(rows)
  })
})

router.get('/menuItems/:id', function (req, res, next) {
  db.get(
    'SELECT menu_id, name, cal, carb, sodium, protein, fat, rid FROM menu_item WHERE restaurant_id = (?)',
    [req.params.id],
    function (err, row) {
      res.json(row)
    })
})

export default router
