const Employee = require('../lib/Employee.js')
const { TestResult } = require('@jest/types')
const Employee = require('../lib/Employee.js')
const Employee = require('../lib/Employee')

jest.mock('../lib/Employee')

test('creates an employee', () => {
    const employee = new Employee('Mike')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
})

test('gets name', () => {
    const employee = new Employee('Mike')
    expect(employee.getName()).toHavePropery('name')
})

test('gets id', () => {
    const employee = new Employee('Mike')
    expect(employee.getId()).toHavePropery('id')
})

test('gets email', () => {
    const employee = new Employee('Mike')
    expect(employee.getEmail()).toHavePropery('email')
})

test('gets role', () => {
    const employee = new Employee('Mike')
    expect(employee.getRole()).toHavePropery('role')
})