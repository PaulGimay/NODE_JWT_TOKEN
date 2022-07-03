import passport from 'passport'
import { Strategy } from 'passport-local'

import UserModel from '../models/userModel.js'

passport.use(
    'signup',
    new Strategy({
       
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true

      },

        async (req,email, password, done) => {

            try {
                const username = req.body.username;
                const user = await UserModel.create({ username, email, password})
                return done(null, user)

            } catch (error) {
                return done(error)
            }
        }
    )
)

export default passport
