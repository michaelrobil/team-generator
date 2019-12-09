const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const prompt = require('prompt');
const fs = require('fs');

const managerInfo = ["managerName", "id", "email", "officeNumber"];
const engineerInfo = ["engineerName", "id", "email", "github"];
const internInfo = ["internName", "id", "email", "school"];
var managerUpdated = [];
var firstEngineerUpdated = [];
var secondEngineerUpdated = [];
var thirdEngineerUpdated = [];
var internUpdated = [];

function writeNewFile() {
    setTimeout(function() {
        const htmlContent = require("./lib/htmlContent");
        fs.writeFile('./output/team.html', htmlContent, function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }, 500);
}

function engineerPrompt() {
    prompt.get(engineerInfo, function(err, result) {
        new Engineer(`${result.engineerName}`, `${result.id}`, `${result.email}`, `${result.github}`);
        firstEngineerUpdated.push(result.engineerName, result.id, result.email, result.github);

        prompt.get(engineerInfo, function(err, result) {
            new Engineer(`${result.engineerName}`, `${result.id}`, `${result.email}`, `${result.github}`);
            secondEngineerUpdated.push(result.engineerName, result.id, result.email, result.github);

            prompt.get(engineerInfo, function(err, result) {
                new Engineer(`${result.engineerName}`, `${result.id}`, `${result.email}`, `${result.github}`);
                thirdEngineerUpdated.push(result.engineerName, result.id, result.email, result.github);
                internPrompt();
            });
        });
    });
}

function internPrompt() {
    prompt.start();
    prompt.get(internInfo, function(err, result) {
        new Intern(`${result.internName}`, `${result.id}`, `${result.email}`, `${result.school}`);
        internUpdated.push(result.internName, result.id, result.email, result.school);
        saveData();
    });
}

function allPrompts() {
    prompt.start();
    prompt.get(managerInfo, function(err, result) {
        new Manager(`${result.managerName}`, `${result.id}`, `${result.email}`, `${result.officeNumber}`);
        managerUpdated.push(result.managerName, result.id, result.email, result.officeNumber);
        engineerPrompt();
    });
}

function saveData() {
    fs.writeFile("./savedData/manager.json", JSON.stringify(managerUpdated), function(err) { if (err) throw err });
    fs.writeFile("./savedData/firstEng.json", JSON.stringify(firstEngineerUpdated), function(err) { if (err) throw err });
    fs.writeFile("./savedData/secondEng.json", JSON.stringify(secondEngineerUpdated), function(err) { if (err) throw err });
    fs.writeFile("./savedData/thirdEng.json", JSON.stringify(thirdEngineerUpdated), function(err) { if (err) throw err });
    fs.writeFile("./savedData/intern.json", JSON.stringify(internUpdated), function(err) { if (err) throw err });
    writeNewFile();
}

allPrompts();