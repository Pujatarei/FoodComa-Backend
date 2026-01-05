const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "first name must be  at least 2 characters long"],
        lowercase: true,
        trim: true, // if the user gives extra spaces then it will be automatically remove it
        maxlength: [20, "first name  should be less than or eqaul to  20 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "last name must be  at least 2 characters long"],
        lowercase: true,
        trim: true, // if the user gives extra spaces then it will be automatically remove it
        maxlength: [20, "last name  should be less than or eqaul to  20 characters"]
    },
    mobileNumber: {
        type: String,
        trim: true,
        maxlength: [10, "Phone number should  be of length 10"],
        minlength: [10, "Phone number should  be of length 10"],
        unique: [true, "Phone number is already in use "],
        required: [true," Phone number should be provided"]
    },
    email:{
        type: String,
        trim: true,
        unique: [true, "Email is already in use "],
        required: [true," Email should be provided"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']


    },
    password: {
        type: String,
        required: [true, "Password should be  provided"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
})

const User = mongoose.model('User', userSchema); //collection

module.exports = User;
