//Dependencies
const path = require('path');
const router = require('express').Router();

//Routes to the static pages
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//Exports
module.exports = router;