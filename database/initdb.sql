DROP TABLE IF EXISTS person;
CREATE TABLE person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sex CHAR(1),
  first_name TEXT,
  last_name TEXT,
  birth_date DATE,
  death_date DATE,
  biography TEXT,
  father_id INTEGER,
  mother_id INTEGER,
  FOREIGN KEY(father_id) REFERENCES person(id),
  FOREIGN KEY(mother_id) REFERENCES person(id)
);