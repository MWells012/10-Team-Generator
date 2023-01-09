const inquirer = require ('inquirer');
const fs = require ('fs');
const Employee = require ('./lib/employee');
const Manager = require ('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
const HTMLteamPage = require ('./dist/card-generator');
const { off } = require('process');

const theTeam = [];

function addManager() {
    console.log("Welcome! This application allows you to build your team and view it on one platform. To create a card for an individual please follow the following prompts:")
    inquirer.prompt([
        {
            type:"input",
            message: "Name?",
            name: "managerName",
            validate: managerName => {
                if(managerName){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type:"input",
            message: "Employee ID number?",
            name: "managerID",
            validate: managerID => {
                if(managerID){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type:"input",
            message: "Email?",
            name: "managerEmail",
            validate: managerEmail => {
                if(managerEmail){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type:"input",
            message: "Office Number?",
            name: "officeNumber",
            validate: officeNumber => {
                if(officeNumber){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
    ]).then (data => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNumber);
        theTeam.push(manager);
        
        addEmployee();
    })
};

function addEmployee() {
    return inquirer.prompt([
        {
            type:"list",
            message: "What is this employee's position?",
            name: "employeeRole",
            choices: ["Engineer", "Intern"]
        }
    ]).then (function(answers){
        switch(answers.employeeRole){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name?",
            name: "engineerName",
            validate: engineerName => {
                if(engineerName){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Employee ID Number?",
            name: "engineerID",
            validate: engineerID => {
                if(engineerID){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Email?",
            name: "engineerEmail",
            validate: engineerEmail => {
                if(engineerEmail){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Github Username?",
            name: "internSchool",
            validate: internSchool => {
                if(internSchool){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
    ]).then (data => {
        const engineer = new Engineer(data.engineerName, data.engineerEmail, data.engineerSchool, data.engineerID);
        theTeam.push(engineer);
        menu();
    })

}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name?",
            name: "internName",
            validate: internName => {
                if(internName){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Intern ID Number?",
            name: "internID",
            validate: internID => {
                if(internID){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Email?",
            name: "internEmail",
            validate: internEmail => {
                if(internEmail){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is their current University?",
            name: "internSchool",
            validate: internSchool => {
                if(internSchool){
                    return true;
                } else {
                    console.log("This is mandatory, please try again.");
                    return false;
                }
            }
        },
    ]).then (data => {
        const intern = new Intern(data.internName, data.internEmail, data.internSchool, data.internID);
        theTeam.push(intern);
        menu();
    })

}

function menu() {
    return inquirer.prompt([
        {
            type:"list",
            message: "Add another employee?",
            name:"addEmployee",
            choices: ["Yes", "No"]
        }
    ]).then (function(answers){
        switch(answers.addEmployee){
            case "Yes":
                addEmployee();
                break;
            case "No":
                createTeam();
                break;
        }
});
};

function createTeam() {
    const renderHTML = HTMLteamPage(theTeam)
    fs.writeFile('./index.html', renderHTML, err =>{
        if(err){
            console.log(err);
            return;
        }else{
            console.log("Success! Your team has been created in the index.html file")
        }
    })

}

addManager();