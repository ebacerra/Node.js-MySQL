DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  Item_ID INT (11) NOT NULL AUTO_INCREMENT,
  Product_Name VARCHAR(45) NULL,
  Department_Name VARCHAR(45) NULL,
  Price DECIMAL(10,2) NULL,
  Stock_Quantity INT (10) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Women's Blouse", Women, 24.99, 10);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Dog Food", Pet Supplies, 46.99, 6);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Cracking The Coding Interview", Computer Programming, 34.99, 5);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Colgate", Beauty & Personal Care, 3.49, 10);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Calphalon Cookware", Home & Kitchen, 540.99, 3);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Designer Purses", Womens Fashion, 300, 8);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Crossfit Shoes", Womens Athletic, 64.99, 9);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Alexa", Home Audio, 124.99, 3);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Mountain Bike", Outdoor Recreation, 160.99, 7);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Scented Candles", Beauty & Personal Care, 28.79, 9);