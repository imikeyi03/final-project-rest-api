'use strict';

const express = require('express');
const { asyncHandler } = require('./middleware/async-handler');
const { User } = require('./models');
const { Course } = require('./models');
const { authenticateUser } = require('./middleware/auth-user');
const bcrypt = require('bcrypt');

// construct a router instance.
const router = express.Router();

// A "/api/users" GET route that will return all properties and values for
// the currently authenticated User along with a 200 HTTP status code.
router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
    const user = req.currentUser;
        res.json({
            id:user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.emailAddress
        })
}));




// A /api/users POST route that will create a new user, set the 
// Location header to "/", and return a 201 HTTP status
// code and no content.



module.exports = router;