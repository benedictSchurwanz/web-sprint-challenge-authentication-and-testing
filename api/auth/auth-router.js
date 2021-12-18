const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../users/users-model')
const { tokenBuilder, encryptPassword } = require('./auth-helpers')

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const newUser = {
      username,
      password: encryptPassword(password)
    }
    const created = await User.add(newUser)
    res.status(200).json({ id: created.id, username: created.username, password: created.password })
  } catch (err) {
    next(err)
  }
  // MW #1
  // MW #2a
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  User.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {// successful login
        const token = tokenBuilder(user)
        res.status(200).json({
          message: `welcome, ${user.username}`,
          token
        })
      } else {
        next({ status: 401, message: "invalid credentials" })
      }
    })
    .catch(next)

  // MW #1
  // MW #2b
})

module.exports = router;
