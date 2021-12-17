const router = require('express').Router(); // require(express) & router = express.Router
const bcrypt = require('bcryptjs')
const Users = require('../users/users-model')

/* eslint-disable */

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const newUser = {
      username,
      password: bcrypt.hashSync(password, 8)
    }
    const created = await Users.add(newUser)
    res.status(200).json({ username: created.username, id: created.id })
  } catch (err) {
    next(err)
  }

  //   2- On SUCCESSFUL registration,
  //     the response body should have `id`, `username` and `password`:
  //     {
  //       "id": 1,
  //       "username": "Captain Marvel",
  //       "password": "2a$08$jG.wIGR2S4hxuyWNcBf9MuoC4y0dNy7qC/LbmtuFBSdIhWks2LhpG"
  //     }

  //   3- On FAILED registration due to `username` or `password` missing from the request body,
  //     the response body should include a string exactly as follows: "username and password required".

  //   4- On FAILED registration due to the `username` being taken,
  //     the response body should include a string exactly as follows: "username taken".
  // */
});

router.post('/login', (req, res) => {
  res.end('implement login, please!');
  /*
    IMPLEMENT
    You are welcome to build additional middlewares to help with the endpoint's functionality.

    1- In order to log into an existing account the client must provide `username` and `password`:
      {
        "username": "Captain Marvel",
        "password": "foobar"
      }

    2- On SUCCESSFUL login,
      the response body should have `message` and `token`:
      {
        "message": "welcome, Captain Marvel",
        "token": "eyJhbGciOiJIUzI ... ETC ... vUPjZYDSa46Nwz8"
      }

    3- On FAILED login due to `username` or `password` missing from the request body,
      the response body should include a string exactly as follows: "username and password required".

    4- On FAILED login due to `username` not existing in the db, or `password` being incorrect,
      the response body should include a string exactly as follows: "invalid credentials".
  */
});

module.exports = router;
