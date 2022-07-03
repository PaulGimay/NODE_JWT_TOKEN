import UserModel from '../models/userModel.js'



export const createUser = async (req, res) => {
    const user = new UserModel(req.body)
    await user.save()
    res.send(user)
}

export const allUsers = async (req, res) => {
    const users = await UserModel.find({})
    res.send(users)
}

export const getUser = async (req, res) => {
    console.log(req.params)
    const user = await UserModel.find({_id: req.params.id})
    res.send(user)
}

export const updateUser = async (req, res) => {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body)
    await user.save()
    res.send(user)
}

export const deleteUser = async (req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    if (!user) {
        res.status(404).send('Aucun user trouvé')
    }
    res.status(200).send()
}












































    
