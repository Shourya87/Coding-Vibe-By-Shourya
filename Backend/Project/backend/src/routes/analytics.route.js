const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth.middleware');
const admin = require('../middleware/admin.middleware');
const getAdminStats = require('../controllers/analytics.controller');



router.get('/', protect, admin, getAdminStats);




module.exports = router;