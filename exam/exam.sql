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

INSERT INTO users (username, email, password)
VALUES("Fulei", "a1629489@student.adelaide.edu.au", '123456789');

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255),
  duration int,
  genre varchar(255),
  PRIMARY KEY (id)
);

INSERT INTO movies (id, title, duration, genre)
VALUES(1, "The Hulk", 120, 'Action');

CREATE TABLE theater_room(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (id)
);

INSERT INTO theater_room (id, name)
VALUES(1, "Theater room one");

CREATE TABLE screenings (
  id int NOT NULL AUTO_INCREMENT,
  movie_id int,
  theater_room_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movies(id),
  FOREIGN KEY (theater_room_id) REFERENCES theater_room(id)
);

INSERT INTO screenings (id, movie_id, theater_room_id)
VALUES(1, 1, 1);

CREATE TABLE seats (
  id int NOT NULL AUTO_INCREMENT,
  theater_room_id int,
  seatnumber int,
  seatletter varchar(1),
  PRIMARY KEY (id),
  FOREIGN KEY (theater_room_id) REFERENCES theater_room(id)
);

INSERT INTO seats (id, seatnumber, seatletter, theater_room_id)
VALUES(1, 1, "a", 1);

CREATE TABLE reserved_seats (
  id int NOT NULL AUTO_INCREMENT,
  seat_id int,
  theater_room_id int,
  screening_id int,
  date date,
  PRIMARY KEY (id),
  FOREIGN KEY (seat_id) REFERENCES seats(id),
  FOREIGN KEY (theater_room_id) REFERENCES theater_room(id),
  FOREIGN KEY (screening_id) REFERENCES screenings(id)
);

INSERT INTO reserved_seats (id, seat_id, theater_room_id, screening_id, date)
VALUES(1, 1, 1, 1, "2022-06-16");

CREATE TABLE reservations (
  id int NOT NULL AUTO_INCREMENT,
  screening_id int,
  user_id int,
  seat_id int,
  date date,
  PRIMARY KEY (id),
  FOREIGN KEY (screening_id) REFERENCES screenings(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (seat_id) REFERENCES seats(id)
);

INSERT INTO reservations (id, screening_id, user_id, seat_id, date)
VALUES(1, 1, 1, 1, "2022-06-16");

