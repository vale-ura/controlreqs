const express = require('express');
require('dotenv/config');
const app = express();
const reqController = require('./controllers/REQController');
const userController = require('./controllers/UserController');
const mongoConnection = require('./database/connection');

//Body Parser Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

// test route
app.get('/', (req,res) => {
    res.send('Already to listen')
})

app.post('/', (req,res) => {
    
})

// end test

// user router
app.use('/user', userController);

// req router
app.use('/req', reqController);


app.listen(process.env.PORT, async () => {
    console.log('Alreay listen in port', process.env.PORT);
    try {
        await mongoConnection.connect(process.env.DB_CONNECTION);
        console.log('Database Connected');
    } catch (error) {
        console.error(error);
    }
})
