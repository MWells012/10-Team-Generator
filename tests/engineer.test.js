const  Engineer = require('../lib/ Engineer');
const  newEngineer = new  Engineer ('Test', '123', 'test@email.com', 'test_test');

test('test if we can get the constructor values for the  newEngineer', () => {
    expect( newEngineer.name).toBe('Test');
    expect( newEngineer.id).toBe('123');
    expect( newEngineer.email).toBe('test@email.com');
    expect( newEngineer.getGithubID).toBe('test_test');
});

test('test if we can get the name from the getName() method', () => {
    expect( newEngineer.getName()).toBe('Test');
});

test('test if we can get the id from the getID() method', () => {
    expect( newEngineer.getID()).toBe('123');
});
test('test if we can get the email from the getEmail() method', () => {
    expect( newEngineer.getEmail()).toBe('test@gmail.com');
});
test('test if we can get the github UserName from the GithubID() method', () => {
    expect( newEngineer.getGithubID()).toBe('test_test');
});
test('test if we can get the role from the getRole() method',() => {
    expect( newEngineer.getRole()).toBe(' newEngineer');
});