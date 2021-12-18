const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')



describe('sanity', () => {
	it('at least one test exists', () => {
		expect(true).not.toBe(false)
	})
})

beforeAll(async ()=> {
	await db.migrate.rollback()
	await db.migrate.latest()
})

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})


describe('Register', () => {
  let res
	beforeAll(async () => {
		res = await request(server).post('/api/auth/register').send({username: ""})
	})
	
	it('model can add a user', async () => {
				
	})
})
