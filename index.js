const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const { connectDB } = require('#db_connection');
const { logger } = require('#logger');

const contactRoutes = require('#contactRoutes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Middleware 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/healthcheck', (req, res) => {
    try {
        logger.info('Healthcheck endpoint hit')
        res.status(200).json({ message: 'API is running' })
    } catch (error) {
        logger.error('Healthcheck endpoint hit', error)
        res.status(500).json({ message: 'Error checking health of API' })
    }
})

app.use('/contacts', contactRoutes);

dotenv.config()
connectDB();

const port = process.env.port || 4321
app.listen(port, () => {
    logger.info(`Listening at http://localhost:${port}`)
}).on('error', err => {
    logger.error('Error starting server:', err);
});