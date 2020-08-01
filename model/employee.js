const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    telNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;