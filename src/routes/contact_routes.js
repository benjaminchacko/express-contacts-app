const router = require('express').Router();
const Contact = require('#contactModel')

// Get Routes
// GetAll Route - Get All Contacts
router.get('/', async (req, res) => {
    try {
        const data = await Contact.find()
        res.status(200).send(data);
    } catch (err) {
        res.status(400).json({ message: err })
    }
});

// GetOne Route - Get a Specific Contact
router.get('/:contactId', async (req, res) => {
    const { contactId } = req.params
    try {
        const contact = await Contact.findById(contactId);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

// Post Routes
// Post Route - Create a New Contact
router.post("/", async (req, res) => {
    const { body } = req
    const { error } = Contact.validate(body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if contact already exists
    const existingContact = await Contact.findOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber
    });
    if (existingContact) {
        return res.status(400).send("Contact already exists");
    }

    const contact = new Contact(body);

    try {
        const newContact = await contact.save();
        res.status(201).json({ message: "Contact added successfully", newContact });
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
});

// Patch Routes
// Patch route - Update Existing Contact
router.patch('/:contactId', async (req, res) => {
    const { contactId } = req.params
    const updates = req.body


    try {
        const updatedContact = await Contact.findOneAndUpdate(
            { _id: contactId },
            { $set: updates },
            { new: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }


        res.status(200).json({ message: 'Contact updated successfully' }, updatedContact);
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
});

// Delete Routes
// Delete Route - Delete a Specific Contact
router.delete('/:contactId', async (req, res) => {
    const { contactId } = req.params
    try {
        let removeContact = await Contact.findByIdAndDelete({ _id: contactId })
        if (!removeContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err })
    }
})


module.exports = router