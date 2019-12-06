const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
var fs = require('fs');
var prompt = require('prompt');


prompt.start();
prompt.get(["managerName", "id", "email", "officeNumber"], function(err, result) {
    var manager = new Manager(`${result.managerName}`, `${result.id}`, `${result.email}`, `${result.officeNumber}`);
    console.log(`The new manager is ${result.managerName} with id ${result.id}, email ${result.email} and office number ${result.officeNumber}`);

    prompt.get(["engineerName", "id", "email", "github"], function(err, result) {
        var firstEngineer = new Engineer(`${result.engineerName}`, `${result.id}`, `${result.email}`, `${result.github}`);
        console.log(`The new engineer is ${result.engineerName} with id ${result.id}, email ${result.email} and Github username ${result.github}`);

        prompt.get(["engineerName", "id", "email", "github"], function(err, result) {
            var secondEngineer = new Engineer(`${result.engineerName}`, `${result.id}`, `${result.email}`, `${result.github}`);
            console.log(`The new engineer is ${result.engineerName} with id ${result.id}, email ${result.email} and Github username ${result.github}`);

            prompt.get(["engineerName", "id", "email", "github"], function(err, result) {
                var thirdEngineer = new Engineer(`${result.engineerName}`, `${result.id}`, `${result.email}`, `${result.github}`);
                console.log(`The new engineer is ${result.engineerName} with id ${result.id}, email ${result.email} and Github username ${result.github}`);

                prompt.get(["internName", "id", "email", "school"], function(err, result) {
                    var intern = new Intern(`${result.internName}`, `${result.id}`, `${result.email}`, `${result.school}`);
                    console.log(`The intern is ${result.internName} with id ${result.id}, email ${result.email} and in  ${result.school} school`);

                    const htmlContent = `<!DOCTYPE html>
                    <html lang="en">
                    
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <style>
                        * {
                            box-sizing: border-box;
                            margin: 0px;
                            padding: 0px;
                        }
                        
                        h1 {
                            background-color: rgb(255, 101, 101);
                            color: white;
                            font-size: x-large;
                            padding: 20px;
                            text-align: center;
                        }
                        
                        .container {
                            margin: 5% auto;
                            max-width: 900px;
                        }
                        
                        .blue {
                            min-height: 15em;
                            float: left;
                            width: 32.33%;
                            background-color: silver;
                            margin: 0.5%;
                        }
                        
                        .text-box {
                            padding: 2em;
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
                                    <h3>${manager.getName()}</h3>
                                    <h5>Manager</h5>
                                </div>
                                <div>
                                    <p>ID: ${manager.getId()} </p>
                                    <p>Email: ${manager.getEmail()}</p>
                                    <p>Office Number: ${manager.getOfficeNumber()}</p>
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
                    fs.writeFile('team1.html', htmlContent, err => {
                        if (err) throw err;
                        console.log('Saved!');
                    });

                });
            });
        });
    });
});