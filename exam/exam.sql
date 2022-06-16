CREATE DATABASE web_exam;
USE web_exam;

CREATE Table User (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(25),
  email varchar(255),
  password varchar(255),
  PRIMARY KEY (id)
);
