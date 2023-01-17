const { Router } = require('express');

const eligibilityController = require('../controllers/elegibilidade.controller');

const router = Router();

router.post('/', eligibilityController.checaElegibilidade);

module.exports = router;
