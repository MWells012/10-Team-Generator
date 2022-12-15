const infoManager = (data) => {
    return 
    `
    
    <div class="col-4-sm-12 ">
                <div class="card" style="width: 20rem;">
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
                <div class="card" style="width: 20rem;">
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
                <div class="card" style="width: 20rem;">
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

const HTMLteamPage = (data) => {
    return
    `

    <!DOCTYPE html>
<html lang="EN">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Team Generator</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./dist/style.css">
    </head>

    <body>

        <header>
            <div class="jumbotron square">
                <div class="container text-center">
                    <h2> The Team </h2>
                </div>
            </div>
        </header>

        <section class=" row justify-content-center">
        { cards go here }

        </section>

    </body>

</html>
    `
};

module.exports = HTMLteamPage;