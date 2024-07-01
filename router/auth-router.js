const express = require("express");
const router = express.Router();
const { home, reg, login } = require('../controllers/auth-controllers');
const signupschema = require("../vallidators/auth-validator")
const validate = require('../middlevars/validate-middlevars')

router.get('/', home);
router.post('/reg', validate(signupschema), reg);
router.post('/login', login);

module.exports = router;
