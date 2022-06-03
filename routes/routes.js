import express from 'express'
import users from './users.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('Hello Paul')
})

router.use('/users', users)

export default router