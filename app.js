const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require('./model/employee');
const route = require('./router/employee');
const PORT = process.env.PORT || 2000;
const app = express();

let jsonParser = bodyParser.json()
let urlencoded = bodyParser.urlencoded({extended: false})

//Connect to mongoDB using MongooseJs
mongoose.connect('mongodb://localhost/ajof', {useNewUrlParser: true, useUnifiedTopology: true});

//Check DB connection and error
const db = mongoose.connection;
db.on('error', (err) => {
    console.log (err);
})
db.once('open', () => {
    console.log('Connected to MongoDB sucessfully');
})


//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use router
app.use('/employee', route)

app.get('/', (req, res) => {
    Employee.find({}, (err, employees) => {
        if (err) {
            console.log(err)
        } else {
            res.render ('index', { myEmployees: employees })
        }
    })
})

app.listen (PORT, () => {
    console.log(`Application is running on port ${PORT}.......`);
})