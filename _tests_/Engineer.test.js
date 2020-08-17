const Engineer = require('../lib/Engineer')

jest.mock('../lib/Engineer')

test('check for github', () => {
    const engineer = new Engineer('Mike')
    expect(engineer.github).toEqual(expect.any(String))
})

test('gets GITHUB link', () => {
    const engineer = new Engineer('Mike')
    expect(engineer.getGithub()).toHavePropery('github')
})

test('gets role', () => {
    const engineer = new Engineer('Mike')
    expect(engineer.getRole()).toHavePropery('role')
})