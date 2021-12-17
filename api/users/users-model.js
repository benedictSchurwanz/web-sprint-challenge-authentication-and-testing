const db = require('../../data/dbConfig')

module.exports = {
	add,
	findById,
	findBy,
}

function findById(id) {
	return db('users').where({ id }).first()
}

function findBy(filter) {
	return db('users')
		.select('username', 'password')
		.where(filter)
}

async function add(user) {
	const [id] = await db('users').insert(user)
	return findById(id);
} // returns the newly added user object from the db