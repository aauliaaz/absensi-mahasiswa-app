const express = require('express');
const router = express.Router();
const controller = require('../controllers/absensiController');

router.get('/', controller.getAbsensi);
router.post('/', controller.addAbsensi);
router.put('/:id', controller.updateAbsensi);
router.delete('/:id', controller.deleteAbsensi);

module.exports = router;
