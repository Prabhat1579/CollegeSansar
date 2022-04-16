const express = require('express');
const { createCollege } = require('../controller/admin/college');
const College = require('../model/College');
const router = express.Router();

// * GET ROUTES

router.get('/', (req, res) => {});

router.get('/college', (req, res) => {
   res.render('admin_college');
});

router.get('/career', (req, res) => {
   res.render('admin_career');
});

router.get('/exam', (req, res) => {
   res.render('admin_exam');
});

router.get('/login', (req, res) => {
   res.render('admin_login');
});

router.get('/register', (req, res) => {
   res.render('admin_register');
});

router.get('/logout', (req, res) => {});

// * POST ROUTES

router.post('/login', (req, res) => {
   console.log(req.body);
});

router.post('/register', (req, res) => {});

router.post('/college', createCollege);

router.post('/career', (req, res) => {});

router.post('/exam', (req, res) => {});

module.exports = router;
