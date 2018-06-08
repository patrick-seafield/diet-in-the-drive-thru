import { Router } from 'express'
import db from '../db'


const router = Router()

router.get('/menuItems', function (req, res, next) {
  db.all('SELECT menu_id, name, price, cal, carb, sodium, protein, fat, rid FROM menu_item', function (err, rows) {
    if (err) {
      next(err)
    }
    res.json(rows)
  })
})

router.get('/menuItems/:menu_id', function (req, res, next) {
  db.get(
    'SELECT menu_id, name, price, cal, carb, sodium, protein, fat, rid FROM menu_item WHERE menu_id = (?)',
    [req.params.menu_id],
    function (err, row) {
      res.json(row)
    })
})

export default router
