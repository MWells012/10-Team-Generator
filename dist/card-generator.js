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

const generateHTML = (data) => {
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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    
    <body>
    
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1>My Team</h1>
                </div>
            </div>
            
        </header>
<main class = "row justify-content-center">
${createCard(data)}
</main>
</body>
</html>
    `;
};

const infoManager = (data) => {
    return 
    `
    
    <div class="col-4-sm-12 ">
                <div class="card" style="width: 25rem;">
                    <div class="card-header text-center"> 
                        <h5> Name </h5>
                        <h6> Manager </h6> 
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"> ID Number: </li>
                            <li class="list-group-item"> Email: <a href="email@mail.com"> email@mail.com</a> </li>
                            <li class="list-group-item"> Office Number: </li>
                        </ul>
                    </div>
                </div>
            </div>
    
    `
}

const infoEngineer = (data) => {
    return
    `
    <div class="col-4-sm-12 ">
                <div class="card" style="width: 25rem;">
                    <div class="card-header text-center"> 
                        <h5> Name </h5>
                        <h6> Engineer </h6> 
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"> ID Number: </li>
                            <li class="list-group-item"> Email: <a href="email@mail.com"> email@mail.com</a> </li>
                            <li class="list-group-item"> Office Number: </li>
                        </ul>
                    </div>
                </div>
            </div>
    
    `
}

const infoIntern = (data) => {
    return
    `
    
    <div class="col-4-sm-12 ">
                <div class="card" style="width: 25rem;">
                    <div class="card-header text-center"> 
                        <h5> Name </h5>
                        <h6> Intern </h6> 
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"> ID Number: </li>
                            <li class="list-group-item"> Email: <a href="email@mail.com"> email@mail.com</a> </li>
                            <li class="list-group-item"> Office Number: </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        `
}

module.exports = generateHTML;