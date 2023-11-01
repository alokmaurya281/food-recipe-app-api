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
        default: ""
    },
    city:{
        type: String,
        required: [false, 'Please add the city '],
        default: ""

    },
    state:{
        type: String,
        required: [false, 'Please add the state '],
        default: ""

    },
    country:{
        type: String,
        required: [false, 'Please add the country '],
        default: ""

    },
    mobile:{
        type: String,
        required: [false, 'Please add the mobile '],
        default: ""

    },
    address:{
        type: String,
        required: [false, 'Please add the full address '],
        default: ""

    },
    image:{
        type: String,
        required: [false, 'Please add the image '],
        default: ""

    },
    isConfirmed:{
        type: Boolean,
        default: false,
    },
    otp:{
        type: String,
        default: ""

    },
    socialId:{
        type:String,
        default: ""

    },
    socialLogin:{
        type:Boolean,
        default:false,
    },
    isGoogleSignin:{
        type:Boolean,
        default:false,
    },
    isFacebookSignin:{
        type:Boolean,
        default:false,
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);