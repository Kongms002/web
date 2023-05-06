CREATE DATABASE db_test;

CREATE TABLE users(
    id VARCHAR2(30) NOT NULL,
    name VARCHAR2(30) NOT NULL,
    pw VARCHAR2(30) NOT NULL,
    in_date datetime DEFAULT current_timestamp,

    PRIMARY KEY (id)
);

show tables;
desc users;

INSERT INTO users(id, name, pw)
    values("")