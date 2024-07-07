const express = require("express");
const router = express.Router();
const { home, reg, login, user, Services, getuser, userdelete, useredite, userupdate } = require('../controllers/auth-controllers');
const signupschema = require("../vallidators/auth-validator")
const validate = require('../middlevars/validate-middlevars');
const Authmiddlevar = require("../middlevars/auth-middlevar");
const adminmiddlevar = require("../middlevars/admin-middlevar");



router.get('/', home);
router.post('/reg', validate(signupschema), reg);
router.post('/login', login);
router.get('/user', Authmiddlevar, user)
router.get('/service', Services)
router.get('/users', Authmiddlevar, adminmiddlevar, getuser)
router.get('/users/:id', Authmiddlevar, adminmiddlevar, useredite)
router.delete('/users/delete/:id', Authmiddlevar, adminmiddlevar, userdelete, useredite)
router.patch('/users/update/:id', Authmiddlevar, adminmiddlevar, userdelete, userupdate)

module.exports = router;
