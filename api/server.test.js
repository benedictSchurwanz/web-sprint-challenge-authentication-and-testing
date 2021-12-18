const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')
const { encryptPassword } = require('./auth/auth-helpers')
const User = require('./users/users-model')

describe('sanity', () => {
	it('at least one test exists', () => {
		expect(true).not.toBe(false)
	})
})

beforeAll(async () => {
	await db.migrate.rollback()
	await db.migrate.latest()
})

afterAll(async () => {
	await db.destroy()
})

it('correct environment', () => {
	expect(process.env.NODE_ENV).toBe('testing')
})

describe('Register', () => {
	let response
	const pw = encryptPassword("mcboatface")
	// const pw = "mcboatface"
	const un = "boaty"

	it('model can add user', async () => {
		await User.add({username: un, password: pw})
		
		const [newUser] = await db('users').where('id', 1)
		
		expect(newUser).toMatchObject({id: 1, username: un, password: pw})
	})
	
	// it('register request successful', async () => {
	// 	response = await request(server)
	// 		.post('api/auth/register')
	// 		.send({ username: un, password: pw })
	// 	expect(response.username).toEqual(un)
	// })
})
