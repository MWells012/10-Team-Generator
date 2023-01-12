const createCard = data => {
    var employeeInfo = '';
    for( var i = 0; i < data.length; i ++){
        console.log(data[i])
        if(data[i].getRole() === 'Manager'){
            employeeInfo += infoManager(data[i]);

        }else if(data[i].getRole() === 'Intern'){
                employeeInfo += infoIntern(data[i]);

        }else if(data[i].getRole() === 'Engineer'){
            employeeInfo += infoEngineer(data[i]);
        }
    }
    return employeeInfo;
}

const createIndex = (data) => {
    console.log(data)

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    
    <body>
    
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-4">The Team</h1>
                </div>
            </div>
            
        </header>

<main class = "row">
${createCard(data)}
</main>
</body>
</html>
    `;
};

const infoManager = (data) => {
    return `
    <div class="col-4-sm-12 ">
    <div class="card" style="width: 18rem;">
        <div class = "card-header">
            <h5>${data.getName()}</h5>
            <h6> Manager</h6>
        </div>
    
        <div>
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office Number: ${data.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>
    `
}

const infoIntern = (data) => {
    return `
    <div class="col-4-sm-12">
    <div class="card" style="width: 18rem;">
        <div class = "card-header">
            <h5>${data.getName()}</h5>
            <h6> Intern</h6>
            
        </div>
    
        <div>
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
    </div>
</div>
    `
}

const infoEngineer = (data) => {
    return `
    <div class="col-4-sm-12 ">
    <div class="card" style="width: 18rem;">
        <div class = "card-header">
            <h5>${data.getName()}</h5>
            <h6>Engineer</h6>
            
        </div>
    
        <div>
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
            </ul>
        </div>
    </div>
</div>
    `
}

module.exports = createIndex;
