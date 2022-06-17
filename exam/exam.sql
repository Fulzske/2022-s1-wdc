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
VALUES(1, "Fulei", "a1629489@student.adelaide.edu.au", "123456789");

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255),
  duration int,
  genre varchar(255),
  PRIMARY KEY (id)
);

INSERT INTO movies (id, title, duration, genre)
VALUES(1, "The Hulk", 120, 'Action');

CREATE TABLE cinema_room(
  id int NOT NULL AUTO_INCREMENT,
  room_number int,
  PRIMARY KEY (id)
);

INSERT INTO cinema_room (id, room_number)
VALUES(1, "23");

CREATE TABLE screenings (
  id int NOT NULL AUTO_INCREMENT,
  movie_id int,
  cinema_room_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movies(id),
  FOREIGN KEY (cinema_room_id) REFERENCES cinema_room(id)
);

INSERT INTO screenings (id, movie_id, cinema_room_id)
VALUES(1, 1, 1);

CREATE TABLE seats (
  id int NOT NULL AUTO_INCREMENT,
  cinema_room_id int,
  seatnumber int,
  seatletter varchar(1),
  PRIMARY KEY (id),
  FOREIGN KEY (cinema_room_id) REFERENCES cinema_room(id)
);

INSERT INTO seats (id, seatnumber, seatletter, cinema_room_id)
VALUES(1, 1, "a", 1);

CREATE TABLE show_seats (
  id int NOT NULL AUTO_INCREMENT,
  seat_id int,
  price int,
  screening_id int,
  date date,
  PRIMARY KEY (id),
  FOREIGN KEY (seat_id) REFERENCES seats(id),
  FOREIGN KEY (screening_id) REFERENCES screenings(id)
);

INSERT INTO show_seats (id, seat_id, price, screening_id)
VALUES(1, 1, 12, 1);

CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  screening_id int,
  user_id int,
  date date,
  PRIMARY KEY (id),
  FOREIGN KEY (screening_id) REFERENCES screenings(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (seat_id) REFERENCES seats(id)
);

INSERT INTO reservations (id, screening_id, user_id, seat_id, date)
VALUES(1, 1, 1, 1, "2022-06-16");

