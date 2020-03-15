

-- -- CREATE DATABASE IF NOT EXISTS groceryListTracker;

-- -- USE groceryListTracker;

-- CREATE TABLE IF NOT EXISTS groceries (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   item VARCHAR(50),
--   quantity INT
-- );




CREATE DATABASE IF NOT EXISTS dish_pics;

USE dish_pics;

DROP TABLE IF EXISTS restaurants;
		
CREATE TABLE IF NOT EXISTS restaurants (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  rest_name VARCHAR(30)
);

-- ---
-- Table 'dishes'
-- 
-- -- ---

DROP TABLE IF EXISTS dishes;
		
CREATE TABLE dishes (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  dish_name VARCHAR(20),
  restaurant_id INTEGER
);

-- -- ---
-- -- Table 'images'
-- -- 
-- -- ---

DROP TABLE IF EXISTS images;
		
CREATE TABLE images (
  id INTEGER AUTO_INCREMENT PRIMARY KEY ,
  dish_id INTEGER,
  img_url MEDIUMTEXT,
  comment MEDIUMTEXT
);

-- -- ---
-- -- Foreign Keys 
-- -- ---

-- ALTER TABLE restaurants ADD FOREIGN KEY (id) REFERENCES dishes (restaurant_id);
-- ALTER TABLE dishes ADD FOREIGN KEY (id) REFERENCES images (dish_id);

-- ---
-- Table Properties
-- ---

ALTER TABLE restaurants ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE dishes ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE images ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO restaurants (id,rest_name) VALUES
-- ('','');
-- INSERT INTO dishes (id,dish_name,restaurant_id) VALUES
-- ('','','');
-- INSERT INTO images (id,dish_id,img_url,comment) VALUES
-- ('','','','');