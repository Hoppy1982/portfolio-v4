/*
To run this script start mysql shell use the following cmd from mysql shell:
  \connect root@localhost:3306
   \source [abs path/filename.sql]
*/

/*Remove existing and recreate*/
DROP DATABASE IF EXISTS to_do_app;
CREATE DATABASE to_do_app;
USE to_do_app;


/*Remove existing tables and recreate*/
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS progresses;
DROP TABLE IF EXISTS categories;

CREATE TABLE progresses(
progress_id SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
progress VARCHAR(24) NOT NULL,
PRIMARY KEY (progress_id)
);

CREATE TABLE categories(
category_id SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
category VARCHAR(24) NOT NULL,
PRIMARY KEY (category_id)
);

CREATE TABLE tasks(
task_id SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
task_name VARCHAR(255) NOT NULL,
task_desc TEXT NOT NULL,
priority SMALLINT(6) UNSIGNED DEFAULT 10,
progress_id SMALLINT(6) UNSIGNED NOT NULL,
category_id SMALLINT(6) UNSIGNED NOT NULL,
PRIMARY KEY (task_id),
FOREIGN KEY (progress_id) REFERENCES progresses(progress_id),
FOREIGN KEY (category_id) REFERENCES categories(category_id)
);


/*Clear tables and repopulate*/
/*
Note: Can only delete rows from tables referenced with foreign keys (progresses * categories)
if child table (tasks) doesn't have records referencing those keys.
*/
SET SQL_SAFE_UPDATES = 0;
DELETE FROM tasks WHERE task_id IS NOT NULL;
DELETE FROM progresses WHERE progress_id IS NOT NULL;
DELETE FROM categories WHERE category_id IS NOT NULL;
SET SQL_SAFE_UPDATES = 1;

INSERT INTO progresses (progress) VALUES
('not started'),
('in progress'),
('completed'),
('deleted');

INSERT INTO categories (category)
VALUES
('work'),
('personal admin'),
('food shopping'),
('birthdays');

INSERT INTO tasks (
task_name,
task_desc,
priority,
progress_id,
category_id
)
VALUES
('buy eggs', 'but 6 free range eggs', 10, 1, 3),
('buy milk', 'but 4 pints of blue milk',8, 1, 3);


/*Remove existing user and recreate*/
DROP USER IF EXISTS to_do_app_user;
CREATE USER to_do_app_user IDENTIFIED BY 'to_do_app_user';
GRANT SELECT
  ON mysql.user
  TO 'to_do_app_user';
GRANT SELECT
  ON to_do_app.progresses
  TO 'to_do_app_user';
GRANT SELECT
  ON to_do_app.categories
  TO 'to_do_app_user';
GRANT SELECT, INSERT, UPDATE, DELETE
  ON to_do_app.tasks
  TO 'to_do_app_user';
