const db = require('../../data/dbConfig')

module.exports = {
	add,
	findById,
}

function findById(id) {
	return db('users').where({id}).first()
}

async function add(user) {
	const [id] = await db('users').insert(user)
	return findById(id);
} // returns the newly added user object from the db