


CREATE TABLE persons (
	id int GENERATED ALWAYS AS IDENTITY,
	first_name varchar(20) NOT NULL,
	last_name varchar(20) NOT NULL,
	job varchar(20) NOT NULL,
	CONSTRAINT pk_persons PRIMARY KEY (
		id
	)
);

CREATE TABLE street_address (
	id int GENERATED ALWAYS AS IDENTITY,
	person_id int NOT NULL,
	state varchar(20) NOT NULL,
	city varchar(20) NOT NULL,
	street_addr varchar(30) NOT NULL,
	area_code int NOT NULL,
	CONSTRAINT pk_address PRIMARY KEY (
		id
	),
	FOREIGN KEY (person_id) REFERENCES persons (id)
);

INSERT INTO persons ("first_name", "last_name", "job") 
VALUES ('Steve', 'Oldfield', 'Developer');
INSERT INTO persons ("first_name", "last_name", "job") 
VALUES ('Luke', 'King', 'Developer');
INSERT INTO persons ("first_name", "last_name", "job") 
VALUES ('Randy', 'King', 'Developer');

INSERT INTO street_address ("person_id", "state", "city", "street_addr", "area_code") values ((select id from persons where first_name = 'Steve'), 'ID', 'Meridian', '1234 West Street', 83642);
INSERT INTO street_address ("person_id", "state", "city", "street_addr", "area_code") values ((select id from persons where first_name = 'Luke'), 'ID', 'Caldwell', '1234 East Ave.', 83605);
INSERT INTO street_address ("person_id", "state", "city", "street_addr", "area_code") values ((select id from persons where first_name = 'Randy'), 'ID', 'Boise', '1234 South Ave.', 83627);