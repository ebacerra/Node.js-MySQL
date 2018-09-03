var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_DB",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
        .prompt([
            {
                name: "ID of item",
                type: "input",
                message: "What's the ID of the product would you like to buy?"
                // choices: ["POST", "BID"] 
            },
            {
                name: "ID of item",
                type: "input",
                message: "how many units of the product they would like to buy?"
            }
        ])
    // .then(function (answer) {
    //     // based on their answer, either call the bid or the post functions
    //     if (answer.postOrBid.toUpperCase() === "POST") {
    //         postAuction();
    //     }
    //     else {
    //         bidAuction();
    //     }
    // });
};
