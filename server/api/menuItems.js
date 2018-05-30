import { Router } from 'express'
import db from '../db'


const router = Router()

router.get('/menuItems', function (req, res, next) {
  let queryText = `
    SELECT
      id,
      name,
      price,
      calories,
      created_date
    FROM menu_items
    ORDER BY created_date DESC
  `;
  db.all(queryText, function (err, rows) {
    if (err) {
      next(err)
    }
    res.json(rows)
  })
})

router.get('/menuItems/:id', function (req, res, next) {
  let queryText = `
    SELECT
      id,
      name,
      price,
      calories,
      created_date
    FROM menu_items
    WHERE id = (?)
  `;
  db.get(
    queryText,
    [req.params.id],
    function (err, row) {
      res.json(row)
    })
})

export default router
