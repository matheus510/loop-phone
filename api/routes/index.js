import { Router } from 'express'

const router = Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'))

export default router
