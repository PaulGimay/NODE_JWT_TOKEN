import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, 'You must provide a firstname'],
        trim: true
    }

})

const User = mongoose.model('User', UserSchema)
export default User

