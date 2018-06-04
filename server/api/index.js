import { Router } from 'express'

import users from './users'
import restaurants from './restaurants'
import menuItems from './menuItems'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(restaurants)
router.use(menuItems)

export default router
