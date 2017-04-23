DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL
 /* Describe your table here.*/
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  room TEXT NOT NULL
);

CREATE TABLE messages (
	id INTEGER PRIMARY KEY,
  message TEXT NOT NULL,
  user INTEGER,
  FOREIGN KEY(user) REFERENCES users(id),
  roomId INTEGER,
  FOREIGN KEY(roomId) REFERENCES rooms(id)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

