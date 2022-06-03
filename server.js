import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes.js'
import 'dotenv/config';

const app = express();

app.use(express.json())


// Connect to DB
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then (() => {
    console.log('Database Connected');
}).catch( err => {
    console.log(`error: ${err}`)
})

app.use('/api/v1', router)


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is opened on port ${port}`)
})

export default app


