const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

describe('sanity', () => {
	it('at least one test exists', () => {
		expect(true).not.toBe(false)
	})
})

// describe('Register', () => {
  
// 	it('')
// })
