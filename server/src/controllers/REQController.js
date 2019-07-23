const express = require('express');

const router = express.Router();

router.get('/');
router.post('/save');
router.put('/update');
router.delete('/delete');


module.exports = router;