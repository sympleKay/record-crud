const express = require('express');
const Employee = require('../model/employee');
const bodyParser = require('body-parser');
const router = express.Router();

//body-parser
let jsonParser = bodyParser.json();
let urlencoded = bodyParser.urlencoded({extended: false})

// Get Add Employee Form
router.get('/add', (req, res) => {
    res.render('add_employee');
})

// Get Edit employee Records
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    Employee.findById(id, (err, employees) => {
        if (err) {
            console.log(err);
        } else {
            res.render('edit_employee', { myEmployee: employees});
        }
    })
})

// Add New Employee Record into DB
router.post('/add', urlencoded, (req, res) => {
    let employee = new Employee ();
    employee.firstName = req.body.first_name;
    employee.middleName = req.body.mid_name;
    employee.lastName = req.body.last_name;
    employee.dateOfBirth = req.body.dob;
    employee.appointmentDate = req.body.doa;
    employee.position = req.body.postion;
    employee.telNo = req.body.tel_no;
    employee.email = req.body.email;
    employee.qualification = req.body.qualification;
    employee.gender = req.body.gender;
    employee.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/')
            console.log(employee);
        }
    })
})

//Update Existing Employees record
router.post ('/update/:id', urlencoded, (req, res) => {

    let employee = {};
    employee.firstName = req.body.first_name;
    employee.middleName = req.body.mid_name;
    employee.lastName = req.body.last_name;
    employee.dateOfBirth = req.body.dob;
    employee.appointmentDate = req.body.doa;
    employee.position = req.body.postion;
    employee.telNo = req.body.tel_no;
    employee.email = req.body.email;
    employee.qualification = req.body.qualification;
    employee.gender = req.body.gender;
    
    let query = {_id: req.params.id};

    Employee.findOneAndUpdate(query, employee, {upsert: true}, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

// Delete Employee
router.delete('/delete/:id', (req, res) => {
    let query = {_id: req.params.id};
    Employee.findByIdAndDelete(query, (err) => {
        if (err) {
            console.log (err);
        } else {
            res.send('deleted succesfully');
        }
    })
})

module.exports = router;