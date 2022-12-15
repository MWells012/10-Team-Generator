const inquirer = require ('inquirer');
const fs = require ('fs');

const manager = require ('./lib/manager');
const engineer = require ('./lib/engineer');
const intern = require ('./lib/intern');
const employee = require ('./lib/employee');

const HTMLteamPage = require ('./dist/card-generator');