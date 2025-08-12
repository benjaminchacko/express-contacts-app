const { Model, Schema } = require('#constants')

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        minlength: 10,
        required: true
    }

});

const Contact = Model("Contact", ContactSchema);
module.exports = Contact;

