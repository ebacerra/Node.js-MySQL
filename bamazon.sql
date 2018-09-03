DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Women's Blouse", Women, 24.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Food", Pet Supplies, 46.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cracking The Coding Interview", Computer Programming, 34.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Colgate", Beauty & Personal Care, 3.49, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calphalon Cookware", Home & Kitchen, 540.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Designer Purses", Womens Fashion, 300, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crossfit Shoes", Womens Athletic, 64.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Alexa", Home Audio, 124.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mountain Bike", Outdoor Recreation, 160.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scented Candles", Beauty & Personal Care, 28.79, 200);