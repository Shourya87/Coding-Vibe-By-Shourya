const express = require('express');
const { registerUser } = require("../controllers/auth.controller")

const router = express.Router();

router.post('/register', registerUser)

router.get("/test", (req, res) => {
    console.log("Cookies: ", req.cookies)
    res.json({
        message: "Test route",
        cookies: req.cookies
    })
})

module.exports = router;