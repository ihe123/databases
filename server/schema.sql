CREATE DATABASE myChat1;

USE myChat1;

CREATE TABLE users (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL
 /* Describe your table here.*/
);

CREATE TABLE messages (
	id INTEGER PRIMARY KEY,
  message TEXT NOT NULL,
  user INTEGER,
  FOREIGN KEY(user) REFERENCES users(id)
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  room TEXT NOT NULL
);

CREATE TABLE connection (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id),
  message_id INTEGER,
  FOREIGN KEY(message_id) REFERENCES messages(id),
  room_id INTEGER,
  FOREIGN KEY(room_id) REFERENCES rooms(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

