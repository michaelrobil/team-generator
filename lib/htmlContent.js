var managerData = require('./../savedData/manager.json');
var firstEngineerData = require('./../savedData/firstEng.json');
var secondEngineerData = require('./../savedData/secondEng.json');
var thirdEngineerData = require('./../savedData/thirdEng.json');
var internData = require('./../savedData/intern.json');

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
                <h3>${managerData[0]}</h3>
                <h5>Manager</h5>
            </div>
            <div>
                <p>ID: ${managerData[1]} </p>
                <p>Email: ${managerData[2]}</p>
                <p>Office Number: ${managerData[3]}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${firstEngineerData[0]}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${firstEngineerData[1]}</p>
                <p>Email: ${firstEngineerData[2]}</p>
                <p>Github Username: ${firstEngineerData[3]}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${secondEngineerData[0]}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${secondEngineerData[1]}</p>
                <p>Email: ${secondEngineerData[2]}</p>
                <p>Github Username: ${secondEngineerData[3]}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${thirdEngineerData[0]}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${thirdEngineerData[1]}</p>
                <p>Email: ${thirdEngineerData[2]}</p>
                <p>Github Username: ${thirdEngineerData[3]}</p>
            </div>
        </div>
        <div class="blue">
            <div class="green">
                <h3>${internData[0]}</h3>
                <h5>Engineer</h5>
            </div>
            <div>
                <p>ID: ${internData[1]}</p>
                <p>Email: ${internData[2]}</p>
                <p>School : ${internData[3]}</p>
            </div>
        </div>
    </div>
</body>

</html>`;

module.exports = htmlContent;