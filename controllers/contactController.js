// Importing the necessary modules and middleware
const asyncHandler = require('express-async-handler'); // Middleware to handle asynchronous errors
const Contact = require('../models/contactModel'); // Importing the Contact model

// Function to create a new contact
// HTTP Method: POST
// Endpoint: /api/contacts
const createContact = asyncHandler(async (req, res) => {
  console.log('The request body is: ', req.body); // Logging the request body for debugging purposes

  // Extracting name, email, and phone from the request body
  const { name, email, phone } = req.body;

  // Validating the presence of required fields (name, email, and phone)
  if (!name || !email || !phone) {
    res.status(400); // Bad Request status code
    throw new Error('All fields are mandatory'); // Throwing an error message indicating missing fields
  }

  // Creating a new contact using the Contact model
  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  // Sending a successful response with the newly created contact
  res.status(201).json({ contact });
});

// Function to get all contacts
// HTTP Method: GET
// Endpoint: /api/contacts
const getAllContacts = asyncHandler(async (req, res) => {
  // Finding all contacts using the Contact model
  const contacts = await Contact.find();

  // Sending a successful response with the list of contacts
  res.status(200).json({ contacts });
});

// Function to get a single contact by its ID
// HTTP Method: GET
// Endpoint: /api/contacts/:id
const getContact = asyncHandler(async (req, res) => {
  // Finding a contact by its ID using the Contact model
  const contact = await Contact.findById(req.params.id);

  // Handling the case where the contact with the given ID is not found
  if (!contact) {
    res.status(404); // Not Found status code
    throw new Error('Contact not found'); // Throwing an error message indicating that the contact was not found
  }

  // Sending a successful response with the found contact
  res.status(200).json({ contact });
});

// Function to update a contact by its ID
// HTTP Method: PUT
// Endpoint: /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  // Finding a contact by its ID using the Contact model
  const contact = await Contact.findById(req.params.id);

  // Handling the case where the contact with the given ID is not found
  if (!contact) {
    res.status(404); // Not Found status code
    throw new Error('Contact not found'); // Throwing an error message indicating that the contact was not found
  }

  // Updating the contact with the data from the request body and returning the updated contact
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } // Setting the 'new' option to true to return the updated document
  );

  // Sending a successful response with the updated contact
  res.status(200).json({ updatedContact });
});

// Function to delete a contact by its ID
// HTTP Method: DELETE
// Endpoint: /api/contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  // Finding a contact by its ID using the Contact model
  const contact = await Contact.findById(req.params.id);

  // Handling the case where the contact with the given ID is not found
  if (!contact) {
    res.status(404); // Not Found status code
    throw new Error('Contact not found'); // Throwing an error message indicating that the contact was not found
  }

  // Deleting the contact using the deleteOne() method of Mongoose
  await Contact.deleteOne();

  // Sending a successful response with the deleted contact
  res.status(200).json(contact);
});

// Exporting the functions to be used in the routes
module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};
