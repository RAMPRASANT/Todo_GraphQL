import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import graphQLSchema from './schema/index.js';

import User from './model/UserModel.js';

const app = express();

const MONGO_URI = 'mongodb+srv://crazyheart94:RwB9C07NAEkIYC4x@cluster0.bclhwca.mongodb.net/lyrical?retryWrites=true&w=majority&appName=Cluster0';
if (!MONGO_URI) {
    throw new Error('You must provide a Mongo Atlas URI');
}
mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.once('open', () => {
    console.log('DB is Connected')
});

db.on('error', () => {
    console.log('Error Occured')
})

app.use(express.json());
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true
}))

app.post('/signup', async (req, res, next) => {
    console.log(req)
    if (!req.body.email && !req.body.password) {
        return res.status(500).send('credentials are required')
    }

    const isUserExists = User.findOne({ email: req.body.email })

    if (isUserExists) {
        return res.status(400).send('Email exists')
    } else {
        const user = new User(req.body);
        try {
            await user.save();
        } catch (e) {
            res.status(400).send(e)
        }

    }


})

app.listen(4000, () => {
    console.log('server started')
})