import express from 'express'
import { createUser, allUsers, getUser, updateUser, deleteUser  } from '../controllers/userController.js'
import { catchErrors} from '../helpers.js'

const router = express.Router()

router.post('/', catchErrors(createUser))
router.get('/', catchErrors(allUsers))
router.get('/:id', catchErrors(getUser))
router.patch('/:id', catchErrors(updateUser))
router.delete('/:id', catchErrors(deleteUser))

export default router




