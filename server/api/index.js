import { Router } from 'express'

import users from './users'
import restaurants from './restaurants'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(restaurants)

export default router
