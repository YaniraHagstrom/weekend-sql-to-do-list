DROP TABLE tasks;

CREATE TABLE tasks(
	"id" SERIAL PRIMARY KEY,
	"completed" BOOLEAN DEFAULT FALSE,
	"task" VARCHAR(250) NOT NULL,
	"date-added" DATE NOT NULL DEFAULT CURRENT_DATE,
	"datecompleted" DATE 
	);
	
	

INSERT INTO tasks (completed, task)
	VALUES
		(FALSE, 'Buy laptop protector'),
		(FALSE, 'Pickup milk');
		