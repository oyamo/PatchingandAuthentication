const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

exports.user_login_post = [
  // Validate input fields. Trim spaces around username
  body('username', 'Username required.').isLength({min: 3}).trim(),
  body('password', 'Password must atleast 6 characters.').isLength({ min:6 }),
  // Sanitize body with the wildcard.
  sanitizeBody('*'),

  // Process the request after validating.
  (req, res, next) => {
    // Save errors from validation, if any.
    const errors = validationResult(req);
    // Save username and password. 
    // Convert username to lowercase for db consistency
    const username = req.body.username.toLowerCase()
    const password = req.body.password
    // Create a token for the user.
    const token = jwt.sign({username: username}, process.env.jwtSecret, 
                  {expiresIn: 21600 })
  }
]


// (req, res, next) => {
//   res.send('User logged in')
// }