DROP TABLE tasks;

CREATE TABLE tasks(
	"id" SERIAL PRIMARY KEY,
	"completed" BOOLEAN DEFAULT FALSE,
	"task" VARCHAR(250) NOT NULL,
	"dateAdded" DATE NOT NULL DEFAULT CURRENT_DATE,
	"dateCompleted" DATE
	);
	

INSERT INTO tasks (completed, task)
	VALUES
		(FALSE, 'Buy laptop protector'),
		(TRUE, 'Pickup milk');
		
		