const router = require('express').Router(); // require(express) & router = express.Router
const bcrypt = require('bcryptjs')
const User = require('../users/users-model')

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const newUser = {
      username,
      password: bcrypt.hashSync(password, 8)
    }
    const created = await User.add(newUser)
    res.status(200).json({ id: created.id, username: created.username, password: created.password })
  } catch (err) {
    next(err)
  }
  // MW #1
  // MW #2
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  
  console.log(User.findBy({username}));

  // 2- On SUCCESSFUL login,
  //   the response body should have `message` and `token`:
  //   {
  //     "message": "welcome, Captain Marvel",
  //     "token": "eyJhbGciOiJIUzI ... ETC ... vUPjZYDSa46Nwz8"
  //   }

  // MW #1
  // MW #2
})

module.exports = router;
