const express = require('express');
const College = require('../model/College');

const router = express.Router();

router.get('/', (req, res) => {
   const { userId, username, isLoggedIn } = req.session;
   console.log(username, userId);
   res.render('index', { username, isLoggedIn });
});

router.get('/college', async (req, res) => {
   const collegeList = await College.findAll();

   res.render('college', {
      colleges: collegeList.map(({ id, name, category, description, thumbnail }) => ({
         name,
         category,
         description,
         link: `/college/${id}`,
         img: `/assets/${thumbnail}`,
      })),
   });
});

router.get('/college/:college_id', async (req, res) => {
   res.render('college_single');
});
router.post('/college/submit_review', async (req, res) => {
   const { title, description } = req.body;
});

router.get('/exam', (req, res) => {
   res.render('exam');
});

router.get('/career', (req, res) => {
   res.render('career');
});

router.get('/register', (req, res) => {
   res.render('register');
});

router.get('/login', (req, res) => {
   res.render('Login');
});

module.exports = router;
