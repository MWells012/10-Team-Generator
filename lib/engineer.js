const Employee = require ('./employee');

class Engineer extends Employee {
    constructor(name, id, email, GithubID) {
        super(name, id, email);
        this.GithubID = GithubID;
    }
    getGithubID() {
        return this.GithubID;
    }
    getRole () {
        return "Engineer";
    }
}
module.exports = Engineer;