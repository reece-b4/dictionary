DROP DATABASE IF EXISTS dictionary;
CREATE DATABASE dictionary;

\c dictionary

CREATE TABLE IF NOT EXISTS definitions(
    id SERIAL PRIMARY KEY,
    word VARCHAR, 
    meaning VARCHAR
);

INSERT INTO definitions (word, meaning)
VALUES
('hello', 'A greeting'),
('circle', 'A shape'),
('walk', 'To step with each foor in turn and move in a forward direction');