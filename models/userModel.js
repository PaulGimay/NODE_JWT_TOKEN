import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

   
    email: {

        type: String,
        required: [true, 'You must provide an email']
    },
    password: {
        type: String,
        required: [true, 'You must provide a password']
    }

})

// pre hook before save in MongoDB

UserSchema.pre('save', async function (next) {

    const user = this
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash
    next()
})

// Ajouter une méthode pour vérifier le password

UserSchema.methods.isValidPassword = async function (password) {

    const user = this
    const isSame = await bcrypt.compare(password, user.password)

    return isSame // return true ou false
}


const User = mongoose.model('User', UserSchema)
export default User

