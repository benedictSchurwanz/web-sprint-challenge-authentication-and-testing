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
	// const pw = encryptPassword("mcboatface")
	const pw = "mcboatface"
	const un = "boaty"

	beforeAll(async () => {
		response = await request(server)
			.post('api/auth/register')
			.send({ username: un, password: pw })
	})

	it('model can add a user', async () => {
		expect(response.username).toEqual(un)
	})
})
