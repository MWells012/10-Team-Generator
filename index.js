const inquirer = require ('inquirer');
const fs = require ('fs');

const manager = require ('./lib/manager');
const engineer = require ('./lib/engineer');
const intern = require ('./lib/intern');
const employee = require ('./lib/employee');

const HTMLteamPage = require ('./dist/card-generator');

const theTeam = [];

function addManager() {
    console.log("Welcome! Here you can build your team. To create a card for an individual please follow the following prompts:")
    inquirer.createPromptModule([
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
    ]).then (data => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNumber);
        myTeam.push(manager);
        
        addEmployee();
    })
};

function addEmployee() {
    return inquirer.createPromptModule([
        {
            type:"list",
            message: "What is this employee's position?",
            name: "employeeRole",
            choice: ["Engineer", "Intern"]
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

}
function addIntern() {

}

function menu() {
    return inqui
}