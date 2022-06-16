DROP DATABASE exam;
CREATE DATABASE exam;
USE exam;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255),
  email varchar(255),
  password varchar(255),
  PRIMARY KEY (id)
);

INSERT INTO users (id, username, email, password)
VALUES(1, "Fulei", "a1629489@student.adelaide.edu.au", '123456789');

CREATE TABLE movies {
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255),
  duration int,
  genre varchar(255),
  PRIMARY KEY (id)
};

INSERT INTO movies (id, title, duration, genre)
VALUES(10, "The Hulk", "Nguyen", '2016-12-21', 'nguyen@gamil.com', 0213123, 'adelaide', 12, 'Australia', 'SA', 5000, true );


