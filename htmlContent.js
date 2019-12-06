const employee = require("./Employee");
const manager = require("./Manager");
const firstEngineer = require("./Engineer");
const secondEngineer = require("./Engineer");
const thirdEngineer = require("./Engineer");

const intern = require("./Intern");
const file = require("./index");

console.log(file);

let htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        h1 {
            background-color: rgb(255, 101, 101);
            color: white;
            font-size: x-large;
            padding: 20px;
            text-align: center;
        }
        
        .container {
            margin: 5% 20% 20% 20%;
            line-height: 1px;
        }
        
        .blue {
            float: left;
            width: 30%;
            background-color: silver;
            margin: 8px;
        }
        
        .green {
            background-color: rgb(9, 140, 247);
            color: white;
            padding: 5px;
            font-size: x-large;
            text-align: center;
        }
    </style>
    <title>Document</title>
</head>

<body>
    <h1>My Team</h1>

    <div class="container">
        <div class="blue">
            <div class="green">
                <h3>${file.manager.getName()}</h3>
                <h5>Manager</h5>
            </div>
            <div>
                <p>ID: ${file.manager.getId()} </p>
                <p>Email: ${file.manager.getEmail()}</p>
                <p>Office Number: ${file.manager.getOfficeNumber()}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${firstEngineer.getName()}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${firstEngineer.getId()}</p>
                <p>Email: ${firstEngineer.getEmail()}</p>
                <p>Github Username: ${firstEngineer.getGithub()}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${secondEngineer.getName()}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${secondEngineer.getId()}</p>
                <p>Email: ${secondEngineer.getEmail()}</p>
                <p>Github Username: ${secondEngineer.getGithub()}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${thirdEngineer.getName()}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${thirdEngineer.getId()}</p>
                <p>Email: ${thirdEngineer.getEmail()}</p>
                <p>Github Username: ${thirdEngineer.getGithub()}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${intern.getName()}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${intern.getId()}</p>
                <p>Email: ${intern.getEmail()}</p>
                <p>School : ${intern.getSchool()}</p>
            </div>
        </div>

    </div>

</body>

</html>`;

module.exports = htmlContent;