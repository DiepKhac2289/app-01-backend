const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

// Homepage
router.get('/', homeController.getHomePage);

// AboutPage
router.get('/about', homeController.getAboutPage);

// ServicePage
router.get('/services', homeController.getServicePage);

// BlogPage
router.get('/blog', homeController.getBlogPage);

// Login
router.get('/login', homeController.getLoginPage);

router.post('/create-user', homeController.createUser);

router.get('/sign-in', homeController.getSignIn);

module.exports = router;


