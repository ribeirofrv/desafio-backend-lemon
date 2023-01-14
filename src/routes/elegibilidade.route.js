const { Router } = require('express');

const eligibilityController = require('../controllers/elegibilidade.controller');

const router = Router();

router.get('/', eligibilityController.getElegibilidade);

module.exports = router;
