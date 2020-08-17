const Intern = require('../lib/Intern')

jest.mock('../lib/Intern')

test('check for school', () => {
    const intern = new Intern('Mike')
    expect(intern.school).toEqual(expect.any(String))
})

test('gets school', () => {
    const intern = new Intern('Mike')
    expect(intern.getSchool()).toHavePropery('school')
})

test('gets role', () => {
    const intern = new Intern('Mike')
    expect(intern.getRole()).toHavePropery('role')
})