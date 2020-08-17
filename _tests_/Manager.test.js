const Manager = require('../lib/Manager')

jest.mock('../lib/Manager')

test('check for office number', () => {
    const manager = new Manager('Mike')
    expect(manager.officeNumber).toEqual(expect.any(String))
})

test('gets role', () => {
    const manager = new Manager('Mike')
    expect(manager.getRole()).toHavePropery('role')
})