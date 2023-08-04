const mongoose = require('mongoose');

// Define the contact schema using mongoose.Schema
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add the contact name'], // Field validation for required name
    },
    email: {
      type: String,
      required: [true, 'Please add the email'], // Field validation for required email
    },
    phone: {
      type: String,
      required: [true, 'Please add the phone number'], // Field validation for required phone number
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the schema automatically
  }
);

// Export the Contact model created from the schema
module.exports = mongoose.model('Contact', contactSchema);