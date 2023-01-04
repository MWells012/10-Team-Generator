const Manager = require('../lib/Manager');
const newManager = new Manager ('Test', '123', 'test@email.com', '001');

test('test if we can get the constructor values for the newManager', () => {
    expect(newManager.name).toBe('Test');
    expect(newManager.id).toBe('123');
    expect(newManager.email).toBe('test@email.com');
    expect(newManager.officeNumber).toBe('001');
});

test('test if we can get the name from the getName() method', () => {
    expect(newManager.getName()).toBe('Test');
});

test('test if we can get the id from the getID() method', () => {
    expect(newManager.getID()).toBe('123');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(newManager.getEmail()).toBe('test@email.com');
});

test('test if we can get the email from the getOfficeNumber() method', () => {
    expect(newManager.getOfficeNumber()).toBe('001');
});

test('test if we can get the role from the getRole() method',() => {
    expect(newManager.getRole()).toBe('Manager');
});