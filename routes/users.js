import express from 'express'
import { createUser, allUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js'
import { catchErrors } from '../helpers.js'

import passport from 'passport'

const router = express.Router()

router.post('/', catchErrors(createUser))
router.get('/', catchErrors(allUsers))
router.get('/:id', catchErrors(getUser))
router.patch('/:id', catchErrors(updateUser))
router.delete('/:id', catchErrors(deleteUser))

//authentification
router.post('/signup', passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
        res.json({
            message: 'Signup OK',
            user: req.user
        })
    }
)

export default router




