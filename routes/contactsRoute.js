const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

// Route to get all contacts
// HTTP Method: GET
// Endpoint: /api/contacts
router.route('/').get(getAllContacts);

// Route to get a single contact by its ID
// HTTP Method: GET
// Endpoint: /api/contacts/:id
router.route('/:id').get(getContact);

// Route to create a new contact
// HTTP Method: POST
// Endpoint: /api/contacts
router.route('/').post(createContact);

// Route to update a contact by its ID
// HTTP Method: PUT
// Endpoint: /api/contacts/:id
router.route('/:id').put(updateContact);

// Route to delete a contact by its ID
// HTTP Method: DELETE
// Endpoint: /api/contacts/:id
router.route('/:id').delete(deleteContact);

// Export the router to be used in the main application
module.exports = router;