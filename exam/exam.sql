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
VALUES(10, "The Hulk", "120", 'Action');

CREATE TABLE theater_room {
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (id)
};

INSERT INTO theater_room (id, name)
VALUES(1, "Theater #1");

CREATE TABLE screening {
  id int NOT NULL AUTO_INCREMENT,
  movie_id int,
  FOREIGN KEY (id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (friend_id) REFERENCES users(user_id) ON DELETE CASCADE
};

