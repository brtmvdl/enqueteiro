const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/forms', formController.createForm);
router.get('/forms/:hash', formController.getForm);
router.post('/forms/:hash/submit', formController.submitAnswer);

module.exports = router;
