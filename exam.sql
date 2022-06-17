DROP DATABASE exam;
CREATE DATABASE exam;
USE exam;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(64),
  email varchar(64),
  password varchar(64),
  PRIMARY KEY (id)
);

INSERT INTO users (id, username, email, password)
VALUES(1, "Fulei", "a1629489@student.adelaide.edu.au", "123456789");

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255),
  duration int,
  genre varchar(64),
  description varchar(255),
  PRIMARY KEY (id)
);

INSERT INTO movies (id, title, duration, genre, description)
VALUES(1, "The Hulk", 120, 'Action', "hulk go smash!!!");

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
  startTime datetime,
  endTime datetime,
  date datetime,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
  FOREIGN KEY (cinema_room_id) REFERENCES cinema_room(id) ON DELETE CASCADE
);

INSERT INTO screenings (id, movie_id, cinema_room_id, startTime, endTime, date)
VALUES(1, 1, 1, "2022-06-16 10:00:00.000", "2022-06-17 18:00:00.000", "2022-06-16");

CREATE TABLE seats (
  id int NOT NULL AUTO_INCREMENT,
  cinema_room_id int,
  seatnumber int,
  seatletter varchar(1),
  PRIMARY KEY (id),
  FOREIGN KEY (cinema_room_id) REFERENCES cinema_room(id) ON DELETE CASCADE
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
  FOREIGN KEY (seat_id) REFERENCES seats(id) ON DELETE CASCADE,
  FOREIGN KEY (screening_id) REFERENCES screenings(id) ON DELETE CASCADE
);

INSERT INTO show_seats (id, seat_id, price, screening_id)
VALUES(1, 1, 12, 1);

CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  screening_id int,
  user_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (screening_id) REFERENCES screenings(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO bookings (id, screening_id, user_id)
VALUES(1, 1, 1);

CREATE TABLE reservations (
  id int NOT NULL AUTO_INCREMENT,
  booking_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);

