drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt timestamp not null,
    PRIMARY KEY (id)
);
select * from burgers;

-- \i  seeds.sql;  How can I make this sql file execute next, like a require('seeds.sql')?