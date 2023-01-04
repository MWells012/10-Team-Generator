const Employee = require('../lib/employee');
const employee = new Employee ('Test', '123', 'test@email.com');

test('test if we can get the constructor values for the employee', () => {
    expect(employee.name).toBe('Test');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('test@email.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Test');
});

test('test if we can get the id from the getID() method', () => {
    expect(employee.getID()).toBe('123');
});
test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('test@email.com');
});
test('test if we can get the role from the getRole() method',() => {
    expect(employee.getRole()).toBe('Employee');
});