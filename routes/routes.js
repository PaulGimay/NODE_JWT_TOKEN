import express from 'express'
import users from './users.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('NODE_JWT_TOKEN_API')
})


router.use('/users', users)

export default router