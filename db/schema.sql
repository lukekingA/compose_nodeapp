


CREATE TABLE "persons" (
	"id" int GENERATED ALWAYS AS IDENTITY,
	"name" varchar(20) NOT NULL,
	CONSTRAINT "pk_persons" PRIMARY KEY (
		"id"
	)
);

INSERT INTO "persons" ("name") VALUES ('Steve');
INSERT INTO "persons" ("name") VALUES ('Luke');
INSERT INTO "persons" ("name") VALUES ('Randy');
