const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const userInput = [];

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your manager's phone number?",
            name: "managerPhone"
        },
        {
            type: "input",
            message: "What is your 1st engineer's name?",
            name: "engineer1Name"
        },
        {
            type: "input",
            message: "What is your 1st engineer's id?",
            name: "engineer1Id"
        },
        {
            type: "input",
            message: "What is your 1st engineer's email?",
            name: "engineer1Email"
        },
        {
            type: "input",
            message: "What is your 1st engineer's github username?",
            name: "engineer1Github"
        },
        {
            type: "input",
            message: "What is your 2nd engineer's name?",
            name: "engineer2Name"
        },
        {
            type: "input",
            message: "What is your 2nd engineer's id?",
            name: "engineer2Id"
        },
        {
            type: "input",
            message: "What is your 2nd engineer's email?",
            name: "engineer2Email"
        },
        {
            type: "input",
            message: "What is your 2nd engineer's github username?",
            name: "engineer2Github"
        },
        {
            type: "input",
            message: "What is your 3rd engineer's name?",
            name: "engineer3Name"
        },
        {
            type: "input",
            message: "What is your 3rd engineer's id?",
            name: "engineer3Id"
        },
        {
            type: "input",
            message: "What is your 3rd engineer's email?",
            name: "engineer3Email"
        },
        {
            type: "input",
            message: "What is your 3rd engineer's github username?",
            name: "engineer3Github"
        },
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        }
    ])
    .then((response) => {



        let renderHtml = `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../Assets/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading shadow-sm bg-white rounded">
                <h1 class="text-center">Terbo Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-md-flex justify-content-center">
                
<div class="card employee-card shadow-sm bg-white rounded">
    <div class="card-header">
        <h2 class="card-title">${response.managerName}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${response.managerId}</li>
            <li class="list-group-item">Email: <a href="mailto:${response.managerEmail}">${response.managerEmail}</a></li>
            <li class="list-group-item">Office number: ${response.managerPhone}</li>
        </ul>
    </div>
</div>

<div class="card employee-card shadow-sm bg-white rounded">
    <div class="card-header">
        <h2 class="card-title" id="engineer-name">${response.engineer1Name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item" id="engineer-id">ID: ${response.engineer1Id}</li>
            <li class="list-group-item" id="engineer-email">Email: <a href="mailto:${response.engineer1Email}">${response.engineer1Email}</a></li>
            <li class="list-group-item" id="engineer-github">GitHub: <a href="https://github.com/${response.engineer1Github}"
                    target="_blank" rel="noopener noreferrer">${response.engineer1Github}</a></li>
        </ul>
    </div>
</div>

<div class="card employee-card shadow-sm bg-white rounded">
    <div class="card-header">
        <h2 class="card-title" id="engineer-name">${response.engineer2Name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item" id="engineer-id">ID: ${response.engineer2Id}</li>
            <li class="list-group-item" id="engineer-email">Email: <a href="mailto:${response.engineer2Email}">${response.engineer2Email}</a></li>
            <li class="list-group-item" id="engineer-github">GitHub: <a href="https://github.com/${response.engineer2Github}"
                    target="_blank" rel="noopener noreferrer">${response.engineer2Github}</a></li>
        </ul>
    </div>
</div>

<div class="card employee-card shadow-sm bg-white rounded">
    <div class="card-header">
        <h2 class="card-title" id="engineer-name">${response.engineer3Name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item" id="engineer-id">ID: ${response.engineer3Id}</li>
            <li class="list-group-item" id="engineer-email">Email: <a href="mailto:${response.engineer3Email}">${response.engineer3Email}</a></li>
            <li class="list-group-item" id="engineer-github">GitHub: <a href="https://github.com/${response.engineer3Github}"
                    target="_blank" rel="noopener noreferrer">${response.engineer3Github}</a></li>
        </ul>
    </div>
</div>

<div class="card employee-card shadow-sm bg-white rounded">
    <div class="card-header">
        <h2 class="card-title">${response.internName}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${response.internId}</li>
            <li class="list-group-item">Email: <a href="mailto:${response.internEmail}">${response.internEmail}</a></li>
            <li class="list-group-item">School: ${response.internSchool}</li>
        </ul>
    </div>
</div>
            </div>
        </div>
    </div>
</body>

</html>`

        fs.writeFile('team.html', renderHtml, err => {
            if (err) {
                throw err;
            }
        })
    })
