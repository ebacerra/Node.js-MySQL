var mysql = require("mysql");
var inquirer = require("inquirer");
// var tables = require("cli-table2") not sure if I should I used this - was suggested on stackOverflow

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

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    custDisplay();
});

// need to access tables selection for stock quantity.
function custDisplay() {
    connection.query(`SELECT * FROM products WHERE stock_quantity`, function (err, res) {
        if (err) throw err;
        console.log(res);

    });
}

inquirer
    .prompt([
        {
            name: "custID",
            type: "input",
            message: "What's the ID of the product would you like to buy?",
            // choices: []

        },
        {
            name: "custUnit",
            type: "input",
            message: "How many units of the product they would like to buy?"
        }
    ])

    .then(function (answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.custID.toUpperCase() === "") {
            // how to access stock inventory?
        }
        else {
            console.log("Insufficient quantity!")
        }
    });
connection.end();
