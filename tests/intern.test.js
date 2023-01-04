const Intern = require('../lib/newIntern');
const newIntern = new Intern ('Test', '123', 'test@email.com', 'university');

test('test if we can get the constructor values for the newIntern', () => {
    expect(newIntern.name).toBe('Test');
    expect(newIntern.id).toBe('123');
    expect(newIntern.email).toBe('test@email.com');
    expect(newIntern.school).toBe('university');
});

test('test if we can get the name from the getName() method', () => {
    expect(newIntern.getName()).toBe('Test');
});

test('test if we can get the id from the getID() method', () => {
    expect(newIntern.getID()).toBe('123');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(newIntern.getEmail()).toBe('test@gmail.com');
});

test('test if we can get the email from the getSchool() method', () => {
    expect(newIntern.getSchool()).toBe('university');
});

test('test if we can get the role from the getRole() method',() => {
    expect(newIntern.getRole()).toBe('Intern');
});