const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Please add the user name'],
    },
    name:{
        type: String,
        required: [true, 'Please add the name'],
    },
    email:{
        type: String,
        required: [true, 'Please add the email'],
        unique: [true, 'Email already taken!'],

    },
    password:{
        type: String,
        required: [true, 'Please add the password '],
    },
    about:{
        type: String,
        required: [false, 'Please add the biography '],
    },
    city:{
        type: String,
        required: [false, 'Please add the city '],
    },
    state:{
        type: String,
        required: [false, 'Please add the state '],
    },
    country:{
        type: String,
        required: [false, 'Please add the country '],
    },
    mobile:{
        type: String,
        required: [false, 'Please add the mobile '],
    },
    address:{
        type: String,
        required: [false, 'Please add the full address '],
    },
    image:{
        type: String,
        required: [false, 'Please add the image '],
    },
    isConfirmed:{
        type: Boolean,
        default: false,
    },
    otp:{
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);