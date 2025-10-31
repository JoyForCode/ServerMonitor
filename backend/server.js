require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logRoutes = require('./routes/logRoute');
const mongoose = require('mongoose')

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use('/api/v1', logRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
})

const mongodb_uri = `mongodb://${process.env.MONGODB_DB_USER}:${process.env.MONGODB_DB_PASSWORD}@${process.env.MONGODB_URI}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB_NAME}`

mongoose.connect(mongodb_uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error)
        process.exit(1)
    })

app.listen(process.env.BACKEND_SERVER_PORT, () => {
    console.log(`Server is listening on port ${process.env.BACKEND_SERVER_PORT}`);
}) 
