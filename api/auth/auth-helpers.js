const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, BCRYPT_ROUNDS } = require('../../config')

function encryptPassword(pw) {
  return bcrypt.hashSync(pw, BCRYPT_ROUNDS)
}

function tokenBuilder(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }
  const options = {
    expiresIn: '1d'
  }
	
	return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = {
  tokenBuilder,
  encryptPassword
}
