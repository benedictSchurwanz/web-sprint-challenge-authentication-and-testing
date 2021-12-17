const bcrypt = require('bcryptjs')
const { BCRYPT_ROUNDS } = require('../../config')

exports.seed = async function (knex) {
	await knex('users')
		.insert({
			username: 'user',
			password: bcrypt.hashSync("1234", BCRYPT_ROUNDS),
		})
	await knex('users')
		.insert({
			username: 'slarty',
			password: bcrypt.hashSync("bartfast", BCRYPT_ROUNDS),
		})
}