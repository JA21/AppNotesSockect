const express = require('express');
const router = express.Router();

const notes = require('../controllers/notes.controller');

router.get('/findAll', notes.createNote);
router.get('/find', notes.createNote);
router.post('/create', notes.findNote);
router.put('/update', notes.updateNote);
router.put('/delete', notes.deleteNote);


module.exports = router;