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
    connection.query(`SELECT * FROM products;`, function (err, res) {
        if (err) throw err;

        var choice = [];

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " : " + res[i].product_name);
            choice.push(res[i].item_id)
        }
        console.log(choice)


        inquirer
            .prompt([
                {
                    name: "itemID",
                    type: "input",
                    message: "What's the ID of the product would you like to buy?",
                    // choices: [choice]

                },
                {
                    name: "custUnit",
                    type: "input",
                    message: "How many units of the product would you like to buy?"
                }
            ])
            // this is not working
            .then(function (answer) {
                // based on their answer, checking if it's not in-stock
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].item_id === parseInt(answer.itemID)) {
                        chosenItem = res[i];
                        console.log('chosen item', chosenItem);
                    }
                }
                if (chosenItem.stock_quantity >= parseInt(answer.custUnit)) {
                    console.log("sufficient quantity"); //we stopped here************ checking^^^

                    var newQuantity = chosenItem.stock_quantity - parseInt(answer.custUnit);
                    console.log(typeof newQuantity);
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: newQuantity
                            },
                            {
                                item_id: chosenItem.item_id
                            }
                        ],
                        function (err) {
                            if (err) throw err;
                            console.log("Order placed successfully!");
                            custDisplay();
                        }
                    );


                } else {
                    console.log("Insufficient quantity! Please select another product")
                }

            }).catch(function (err) {
                console.log(err)
            })
    });



};




// 
// if (answer.custUnit > answer.stock_quantity) {
//     console.log("You're in luck, we still have them in-stock!" + answer) // how to access stock inventory?
// }
// else {
//     console.log("Insufficient quantity!")
// }