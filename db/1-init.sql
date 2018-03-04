create table users
(
	id SERIAL PRIMARY KEY,
	email VARCHAR
);

create table goals
(
	id SERIAL,
	name VARCHAR,
	description VARCHAR,
	period VARCHAR,
	owner integer NOT NULL REFERENCES users
);