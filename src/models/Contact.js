const { Model, Schema } = require('#constants')

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name required'],
    },
    phoneNumber: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        minlength: 10,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v); // Example regex for a common format
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'Phone number required']
    }

});

const Contact = Model("Contact", ContactSchema);
module.exports = Contact;

